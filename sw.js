/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["/01-quid/index.html","16d25ff06f60dcbe7a02dfea8dd28dbd"],["/01-quid/nosaltres/index.html","117d2922502ca36a4a54627eefdf88b7"],["/01-quid/partners/index.html","7c2309ef67ee90e43e54ce031f05324d"],["/01-quid/qui-som-nosaltres/index.html","3c4a9eea1009a715f43c63d119274117"],["/01-quid/qui-som-partners/index.html","244026803e3e5d168230241a7bd409ad"],["/02-missio-i-valors/index.html","8a599c3a488d7c4e5b8475e31afddc79"],["/03-serveis/index.html","4279a142b1bf43bd36d833040a8183f1"],["/03-serveis/productes/index.html","de8d03e3079538929631b907a74e64a1"],["/03-serveis/programes-quid/index.html","d1574d51f2fec4bbc9c8cbbafcc4e3ab"],["/04-metodologia/index.html","f0dfe065e08fec6216415331e02e8247"],["/04-metodologia/la-cultura-com-a-eix-vertebrador/index.html","37aa2a38e2578a08450728718a9be3b7"],["/04-metodologia/la-pagina-en-blanc/index.html","32a936200e7450d201eee72cd13a2609"],["/05-usos-i-beneficis/index.html","f0ca06b05921f3639b348fd88a2f5327"],["/06-casos-d-exit/index.html","e1fcb69ca8100ed7b54a14ab19cb8dd7"],["/2016/10/20/diale-benefici-mutu-i-icompromis-adn-de-quid.html","d3836642ff4792a2f209cde86155119d"],["/2016/10/20/serveis.html","15a6c9dc83185ef5e03286698c7ce775"],["/404.html","51d5905c60b1e71cb90ec4479fe16c62"],["/articles/2016/10/20/diale-benefici-mutu-i-icompromis-adn-de-quid.html","d3836642ff4792a2f209cde86155119d"],["/articles/2016/10/20/dialeg-benefici-mutu-i-icompromis-adn-de-quid.html","2ad7b5f638bfde7e8ea8a60aff43208f"],["/articles/2016/10/20/serveis.html","ff4a171b4ea35edae2d65bd78a12cc01"],["/articles/2016/10/24/simbiosi-entre-la-cultura-i-l-empresa.html","5e7ad9b05ce06ebbb068b9b003bcd21e"],["/articles/2016/11/03/metodologia-quid-connectem-empresa-cultura.html","2b17fab0c8f577b669b75399e7cd5796"],["/articles/2016/11/10/Empresa-i-cultura-connexions-amb-anima.html","b33962e4c6e7ca4f7dbce37b1da699eb"],["/articles/2016/11/15/win-win-empresa-cultura.html","7ac20dbef028cf9dc9f29e6f7ae2ed47"],["/articles/2016/11/17/Simposi-Quid-connexions-empresa-i-cultura.html","ab4c8119bf3d38e59ca30e76d38f4921"],["/articles/2016/11/22/Usos-i-beneficis-duna-comunicació-vinculada-a-la-cultura.html","59b558da50836ee36bae9ce02349895e"],["/articles/2016/11/29/problemes-empresarials-solucions-culturals.html","de5d31dbd854a43a56eacb4b0acd3c98"],["/assets/images/01-casos-d-exit-memora-w300.jpg","25f5ad3f12a95efdc16c4892b4d7d259"],["/assets/images/01-casos-d-exit-memora-w525.jpg","ab14a69a100564843ee7f64d8acd5815"],["/assets/images/01-casos-d-exit-memora.jpg","89ebb8ebe67fcf2c28c20aea2b5f4827"],["/assets/images/01-espai-de-trobada-quid-home-w525.jpg","e155d5b3534d2fc62028b6e83d271be8"],["/assets/images/01-espai-de-trobada-quid-home.jpg","d9f97b64a7b92f361efb4031ed1d27d6"],["/assets/images/01-qui-som-partners.jpg","aec42f97de3656dcabe0fc9fb7ae1858"],["/assets/images/01-qui-som.jpg","f5eeb73655f34792db1cbc1bf9227118"],["/assets/images/01-quid-qui-som-nosaltres-w525.jpg","7ec0a989094556f3f980db09639202d9"],["/assets/images/01-quid-qui-som-nosaltres.jpg","8877eddad582451000bcddd331a2d2af"],["/assets/images/01-quid-qui-som-partners-w525.jpg","8b0a27b4c982dd7f00b673250682d641"],["/assets/images/01-quid-qui-som-partners.jpg","aec42f97de3656dcabe0fc9fb7ae1858"],["/assets/images/01-quid-qui-som-w525.jpg","a75e11de29353456dd246ad6b6a92374"],["/assets/images/01-quid-qui-som.jpg","c3326e68fc23ed44e301e98161f6711a"],["/assets/images/01-quid.jpg","c3326e68fc23ed44e301e98161f6711a"],["/assets/images/02-aportar-valor-quid-home-w525.jpg","a18b35f04a5558cd857cb2511ca6aae3"],["/assets/images/02-aportar-valor-quid-home.jpg","96697029d881ac9cfc567906e85a02c0"],["/assets/images/02-casos-d-exit-mostra-art-digital-w300.jpg","9e2a1ef4a5b089552470c68410ae957e"],["/assets/images/02-casos-d-exit-mostra-art-digital-w525.jpg","93d92893888183e497e245371f8d3e06"],["/assets/images/02-casos-d-exit-mostra-art-digital.jpg","46625bde88a8731f37c33c41033231ff"],["/assets/images/03-casos-d-exit-poetopia-w300.jpg","523e67fc94828abad9dd5635d5adb844"],["/assets/images/03-casos-d-exit-poetopia-w525.jpg","51b58bc8a698bf94e9971e23291aad9b"],["/assets/images/03-casos-d-exit-poetopia.jpg","07821b5aeffbc4206b582ae2b1bd6e66"],["/assets/images/03-fer-creixer-quid-home-w525.jpg","07ba6978a52d023b0504cfd87faf8d31"],["/assets/images/03-fer-creixer-quid-home.jpg","60945f4c1f680257ed1999467992d57d"],["/assets/images/03-serveis-productes-gent-gran.jpg","0c5b7c1dea05d029c847853193738300"],["/assets/images/03-serveis-programes-comunicacio-w525.jpg","59fcc23787eaeed55fa01773cf22d02c"],["/assets/images/03-serveis-programes-comunicacio.jpg","3822d138a85d5afd536dba29adcd3000"],["/assets/images/03-serveis-programes-creacio.jpg","f3d491d7e4e89421733706e315186a32"],["/assets/images/03-serveis-programes-dialeg.jpg","26fcd441cefaf0561b40fb93fedad15c"],["/assets/images/03-serveis-programes-patrocini.jpg","4236a05cf77d6177c4781517a78856a0"],["/assets/images/03-serveis-programes-poetopia.jpg","f99999db37a28333157e3806e301b81b"],["/assets/images/03-serveis-programes-presencia.jpg","ba269118fd8cb22fb56cd6a04787d27d"],["/assets/images/03-serveis-w525.jpg","e5e3f734e28510daa066b6292a8bee22"],["/assets/images/03-serveis.jpg","057f81aeeb1e4390dc14a16bf0c2efad"],["/assets/images/04-casos-d-exit-mte-w300.jpg","b466e60245821ce823c8733dde022a25"],["/assets/images/04-casos-d-exit-mte-w525.jpg","e54d6fecb05a88edb663f2d3c6466998"],["/assets/images/04-casos-d-exit-mte.jpg","ef8666d5b37ad6cb27f1ade9e1106970"],["/assets/images/04-metodologia-cultura-eix-vertebrador-w525.jpg","347dbfa1c4390b3605ffd03a3df793e7"],["/assets/images/04-metodologia-cultura-eix-vertebrador.jpg","04dfc54cbc1d85d8c59a0f39186c06f0"],["/assets/images/04-metodologia-esquema.jpg","0880579415a1ce350dd20174a6707820"],["/assets/images/04-metodologia-pagina-en-blanc-w525.jpg","fedda704b5b887560a6d319e1907723a"],["/assets/images/04-metodologia-pagina-en-blanc.jpg","58382446c4e89263f78dfab89ad46ef8"],["/assets/images/04-metodologia-w525.jpg","ce1626c22161abc60582ff91fddac4b8"],["/assets/images/04-metodologia.jpg","cb52e81c36dd8f23464e55a6a660a1ad"],["/assets/images/04-millorar-quid-home-w525.jpg","7fa30e974b867ab193112c699aa4623f"],["/assets/images/04-millorar-quid-home.jpg","9cfe88a362f9283b00c30e5bda485f30"],["/assets/images/05-casos-d-exit-gent-gran-font-de-saviesa-w300.jpg","5b53902777748a398f62317d1d1a4636"],["/assets/images/05-casos-d-exit-gent-gran-font-de-saviesa-w525.jpg","f80fedd19394bbd4b74ba0acd98a6815"],["/assets/images/05-casos-d-exit-gent-gran-font-de-saviesa.jpg","8dcc79971026cbb3bd4617a3856d210b"],["/assets/images/05-think-win-win-quid-home-w525.jpg","211f82ccf9aa1a037e5924db1bd44e46"],["/assets/images/05-think-win-win-quid-home.jpg","28667adc2e53ed48632c41dc162541a2"],["/assets/images/Serveis-Quid-Retorn-social-corporatiu-cultura-empresa.png","a25feb198cb5fd1b7de4e2ebb15d617f"],["/assets/images/Simposi-Quid-connexions-empresa-i-cultura.jpg","f25d37763a7079953fea8da61ad82d86"],["/assets/images/agencia-catalana-del-patrimoni-cultural.jpg","84b1b5695001241f517cde376866d339"],["/assets/images/alexandra-maso.jpg","0b310bc0804c94341664d7226837ad34"],["/assets/images/alexandra-maso.png","14a235edb1a5a407ab4b707a534723b7"],["/assets/images/alianca-cultura-empresa-quid.jpg","b31671f5e160aa35f05bc674ebe0c1e2"],["/assets/images/author.png","63fd657e4bff15346acefaa0fe448a8f"],["/assets/images/connectar-empresa-cultura-rsc-metodologia.png","383d3acd0773f221694a882ec50f3a6c"],["/assets/images/ic_chevron_left_black_24dp_2x.png","a49283b3afe90eb0693d9dc295e1b57a"],["/assets/images/ic_chevron_right_black_24dp_2x.png","6dcbc9f1542c2c5e8a6da45ce07e8565"],["/assets/images/ic_menu_white_1x_web_24dp.png","cd703bdcd83411a8790b570d6fe7081d"],["/assets/images/ic_menu_white_2x_web_24dp.png","9cd2ca85f0a29c5666f642d3838aa159"],["/assets/images/lluis-puigvert-perfil-quid.jpg","75a4cf131eb525c4714afbfe0df49bb8"],["/assets/images/logo-quid-about.png","c75189e9b7e67a03d0ed9883528ce73d"],["/assets/images/logo.jpg","4323a0f8647c1b7b81bcf3f3e310f865"],["/assets/images/logo.png","370c3b85fa8e09d3237ae9b64512ef8c"],["/assets/images/marta-carrete.jpg","933a79a50ca3f6bce75564fcdf4eea4b"],["/assets/images/oxygen.jpg","a1ba65eaeb02a3bd3520e61eace960c9"],["/assets/images/pep-mares-perfil-quid.jpg","f9753a5cc764077e8327d4ff3a0a6d7b"],["/assets/images/problemes-empresarials-solucions-culturals.jpg","70e181484596415506bcfd621950b3dc"],["/assets/images/quid-adn.jpg","2e208d8a8eff91d60d5b33b9305b600c"],["/assets/images/ramon-gil-perfil-quid.jpg","4edb4ab7571d8672d075da89bc8c01fa"],["/assets/images/screenshot.png","898927d8e24f5f145fbd7c53a013904b"],["/assets/images/sid-publicitat.jpg","44e7dbcda03a90cccf6fb42cee93df41"],["/assets/images/speed.png","b141c1e3c5a6a8dda24d59f9bf31de40"],["/assets/images/touch/apple-touch-icon-114x114.png","4f68410b7da1323b5a4d02978498fde4"],["/assets/images/touch/apple-touch-icon-120x120.png","1978b4afbbed5fd4a70a59ea348ed7c3"],["/assets/images/touch/apple-touch-icon-144x144.png","09c6caee6fe23e81749f8de7ac893d96"],["/assets/images/touch/apple-touch-icon-152x152.png","e306e1b12b2274a2c56e4f24d37f696f"],["/assets/images/touch/apple-touch-icon-180x80.png","6d0550adf8101a0e3da7a8bc59ae37f5"],["/assets/images/touch/apple-touch-icon-57x57.png","a75a01d3dffb98fd9e303bfbd9332be3"],["/assets/images/touch/apple-touch-icon-60x60.png","3d74abbbaa825579a2a07a3060fafc67"],["/assets/images/touch/apple-touch-icon-72x72.png","f703c50744c19feab74cbd6bff2c4d34"],["/assets/images/touch/apple-touch-icon-76x76.png","acb088d57613255cd6b282bc7bbf6df5"],["/assets/images/touch/apple-touch-icon.png","a656c01ceafc030c314b6b42e33b4693"],["/assets/images/touch/apple-touch-startup-image-1182x2208.png","71cc1abfcf4ddb925b6ee15e98a42f37"],["/assets/images/touch/apple-touch-startup-image-1242x2148.png","851dacd61297520d144e828b531ec839"],["/assets/images/touch/apple-touch-startup-image-1496x2048.png","366cf3fdfca3f7d6d35530fdfe4651f0"],["/assets/images/touch/apple-touch-startup-image-1536x2008.png","1bc64b39d2c427e8a736722ddb6a5a03"],["/assets/images/touch/apple-touch-startup-image-320x460.png","d4b887e0ec38c33391e5fad0b4d981c5"],["/assets/images/touch/apple-touch-startup-image-640x1096.png","e529f50b5be8e00b93b9f4e2181c7518"],["/assets/images/touch/apple-touch-startup-image-640x920.png","0e3f77eb075bda215cd53ef7bec97b6c"],["/assets/images/touch/apple-touch-startup-image-748x1024.png","8218d2b61358aa838d55408119938fe2"],["/assets/images/touch/apple-touch-startup-image-750x1294.png","715e0833dccfa5ed75f6e0b8e288ee01"],["/assets/images/touch/apple-touch-startup-image-768x1004.png","268e5e1760c79b300aebe6f5d2934740"],["/assets/images/touch/chrome-touch-icon-192x192.png","be6895ce581dff7edf0ec1d64b2d8d31"],["/assets/images/touch/coast-228x228.png","9946a5dc24071800f9ecbe5530ac28ee"],["/assets/images/touch/favicon-16x16.png","d8123ad4603af75df33930417c69096f"],["/assets/images/touch/favicon-230x230.png","efed50e75bf65c5e0bb7d3216c395ca9"],["/assets/images/touch/favicon-32x32.png","967182ad2462d381d76bf794163ea9c4"],["/assets/images/touch/favicon-96x96.png","767b024a0cc5d0838b46949b12e27091"],["/assets/images/touch/icon-128x128.png","a582360bbe8a7bf999e740bc6d5d82cb"],["/assets/images/touch/ms-touch-icon-144x144-precomposed.png","3c86307e51945486d4fc211d6a860228"],["/assets/images/touch/mstile-144x144.png","7841e08a9aafd76b6f145721574923af"],["/assets/images/touch/mstile-150x150.png","5ebcb64de342971b26c4b84c4aef2b59"],["/assets/images/touch/mstile-310x150.png","2dc5234b1cb402b7bd4cb39769862547"],["/assets/images/touch/mstile-310x310.png","390eaec6816db301a0e40d2c0c5266d1"],["/assets/images/touch/mstile-70x70.png","f99d41d873ce6cf2d8ac740898aba895"],["/assets/images/touch/touch-icon.png","e2b098f046e1a169849e45c408f229de"],["/assets/images/touch/yandex-browser-50x50.png","d086d599e83412b7bdc8861f627ef06e"],["/assets/images/touch/yandex-browser-manifest.json","bc28e53d72d07904a4dd9fece56c95dd"],["/assets/images/usos-i-beneficis-comunicacio.jpg","0bb084d2da9dc775ebc7bb4e8e2cedc4"],["/assets/images/win-win-cultura-empresa-rsc (Case Conflict).png","f49ac6871acaf5d82b825fd0575cb085"],["/assets/images/win-win-cultura-empresa-rsc.png","88fa1077f2d44ff62d8367c291c06e7f"],["/assets/images/win-win-empresa-cultura.png","1237d0f46cc446fd1537731fca66fe54"],["/assets/images/xarxademuseus-girona.jpg","6e2f4d5d6c45de60ac64e736e04943bf"],["/assets/images/xarxademuseus-girona.png","adc59be5ba8f46b7cc327095714cf4e2"],["/blog/index.html","c978c0c4a75a38e185bf16b265327577"],["/blog/page2/index.html","c2c4e3bcdd0b3e14ac06bc8ac1685a75"],["/casos-d-exit/index.html","c734d91c9c58211fc77317e9283c9d34"],["/casos-d-exits/l-altra-cara-de-la-vida.html","762c6f2e793440650bef5ff0f30c8c82"],["/casos-d-exits/mostra-d-art-digital.html","d4fb7e0fd51791777ebab3bd6166a2df"],["/casos-d-exits/museu-de-la-tecnica-de-l-emporda.html","2ce940448759aaa8c754e2673e209071"],["/casos-d-exits/poetopia.html","7843b4627bdd778d15fb4a398f782f4f"],["/casos-d-exits/sfb-gent-gran-font-de-saviesa.html","94711b97fa7ec4d3bb32fd2373ea8a59"],["/google614be494af9bad15.html","bde376fb5880389d809048c5eb38b25c"],["/index.html","0e6b22dbcd66d7132e452d6fd8ef5066"],["/manifest.json","b64581c4da390461da98b99e17f53770"],["/newsletter/index.html","c8a604b148c64cdeebce35796eac3a54"],["/package.json","bb7f221594ce2cb50fd5869014c995fe"],["/sw.html","812189a6e664623f18d10d937d1e8b2b"]];
var cacheName = 'sw-precache-v2--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var createCacheKey = function (originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.toString().match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              return cache.add(new Request(cacheKey, {credentials: 'same-origin'}));
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameter and see if we have that URL
    // in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







