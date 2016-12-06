'use strict';

import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import runSequence from 'run-sequence';
import browserSync from 'browser-sync';
import swPrecache from 'sw-precache';
const $ = gulpLoadPlugins();

// Minify the HTML.
gulp.task('minify-html', () => {
  return gulp.src('_site/**/*.html')
    .pipe($.htmlmin({
      removeComments: true,
      collapseWhitespace: true,
      collapseBooleanAttributes: true,
      removeAttributeQuotes: true,
      removeRedundantAttributes: true,
      removeEmptyAttributes: true,
      removeScriptTypeAttributes: true,
      removeStyleLinkTypeAttributes: true,
      removeOptionalTags: true
    }))
    .pipe(gulp.dest('_site'));
});

// Optimize images.
gulp.task('minify-images', () => {
  gulp.src('assets/**/*')
    .pipe($.imagemin({
      progressive: true,
      interlaced: true
    }))
    .pipe(gulp.dest('_site/assets'));
});

gulp.task('static-hash', () => {
    return gulp.src('_site/**/OneSignalSDKWorker.js')
        .pipe($.staticHash({asset: '_site'}))
        .pipe(gulp.dest('_site'));
});

// Minify and add prefix to css.
gulp.task('css', () => {
  const AUTOPREFIXER_BROWSERS = [
    'ie >= 10',
    'ie_mob >= 10',
    'ff >= 30',
    'chrome >= 34',
    'safari >= 7',
    'opera >= 23',
    'ios >= 7',
    'android >= 4.4',
    'bb >= 10'
  ];

  return gulp.src('css/main.css')
    .pipe($.autoprefixer(AUTOPREFIXER_BROWSERS))
    .pipe($.cssnano())
    .pipe(gulp.dest('_site/css'));
});

// Compile scss to css.
gulp.task('scss', () => {
    return gulp.src('scss/main.scss')
        .pipe($.sass({
            includePaths: ['css'],
            onError: browserSync.notify
        }))
        .pipe(gulp.dest('css'));
});

// Watch change in files.
gulp.task('serve', ['jekyll-build'], () => {
  browserSync.init({
    notify: false,
    // Run as an https by uncommenting 'https: true'
    // Note: this uses an unsigned certificate which on first access
    //       will present a certificate warning in the browser.
    // https: true,
    server: '_site',
    port: 3000
  });

  // Warch html changes.
  gulp.watch([
    'css/**/*.css',
    '_includes/**/*.html',
    '_layouts/**/*.html',
    '_posts/**/*.md',
    '**/**/*.md',
    '*.md',
    'index.html'
  ], ['jekyll-build', browserSync.reload]);

  // Watch scss changes.
  gulp.watch('scss/**/*.scss', ['scss']);

});

gulp.task('generate-service-worker', function(callback) {
  var path = require('path');
  var rootDir = '_site';

  swPrecache.write(path.join(rootDir, 'sw.js'), {
    runtimeCaching: [{
      urlPattern: /\.ampproject\.org\//,
      handler: 'cacheFirst',
      options: { cache: { name: 'amproject' } }
    }],
    staticFileGlobs: [rootDir + '/**/*.{woff,html,css,png,jpg,gif,json}'],
    stripPrefix: rootDir,
    replacePrefix: ''
  }, callback);
});

gulp.task('jekyll-build', ['scss'], $.shell.task([ 'jekyll build' ]));

// Default task.
gulp.task('build', () =>
  runSequence(
    'scss',
    'jekyll-build',
    'css',
    'generate-service-worker',
    'static-hash',
    'minify-images'
  )
);

// Edit config file for jekyll build.
gulp.task('before-gh-deploy', () => {
  return gulp.src('./_config.yml')
    .pipe($.replace('baseurl: ""', 'baseurl: "/quid"'))
    .pipe(gulp.dest('./'));
});

// Revert config file for gulp serve in local.
gulp.task('cleanup-gh-deploy', () => {
  return gulp.src('./_config.yml')
    .pipe($.replace('baseurl: "/quid"', 'baseurl: ""'))
    .pipe(gulp.dest('./'));
});

// Depoly website to gh-pages.
gulp.task('gh-pages', () => {
  return gulp.src('./_site/**/*')
    .pipe($.ghPages());
});

gulp.task('deploy', () => {
  runSequence(
    'before-gh-deploy',
    'scss',
    'jekyll-build',
    'css',
    'generate-service-worker',
    'minify-images',
    'gh-pages',
    'cleanup-gh-deploy'
  )
});

