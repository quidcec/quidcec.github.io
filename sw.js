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

var precacheConfig = [["/01-quid/index.html","34cab73774447d246a8e0617fca07fd8"],["/01-quid/nosaltres/index.html","e9d7ef7ed1740c58b97024abf28c1ba9"],["/01-quid/partners/index.html","837844fa27b87f5830e4b2522b802e69"],["/01-quid/qui-som-nosaltres/index.html","c10255eb872dd800b14a99d9799ae1cd"],["/01-quid/qui-som-partners/index.html","bb17e9f87b5674e1659e09e460919ff8"],["/02-missio-i-valors/index.html","18765c1654a1855c5e53af931a82a097"],["/03-serveis/index.html","82a6fb17cd29205663da65c0be4d6bb0"],["/03-serveis/productes/index.html","1aa3a436e3ff73010db5455c34bdbe6a"],["/03-serveis/programes-quid/index.html","e416614612088bab86f5388f79d36618"],["/04-animacio-deixalleria/0003-sid-deixalleria-camio.svg_2.png","48d03d654324dae183f09f12e33f7436"],["/04-animacio-deixalleria/0003-sid-deixalleria-camio.svg_4.png","48d03d654324dae183f09f12e33f7436"],["/04-animacio-deixalleria/0003-sid-deixalleria-camio.svg_5.png","48d03d654324dae183f09f12e33f7436"],["/04-animacio-deixalleria/0003-sid-deixalleria-camio.svg_6.png","48d03d654324dae183f09f12e33f7436"],["/04-animacio-deixalleria/0003-sid-deixalleria-gavina.svg_1.png","3cfbf19333624d994be1c9566a15f921"],["/04-animacio-deixalleria/0003-sid-deixalleria-gavina.svg_2.png","3cfbf19333624d994be1c9566a15f921"],["/04-animacio-deixalleria/0108-boto-sid-deixalleria.svg.png","ea828adf8ffd129c33a097ee9a5affa5"],["/04-animacio-deixalleria/0108-boto-sid-deixalleria.svg_1.png","ea828adf8ffd129c33a097ee9a5affa5"],["/04-animacio-deixalleria/0108-boto-sid-deixalleria.svg_2.png","ea828adf8ffd129c33a097ee9a5affa5"],["/04-animacio-deixalleria/0108-boto-sid-deixalleria.svg_3.png","ea828adf8ffd129c33a097ee9a5affa5"],["/04-animacio-deixalleria/0108-boto-sid-deixalleria.svg_4.png","ea828adf8ffd129c33a097ee9a5affa5"],["/04-animacio-deixalleria/0108-boto-sid-deixalleria.svg_5.png","ea828adf8ffd129c33a097ee9a5affa5"],["/04-animacio-deixalleria/0108-boto-sid-deixalleria.svg_6.png","ea828adf8ffd129c33a097ee9a5affa5"],["/04-animacio-deixalleria/0108-boto-sid-deixalleria.svg_7.png","ea828adf8ffd129c33a097ee9a5affa5"],["/04-animacio-deixalleria/0108-boto-sid-deixalleria.svg_8.png","ea828adf8ffd129c33a097ee9a5affa5"],["/04-animacio-deixalleria/02-boto-endarrera-sid-deixalleria.svg.png","d91ecf91f1a4c7ef261bbc3dd1c86d0d"],["/04-animacio-deixalleria/02-boto-endarrera-sid-deixalleria.svg_1.png","d91ecf91f1a4c7ef261bbc3dd1c86d0d"],["/04-animacio-deixalleria/02-boto-endarrera-sid-deixalleria.svg_2.png","d91ecf91f1a4c7ef261bbc3dd1c86d0d"],["/04-animacio-deixalleria/02-boto-endarrera-sid-deixalleria.svg_3.png","d91ecf91f1a4c7ef261bbc3dd1c86d0d"],["/04-animacio-deixalleria/02-boto-endarrera-sid-deixalleria.svg_4.png","d91ecf91f1a4c7ef261bbc3dd1c86d0d"],["/04-animacio-deixalleria/02-boto-endarrera-sid-deixalleria.svg_5.png","d91ecf91f1a4c7ef261bbc3dd1c86d0d"],["/04-animacio-deixalleria/02-boto-endarrera-sid-deixalleria.svg_6.png","d91ecf91f1a4c7ef261bbc3dd1c86d0d"],["/04-animacio-deixalleria/02-boto-endarrera-sid-deixalleria.svg_7.png","d91ecf91f1a4c7ef261bbc3dd1c86d0d"],["/04-animacio-deixalleria/02-boto-endavant-sid-deixalleria.svg_1.png","8699b1932aa16b08807d476fdd7b8500"],["/04-animacio-deixalleria/02-boto-endavant-sid-deixalleria.svg_2.png","8699b1932aa16b08807d476fdd7b8500"],["/04-animacio-deixalleria/02-boto-endavant-sid-deixalleria.svg_3.png","8699b1932aa16b08807d476fdd7b8500"],["/04-animacio-deixalleria/02-boto-endavant-sid-deixalleria.svg_4.png","8699b1932aa16b08807d476fdd7b8500"],["/04-animacio-deixalleria/02-boto-endavant-sid-deixalleria.svg_5.png","8699b1932aa16b08807d476fdd7b8500"],["/04-animacio-deixalleria/02-boto-endavant-sid-deixalleria.svg_6.png","8699b1932aa16b08807d476fdd7b8500"],["/04-animacio-deixalleria/02-boto-endavant-sid-deixalleria.svg_7.png","8699b1932aa16b08807d476fdd7b8500"],["/04-animacio-deixalleria/02-boto-endavant-sid-deixalleria.svg_8.png","8699b1932aa16b08807d476fdd7b8500"],["/04-animacio-deixalleria/0201-boto-sid-deixalleria.svg.png","72c6ed7daf07a0beea437c2b2cacba9e"],["/04-animacio-deixalleria/0201-sid-deixalleria.svg_2.png","a43e2bce4ce6ef05da610e7768c7ad70"],["/04-animacio-deixalleria/0202-boto-sid-deixalleria.svg.png","35862df2c3fc33030ff33a90da64c821"],["/04-animacio-deixalleria/0202-sid-deixalleria.svg_1.png","796b2bd3511803fdf36d2e1649e13bcb"],["/04-animacio-deixalleria/0203-boto-sid-deixalleria.svg.png","3382cc26c1791e74991f3b09d382f300"],["/04-animacio-deixalleria/0203-sid-deixalleria.svg_1.png","c8c3d705001edc6af29610c96ec2873f"],["/04-animacio-deixalleria/0204-boto-sid-deixalleria.svg.png","7c5d31f216f371e48e0fd5b872fcd441"],["/04-animacio-deixalleria/0204-sid-deixalleria.svg.png","640c1ddbdefa2e0c9e0a975f3fdfe2e5"],["/04-animacio-deixalleria/0205-boto-sid-deixalleria.svg.png","553f90063de1c8565311bdad33cf7167"],["/04-animacio-deixalleria/0205-sid-deixalleria.svg.png","4a7780695e9db453a4998f97e8b859ee"],["/04-animacio-deixalleria/0206-boto-sid-deixalleria.svg.png","579cd4aa5276702c704a9a1e3a2cf4c6"],["/04-animacio-deixalleria/0206-sid-deixalleria.svg.png","426d7c0d45cd9ee3f8e12014b171a895"],["/04-animacio-deixalleria/0207-boto-sid-deixalleria.svg.png","5f73066443b4b3e9b758e5d060ead278"],["/04-animacio-deixalleria/0207-sid-deixalleria.svg.png","acac40a2137096667881ce214849d7a7"],["/04-animacio-deixalleria/0208-boto-sid-deixalleria.svg.png","9fa15e8e480f641a164b771245d984e7"],["/04-animacio-deixalleria/0208-sid-deixalleria.svg.png","b7018bed3e30d6fc4eb28d975286b9c1"],["/04-animacio-deixalleria/index.html","c78d3355ccdaa27d0adf27ca45cf84f2"],["/04-metodologia/index.html","929994b3d8fa185a9ab486fe36feb71c"],["/04-metodologia/la-cultura-com-a-eix-vertebrador/index.html","b3ce889e600c3646d1bacf6120b5abe1"],["/04-metodologia/la-pagina-en-blanc/index.html","ae84ad617608516ad7dfe5389e68ea4a"],["/05-usos-i-beneficis/index.html","81db47b7b51e039e8c817023578cf957"],["/06-casos-d-exit/index.html","31f2ae0a531d86fd6b1d078a82fe8c7b"],["/404.html","e5d90d8dfb09daee20303429ed66db3e"],["/actualitat/2016/12/21/es-presenta-el-programa-quid-que-preten-connectar-empresa-i-cultura-per-a-millorar-la-comunicacio-i-la-imatge-de-l-empresa.html","7c65a6593a1bd961e6fdf6edeb2822d8"],["/actualitat/2017/01/26/el-patrimoni-catala-mes-a-prop-gracies-a-argonautes.html","40a12af464a457b06feea0ed40369cfc"],["/actualitat/2017/02/01/argonautes-busquem-el-suport-d-empreses-i-institucions.html","b5f88452f3788fe60e984f6be1c47e81"],["/articles/2016/10/20/dialeg-benefici-mutu-i-icompromis-adn-de-quid.html","c16d8e284bc38005a590110611ce3229"],["/articles/2016/10/20/serveis.html","d78945ea43c3eee6bdb2e936fd683768"],["/articles/2016/10/24/simbiosi-entre-la-cultura-i-l-empresa.html","0f4658237217f50bfc8b96c5ef1ad5ac"],["/articles/2016/11/03/metodologia-quid-connectem-empresa-cultura.html","cd1d789045b540b0a82ac5b4c0f107f8"],["/articles/2016/11/10/Empresa-i-cultura-connexions-amb-anima.html","842f615c9eac9f853cb9b69f3d7ce0d5"],["/articles/2016/11/15/win-win-empresa-cultura.html","fa02871e2f3ca88b9ef102f54092dc58"],["/articles/2016/11/17/Simposi-Quid-connexions-empresa-i-cultura.html","acab25fb9d7cfdc0715934f826d03ecd"],["/articles/2016/11/22/Usos-i-beneficis-duna-comunicació-vinculada-a-la-cultura.html","a1fd12927e25242ce09bcf322bd87a21"],["/articles/2016/11/29/problemes-empresarials-solucions-culturals.html","bf812b87a34f47c24391e23e82b8147b"],["/articles/2016/12/05/per-crear-vincles-de-confianca-entre-l-empresa-i-la-cultura-programa-de-presencia.html","4b5ce09e344960f12cf7cbd598a5f395"],["/articles/2016/12/13/cultura-i-empresa-com-a-motors-de-cohesio-social.html","eca56f0f6f0c5f57b55c025885a70586"],["/articles/2016/12/19/Marketing-social-corporatiu-una-eina-util-per-a-les-empreses.html","de5f2346b7ed98b462ba4e8a57b382f6"],["/articles/2017/01/02/Beneficis-i-usos-dunir-cultura-i-empresa.html","eb7bd1d8bf662297eca7c475cd2414d4"],["/articles/2017/01/10/quatre-raons-per-incorporar-lart-al-teu-local-comercial.html","9adc37553b57295f361e72d822387b03"],["/articles/2017/01/17/Agora-d-I-D-de-cultura-i-empresa-de-Quid.html","284895e60b2ed185a5bdcd271101b06d"],["/articles/2017/02/07/beneficis-del-marketing-social-corporatiu.html","cae45b9da089d92fdd744c88707103fa"],["/articles/2017/02/15/art-and-place-per-donar-valor-al-teu-negoci.html","a1f6e3e769f6225abcd7e19954ae71cc"],["/articles/2017/02/22/poesia-com-a-motor-de-transformacio.html","d79578f36f66a156bd35bec30175e2d8"],["/articles/2017/03/16/innovar-i-reconstruir-les-organitzacions-culturals.html","9446f941f50d8107541c1e3e1308be3a"],["/articles/2017/05/30/com-integrar-la-rsc-a-la-teva-empresa.html","1534b499b518931aca157c89ee1aa2b5"],["/articles/2017/06/13/quid-i-comeet-teambuilding.html","556de9e315b7b94be15f64cc215a5213"],["/articles/2017/10/19/ciutat-i-cultura-un-binomi-guanyador.html","9a9954f99cad2a6c41029e3537e2e9b4"],["/articles/2018/05/22/tecnologia-i-cultura-al-servei-de-la-societat.html","157cb1e749e8e1c8a3fe9e67740c277d"],["/assets/fonts/4vqKRIwnQQGUQQh-PnvdMA.woff2","ccb601ecfc7ed29ee9e594c0774cbbb9"],["/assets/fonts/BYKAuswRIqh69412sen31PY6323mHUZFJMgTvxaG2iE.woff2","8c8f28d332da3d3594deeb4e2ab1d096"],["/assets/fonts/GsNxiN0oIzsS201cnUag6w.woff2","972356f1b7a9f588cf3b47d4cfe566b4"],["/assets/fonts/I0dEfRgGNE90_hXZq7bjyw.woff2","b453edfb2ae26f8c229bc79f9879a800"],["/assets/fonts/P18Nsu9EiYldSvHIj_0e5w.woff2","bff8d5e4c936f4834a3a0430a0ce9000"],["/assets/fonts/VZ-5ejr2fpt5l1RKkVxPr_Y6323mHUZFJMgTvxaG2iE.woff2","a5ebee7a63f01fc7908189c007c652a0"],["/assets/fonts/opensans_bold_macroman/OpenSans-Bold-webfont.woff","2e90d5152ce92858b62ba053c7b9d2cb"],["/assets/fonts/opensans_extrabold_macroman/OpenSans-ExtraBold-webfont.woff","6ad396399f4022ccd1616cf11d0985be"],["/assets/fonts/opensans_light_macroman/OpenSans-Light-webfont.woff","45b47f3e9c7d74b80f5c6e0a3c513b23"],["/assets/images/01-casos-d-exit-memora-dot-funerari-w300.jpg","ea2710e9ba6514b4d90b83ef3d7dca63"],["/assets/images/01-casos-d-exit-memora-dot-funerari-w525.jpg","f473c406a869496066f35c2a31764f7a"],["/assets/images/01-casos-d-exit-memora-dot-funerari.jpg","ab0da0dfcbfdb6edfae9cbcb2105bb53"],["/assets/images/01-casos-d-exit-memora-w300.jpg","56943303e4e4361f681a35b806531f15"],["/assets/images/01-casos-d-exit-memora-w525.jpg","f8bb87dd7f1897863972f086b2cda726"],["/assets/images/01-casos-d-exit-memora.jpg","89ebb8ebe67fcf2c28c20aea2b5f4827"],["/assets/images/01-espai-de-trobada-quid-home-w525.jpg","e155d5b3534d2fc62028b6e83d271be8"],["/assets/images/01-espai-de-trobada-quid-home.jpg","d9f97b64a7b92f361efb4031ed1d27d6"],["/assets/images/01-qui-som-partners.jpg","aec42f97de3656dcabe0fc9fb7ae1858"],["/assets/images/01-qui-som.jpg","f5eeb73655f34792db1cbc1bf9227118"],["/assets/images/01-quid-connectar-empresa-i-cultura-millorar-comunicacio-i-imatge-empresa-w525.jpg","359a950fd87db71d0b6225463528bb2f"],["/assets/images/01-quid-connectar-empresa-i-cultura-millorar-comunicacio-i-imatge-empresa.jpg","e2439c97199ab6c153568f83bc817acb"],["/assets/images/01-quid-qui-som-nosaltres-w525.jpg","7ec0a989094556f3f980db09639202d9"],["/assets/images/01-quid-qui-som-nosaltres.jpg","15c4ffa535cad4e3174ed6701eff14d4"],["/assets/images/01-quid-qui-som-partners-w525.jpg","7ad2df24e0afddd5ca61e2b4c2a78556"],["/assets/images/01-quid-qui-som-partners.jpg","aec42f97de3656dcabe0fc9fb7ae1858"],["/assets/images/01-quid-qui-som-w525.jpg","1026fd1138b19910a8581d70a1993eec"],["/assets/images/01-quid-qui-som.jpg","dd5dd2b78a0674b7dc9b68264baa5afb"],["/assets/images/01-quid.jpg","dd5dd2b78a0674b7dc9b68264baa5afb"],["/assets/images/02-aportar-valor-quid-home-w525.jpg","a18b35f04a5558cd857cb2511ca6aae3"],["/assets/images/02-aportar-valor-quid-home.jpg","96697029d881ac9cfc567906e85a02c0"],["/assets/images/02-casos-d-exit-mostra-art-digital-w300.jpg","a0b5970d8ccbf87a62cb0f19779100d2"],["/assets/images/02-casos-d-exit-mostra-art-digital-w525.jpg","d55f61d668237ffa8a4b97b229f107ee"],["/assets/images/02-casos-d-exit-mostra-art-digital.jpg","ad9d0346735fb95e52a38b1325f83506"],["/assets/images/03-casos-d-exit-poetopia-w300.jpg","76035e93b5bbf9d8be20fdf442021c64"],["/assets/images/03-casos-d-exit-poetopia-w525.jpg","51b58bc8a698bf94e9971e23291aad9b"],["/assets/images/03-casos-d-exit-poetopia.jpg","1ae6f5a4ce0c7f18998bed76f8378db2"],["/assets/images/03-fer-creixer-quid-home-w525.jpg","07ba6978a52d023b0504cfd87faf8d31"],["/assets/images/03-fer-creixer-quid-home.jpg","bdcaaf3527834cfc5405984ee7a6cfe6"],["/assets/images/03-serveis-productes-gent-gran.jpg","15be1cec93b7cb7b15b9f1000f131546"],["/assets/images/03-serveis-programes-comunicacio-w525.jpg","58fbeb99df4f6ddc63edace2106e7ddc"],["/assets/images/03-serveis-programes-comunicacio.jpg","5a06101d38362a50ef574dbfb097cfd5"],["/assets/images/03-serveis-programes-creacio.jpg","91854e20960815ae40b75382e553dc59"],["/assets/images/03-serveis-programes-dialeg.jpg","26fcd441cefaf0561b40fb93fedad15c"],["/assets/images/03-serveis-programes-patrocini.jpg","4236a05cf77d6177c4781517a78856a0"],["/assets/images/03-serveis-programes-poetopia.jpg","f99999db37a28333157e3806e301b81b"],["/assets/images/03-serveis-programes-presencia.jpg","52fd5050e1cf3a31a81caef4e95f385d"],["/assets/images/03-serveis-w525.jpg","e5e3f734e28510daa066b6292a8bee22"],["/assets/images/03-serveis.jpg","057f81aeeb1e4390dc14a16bf0c2efad"],["/assets/images/04-casos-d-exit-mte-w300.jpg","f5cd72b9704d0849297286484986f24d"],["/assets/images/04-casos-d-exit-mte-w525.jpg","e3f7a8b6e23a1cada4a15c774fd76b8b"],["/assets/images/04-casos-d-exit-mte.jpg","ef8666d5b37ad6cb27f1ade9e1106970"],["/assets/images/04-metodologia-cultura-eix-vertebrador-w525.jpg","4ac2bd61b5cd4c9f29b8ebb8a78f4a36"],["/assets/images/04-metodologia-cultura-eix-vertebrador.jpg","04dfc54cbc1d85d8c59a0f39186c06f0"],["/assets/images/04-metodologia-esquema.jpg","ed23ece56b444aa6748ba183124b210a"],["/assets/images/04-metodologia-pagina-en-blanc-w525.jpg","fedda704b5b887560a6d319e1907723a"],["/assets/images/04-metodologia-pagina-en-blanc.jpg","58382446c4e89263f78dfab89ad46ef8"],["/assets/images/04-metodologia-w525.jpg","ade4720de8308863aab05f1d39cad99a"],["/assets/images/04-metodologia.jpg","fc7b7d469f5ca6e61c0affb1fcb1d861"],["/assets/images/04-millorar-quid-home-w525.jpg","7fa30e974b867ab193112c699aa4623f"],["/assets/images/04-millorar-quid-home.jpg","d800a147d963ddf12b9ab1010c0aa9cc"],["/assets/images/05-casos-d-exit-argonautes-signatura.jpg","0a4735c067957435fd60146ac19af331"],["/assets/images/05-casos-d-exit-argonautes-transport.jpg","1e39e46d604bf80dc5bb1ba91fd322fd"],["/assets/images/05-casos-d-exit-argonautes-w300.jpg","d96f539d0684dc947d773b8f951bd7cb"],["/assets/images/05-casos-d-exit-argonautes-w525.jpg","190ef24b2b8648f273b34c594f3a21f4"],["/assets/images/05-casos-d-exit-argonautes.jpg","867a4cd87386e001a63f1af8e20f274a"],["/assets/images/05-casos-d-exit-gent-gran-font-de-saviesa-w300.jpg","65a50d14ac4c523847a81b45bb1b29e1"],["/assets/images/05-casos-d-exit-gent-gran-font-de-saviesa-w525.jpg","97f1ce829b5d33fbd61225d2ff550e9b"],["/assets/images/05-casos-d-exit-gent-gran-font-de-saviesa.jpg","a8d825386a26bc98b08decb8d7bfc2a8"],["/assets/images/05-think-win-win-quid-home-w525.jpg","211f82ccf9aa1a037e5924db1bd44e46"],["/assets/images/05-think-win-win-quid-home.jpg","28667adc2e53ed48632c41dc162541a2"],["/assets/images/Beneficis-i-usos-dunir-cultura-i-empresa.png","ed05f099a503ad2f49eb69dcc03bb986"],["/assets/images/Marketing-social-corporatiu-una-eina-util-per-a-les-empreses.png","ede671797e5c0b5f0339eac8dd92084c"],["/assets/images/Serveis-Quid-Retorn-social-corporatiu-cultura-empresa.png","a25feb198cb5fd1b7de4e2ebb15d617f"],["/assets/images/Simposi-Quid-connexions-empresa-i-cultura.jpg","f25d37763a7079953fea8da61ad82d86"],["/assets/images/acord-adhoc-cultura-espai-creactiu-cultura-educacio-tic-innovació-social-1200.jpg","8527f218e22309721768041a83cd8d1e"],["/assets/images/acord-adhoc-cultura-espai-creactiu-cultura-educacio-tic-innovació-social.jpg","79aa5ca7f53d706e60675c475112067e"],["/assets/images/agencia-catalana-del-patrimoni-cultural.jpg","84b1b5695001241f517cde376866d339"],["/assets/images/agora-d-i-mes-d-de-cultura-i-empresa-de-quid.png","686ec13262183b93736f6f372a3ca34b"],["/assets/images/alexandra-maso.jpg","1b95ecfb46ab8b1ccd1ce9816124e2d6"],["/assets/images/alexandra-maso.png","14a235edb1a5a407ab4b707a534723b7"],["/assets/images/alianca-cultura-empresa-quid.jpg","b31671f5e160aa35f05bc674ebe0c1e2"],["/assets/images/argonautes-busquem-el-suport-d-empreses-i-institucions-w525.jpg","d9f6ca5b40d26fffaa9333adf911869f"],["/assets/images/argonautes-busquem-el-suport-d-empreses-i-institucions.jpg","ee586b4b8266c6b1db566d013017f379"],["/assets/images/art-per-donar-valor-al-teu-negoci.jpg","b3387b015031edf7551f76c13c8fb1f6"],["/assets/images/author.png","63fd657e4bff15346acefaa0fe448a8f"],["/assets/images/beneficis-del-marketing-social-corporatiu.png","428531818e1332c761e7fe9c02c6bdd6"],["/assets/images/connectar-empresa-cultura-RSC-metodologia.png","383d3acd0773f221694a882ec50f3a6c"],["/assets/images/cultura-i-empesa-com-a-motor-de-cohesio-social.png","865542f9409e733a577b3372f976ca2b"],["/assets/images/cultura-programa-de-presencia.png","1fa343ab66585796d82486f3c8f76a1c"],["/assets/images/culture-city-ciutat-cultura.jpg","91f6bcd7d3c126f15666507e07a7ee4f"],["/assets/images/el-patrimoni-catala-mes-a-prop-gracies-a-argonautes-w525.jpg","190ef24b2b8648f273b34c594f3a21f4"],["/assets/images/el-patrimoni-catala-mes-a-prop-gracies-a-argonautes.jpg","867a4cd87386e001a63f1af8e20f274a"],["/assets/images/ic_chevron_left_black_24dp_2x.png","a49283b3afe90eb0693d9dc295e1b57a"],["/assets/images/ic_chevron_right_black_24dp_2x.png","6dcbc9f1542c2c5e8a6da45ce07e8565"],["/assets/images/ic_menu_white_1x_web_24dp.png","cd703bdcd83411a8790b570d6fe7081d"],["/assets/images/ic_menu_white_2x_web_24dp.png","9cd2ca85f0a29c5666f642d3838aa159"],["/assets/images/ic_menu_yellow_1x_web_24dp.png","60e458f60a19d6320a46394526e5ab81"],["/assets/images/ic_menu_yellow_2x_web_24dp.png","78210fa07b013fb87a761a61f9b5e39c"],["/assets/images/innovar-i-reconstruir-les-organitzacions-culturals.jpg","bc4d35c4cc0ca0ceeceaa9c03d6577d1"],["/assets/images/lluis-puigvert-perfil-quid.jpg","24938424df3a410bf3b64f2598962348"],["/assets/images/logo-agencia-catalana-del-patrimoni-cultural-quid.png","e5dc2ea7cbd7003e15c491b5632d035f"],["/assets/images/logo-quid-about.png","c75189e9b7e67a03d0ed9883528ce73d"],["/assets/images/logo.jpg","4323a0f8647c1b7b81bcf3f3e310f865"],["/assets/images/logo.png","370c3b85fa8e09d3237ae9b64512ef8c"],["/assets/images/marta-carrete.jpg","933a79a50ca3f6bce75564fcdf4eea4b"],["/assets/images/oxygen.jpg","19f10b8a861f61fed4f7e0cbe9df4a78"],["/assets/images/pep-mares-perfil-quid.jpg","22e2c3cf1bacf3e6499a41ad80cd50fc"],["/assets/images/problemes-empresarials-solucions-culturals.jpg","b37992fbcec0ae3b16e7af0da48ebc3a"],["/assets/images/quatre-raons-per-incorporar-lart-al-teu-local-comercial.jpg","d1695f1e75b1c6fffd6c40d153e257a5"],["/assets/images/quid-adn.jpg","2e208d8a8eff91d60d5b33b9305b600c"],["/assets/images/quid-connectar-empresa-i-cultura-millorar-comunicacio-i-imatge-empresa.jpg","98fef7d1a3ffc616163ab514cb475d40"],["/assets/images/quid-partners.png","1fa343ab66585796d82486f3c8f76a1c"],["/assets/images/ramon-gil-perfil-quid.jpg","1dac5e42237431d488d2f7e118417361"],["/assets/images/rsc-empresas-quid-600x300.jpg","8b013f3f685c61e7699f55ea107e6aa1"],["/assets/images/screenshot.png","898927d8e24f5f145fbd7c53a013904b"],["/assets/images/sid-publicitat.jpg","44e7dbcda03a90cccf6fb42cee93df41"],["/assets/images/speed.png","b141c1e3c5a6a8dda24d59f9bf31de40"],["/assets/images/touch/apple-touch-icon-114x114.png","4f68410b7da1323b5a4d02978498fde4"],["/assets/images/touch/apple-touch-icon-120x120.png","1978b4afbbed5fd4a70a59ea348ed7c3"],["/assets/images/touch/apple-touch-icon-144x144.png","09c6caee6fe23e81749f8de7ac893d96"],["/assets/images/touch/apple-touch-icon-152x152.png","e306e1b12b2274a2c56e4f24d37f696f"],["/assets/images/touch/apple-touch-icon-180x80.png","6d0550adf8101a0e3da7a8bc59ae37f5"],["/assets/images/touch/apple-touch-icon-57x57.png","a75a01d3dffb98fd9e303bfbd9332be3"],["/assets/images/touch/apple-touch-icon-60x60.png","3d74abbbaa825579a2a07a3060fafc67"],["/assets/images/touch/apple-touch-icon-72x72.png","f703c50744c19feab74cbd6bff2c4d34"],["/assets/images/touch/apple-touch-icon-76x76.png","acb088d57613255cd6b282bc7bbf6df5"],["/assets/images/touch/apple-touch-icon.png","a656c01ceafc030c314b6b42e33b4693"],["/assets/images/touch/apple-touch-startup-image-1182x2208.png","71cc1abfcf4ddb925b6ee15e98a42f37"],["/assets/images/touch/apple-touch-startup-image-1242x2148.png","851dacd61297520d144e828b531ec839"],["/assets/images/touch/apple-touch-startup-image-1496x2048.png","366cf3fdfca3f7d6d35530fdfe4651f0"],["/assets/images/touch/apple-touch-startup-image-1536x2008.png","1bc64b39d2c427e8a736722ddb6a5a03"],["/assets/images/touch/apple-touch-startup-image-320x460.png","d4b887e0ec38c33391e5fad0b4d981c5"],["/assets/images/touch/apple-touch-startup-image-640x1096.png","e529f50b5be8e00b93b9f4e2181c7518"],["/assets/images/touch/apple-touch-startup-image-640x920.png","0e3f77eb075bda215cd53ef7bec97b6c"],["/assets/images/touch/apple-touch-startup-image-748x1024.png","8218d2b61358aa838d55408119938fe2"],["/assets/images/touch/apple-touch-startup-image-750x1294.png","715e0833dccfa5ed75f6e0b8e288ee01"],["/assets/images/touch/apple-touch-startup-image-768x1004.png","268e5e1760c79b300aebe6f5d2934740"],["/assets/images/touch/chrome-touch-icon-192x192.png","be6895ce581dff7edf0ec1d64b2d8d31"],["/assets/images/touch/coast-228x228.png","9946a5dc24071800f9ecbe5530ac28ee"],["/assets/images/touch/favicon-16x16.png","d8123ad4603af75df33930417c69096f"],["/assets/images/touch/favicon-230x230.png","efed50e75bf65c5e0bb7d3216c395ca9"],["/assets/images/touch/favicon-32x32.png","967182ad2462d381d76bf794163ea9c4"],["/assets/images/touch/favicon-96x96.png","767b024a0cc5d0838b46949b12e27091"],["/assets/images/touch/icon-128x128.png","a582360bbe8a7bf999e740bc6d5d82cb"],["/assets/images/touch/ms-touch-icon-144x144-precomposed.png","3c86307e51945486d4fc211d6a860228"],["/assets/images/touch/mstile-144x144.png","7841e08a9aafd76b6f145721574923af"],["/assets/images/touch/mstile-150x150.png","5ebcb64de342971b26c4b84c4aef2b59"],["/assets/images/touch/mstile-310x150.png","2dc5234b1cb402b7bd4cb39769862547"],["/assets/images/touch/mstile-310x310.png","390eaec6816db301a0e40d2c0c5266d1"],["/assets/images/touch/mstile-70x70.png","f99d41d873ce6cf2d8ac740898aba895"],["/assets/images/touch/touch-icon.png","e2b098f046e1a169849e45c408f229de"],["/assets/images/touch/yandex-browser-50x50.png","d086d599e83412b7bdc8861f627ef06e"],["/assets/images/touch/yandex-browser-manifest.json","bc28e53d72d07904a4dd9fece56c95dd"],["/assets/images/usos-i-beneficis-comunicacio.jpg","0bb084d2da9dc775ebc7bb4e8e2cedc4"],["/assets/images/win-win-cultura-empresa-rsc (Case Conflict).png","f49ac6871acaf5d82b825fd0575cb085"],["/assets/images/win-win-cultura-empresa-rsc.png","88fa1077f2d44ff62d8367c291c06e7f"],["/assets/images/win-win-empresa-cultura.png","1237d0f46cc446fd1537731fca66fe54"],["/assets/images/xarxademuseus-girona.jpg","6e2f4d5d6c45de60ac64e736e04943bf"],["/assets/images/xarxademuseus-girona.png","adc59be5ba8f46b7cc327095714cf4e2"],["/assets/videos/quid-empresa-i-cultura-sumen.png","239a2b4630eb79f18d8a9953c6b98c36"],["/assets/videos/quid-para-ganar-visibilidad-crear-marca-generar-prestigio-empresarial.png","55bc296f2b8a61938dab3c616ff2bec9"],["/blog/index.html","298c890bc730139f1234f0f333d35f09"],["/blog/page2/index.html","7466ad2d5e416605b8bf9b6f49b9278c"],["/blog/page3/index.html","0533ef9e3542ef94cc9fe4acf57501fc"],["/blog/page4/index.html","beca5e9263c28cde11e2349f46e2eba6"],["/blog/page5/index.html","b1826cab9061e2a476c526f7d725ab0c"],["/blog/page6/index.html","0f81605b0012537651c76567ca8b8feb"],["/casos-d-exit/index.html","c15c60d0adc1cbad79716110d543ad8d"],["/casos-d-exits/argonautes.html","938ce15e64e4d1daf10dedb347596f9a"],["/casos-d-exits/l-altra-cara-de-la-vida.html","fe9328c8cc0c91e0263af55dd62ed335"],["/casos-d-exits/mostra-d-art-digital.html","802355f0d50c4f56520698108e4f81db"],["/casos-d-exits/museu-de-la-tecnica-de-l-emporda.html","24c0428a46bae893c2f30f6797a7b258"],["/casos-d-exits/poetopia.html","44ac1186d7461fc3cbb7dfaea5740535"],["/casos-d-exits/sfb-gent-gran-font-de-saviesa.html","14d3f97c51956f76b46329dc7d4f5149"],["/formulari-suport-argonautes/gracies.html","08389462794d4ccc164bd5ed362562a7"],["/formulari-suport-argonautes/index.html","87093d0480b4f3a6414f793a89a53b6f"],["/google614be494af9bad15.html","bde376fb5880389d809048c5eb38b25c"],["/index.html","3a04dd9a71f2f68c21fbeeb7f83e9064"],["/manifest.json","b64581c4da390461da98b99e17f53770"],["/newsletter/index.html","9e8281aa50eaf83c3429eaa0c60da616"],["/package.json","14382fc6fe46a118f5290d19fc9b7e56"],["/sw.html","812189a6e664623f18d10d937d1e8b2b"],["/video/2017/03/07/quid-para-ganar-visibilidad-crear-marca-generar-prestigio-empresarial.html","201fe5ec80a5a689874ab9310938c088"],["/video/2017/05/24/empresa-i-cultura-sumen.html","782eb4b20dfdb91d48001e4e24e1bd5e"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function (originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function (originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
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
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

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
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
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

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
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


// *** Start of auto-included sw-toolbox code. ***
/* 
 Copyright 2016 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.toolbox=e()}}(function(){return function e(t,n,r){function o(c,s){if(!n[c]){if(!t[c]){var a="function"==typeof require&&require;if(!s&&a)return a(c,!0);if(i)return i(c,!0);var u=new Error("Cannot find module '"+c+"'");throw u.code="MODULE_NOT_FOUND",u}var f=n[c]={exports:{}};t[c][0].call(f.exports,function(e){var n=t[c][1][e];return o(n?n:e)},f,f.exports,e,t,n,r)}return n[c].exports}for(var i="function"==typeof require&&require,c=0;c<r.length;c++)o(r[c]);return o}({1:[function(e,t,n){"use strict";function r(e,t){t=t||{};var n=t.debug||m.debug;n&&console.log("[sw-toolbox] "+e)}function o(e){var t;return e&&e.cache&&(t=e.cache.name),t=t||m.cache.name,caches.open(t)}function i(e,t){t=t||{};var n=t.successResponses||m.successResponses;return fetch(e.clone()).then(function(r){return"GET"===e.method&&n.test(r.status)&&o(t).then(function(n){n.put(e,r).then(function(){var r=t.cache||m.cache;(r.maxEntries||r.maxAgeSeconds)&&r.name&&c(e,n,r)})}),r.clone()})}function c(e,t,n){var r=s.bind(null,e,t,n);d=d?d.then(r):r()}function s(e,t,n){var o=e.url,i=n.maxAgeSeconds,c=n.maxEntries,s=n.name,a=Date.now();return r("Updating LRU order for "+o+". Max entries is "+c+", max age is "+i),g.getDb(s).then(function(e){return g.setTimestampForUrl(e,o,a)}).then(function(e){return g.expireEntries(e,c,i,a)}).then(function(e){r("Successfully updated IDB.");var n=e.map(function(e){return t.delete(e)});return Promise.all(n).then(function(){r("Done with cache cleanup.")})}).catch(function(e){r(e)})}function a(e,t,n){return r("Renaming cache: ["+e+"] to ["+t+"]",n),caches.delete(t).then(function(){return Promise.all([caches.open(e),caches.open(t)]).then(function(t){var n=t[0],r=t[1];return n.keys().then(function(e){return Promise.all(e.map(function(e){return n.match(e).then(function(t){return r.put(e,t)})}))}).then(function(){return caches.delete(e)})})})}function u(e,t){return o(t).then(function(t){return t.add(e)})}function f(e,t){return o(t).then(function(t){return t.delete(e)})}function h(e){e instanceof Promise||p(e),m.preCacheItems=m.preCacheItems.concat(e)}function p(e){var t=Array.isArray(e);if(t&&e.forEach(function(e){"string"==typeof e||e instanceof Request||(t=!1)}),!t)throw new TypeError("The precache method expects either an array of strings and/or Requests or a Promise that resolves to an array of strings and/or Requests.");return e}function l(e,t,n){if(!e)return!1;if(t){var r=e.headers.get("date");if(r){var o=new Date(r);if(o.getTime()+1e3*t<n)return!1}}return!0}var d,m=e("./options"),g=e("./idb-cache-expiration");t.exports={debug:r,fetchAndCache:i,openCache:o,renameCache:a,cache:u,uncache:f,precache:h,validatePrecacheInput:p,isResponseFresh:l}},{"./idb-cache-expiration":2,"./options":4}],2:[function(e,t,n){"use strict";function r(e){return new Promise(function(t,n){var r=indexedDB.open(u+e,f);r.onupgradeneeded=function(){var e=r.result.createObjectStore(h,{keyPath:p});e.createIndex(l,l,{unique:!1})},r.onsuccess=function(){t(r.result)},r.onerror=function(){n(r.error)}})}function o(e){return e in d||(d[e]=r(e)),d[e]}function i(e,t,n){return new Promise(function(r,o){var i=e.transaction(h,"readwrite"),c=i.objectStore(h);c.put({url:t,timestamp:n}),i.oncomplete=function(){r(e)},i.onabort=function(){o(i.error)}})}function c(e,t,n){return t?new Promise(function(r,o){var i=1e3*t,c=[],s=e.transaction(h,"readwrite"),a=s.objectStore(h),u=a.index(l);u.openCursor().onsuccess=function(e){var t=e.target.result;if(t&&n-i>t.value[l]){var r=t.value[p];c.push(r),a.delete(r),t.continue()}},s.oncomplete=function(){r(c)},s.onabort=o}):Promise.resolve([])}function s(e,t){return t?new Promise(function(n,r){var o=[],i=e.transaction(h,"readwrite"),c=i.objectStore(h),s=c.index(l),a=s.count();s.count().onsuccess=function(){var e=a.result;e>t&&(s.openCursor().onsuccess=function(n){var r=n.target.result;if(r){var i=r.value[p];o.push(i),c.delete(i),e-o.length>t&&r.continue()}})},i.oncomplete=function(){n(o)},i.onabort=r}):Promise.resolve([])}function a(e,t,n,r){return c(e,n,r).then(function(n){return s(e,t).then(function(e){return n.concat(e)})})}var u="sw-toolbox-",f=1,h="store",p="url",l="timestamp",d={};t.exports={getDb:o,setTimestampForUrl:i,expireEntries:a}},{}],3:[function(e,t,n){"use strict";function r(e){var t=a.match(e.request);t?e.respondWith(t(e.request)):a.default&&"GET"===e.request.method&&0===e.request.url.indexOf("http")&&e.respondWith(a.default(e.request))}function o(e){s.debug("activate event fired");var t=u.cache.name+"$$$inactive$$$";e.waitUntil(s.renameCache(t,u.cache.name))}function i(e){return e.reduce(function(e,t){return e.concat(t)},[])}function c(e){var t=u.cache.name+"$$$inactive$$$";s.debug("install event fired"),s.debug("creating cache ["+t+"]"),e.waitUntil(s.openCache({cache:{name:t}}).then(function(e){return Promise.all(u.preCacheItems).then(i).then(s.validatePrecacheInput).then(function(t){return s.debug("preCache list: "+(t.join(", ")||"(none)")),e.addAll(t)})}))}e("serviceworker-cache-polyfill");var s=e("./helpers"),a=e("./router"),u=e("./options");t.exports={fetchListener:r,activateListener:o,installListener:c}},{"./helpers":1,"./options":4,"./router":6,"serviceworker-cache-polyfill":16}],4:[function(e,t,n){"use strict";var r;r=self.registration?self.registration.scope:self.scope||new URL("./",self.location).href,t.exports={cache:{name:"$$$toolbox-cache$$$"+r+"$$$",maxAgeSeconds:null,maxEntries:null},debug:!1,networkTimeoutSeconds:null,preCacheItems:[],successResponses:/^0|([123]\d\d)|(40[14567])|410$/}},{}],5:[function(e,t,n){"use strict";var r=new URL("./",self.location),o=r.pathname,i=e("path-to-regexp"),c=function(e,t,n,r){t instanceof RegExp?this.fullUrlRegExp=t:(0!==t.indexOf("/")&&(t=o+t),this.keys=[],this.regexp=i(t,this.keys)),this.method=e,this.options=r,this.handler=n};c.prototype.makeHandler=function(e){var t;if(this.regexp){var n=this.regexp.exec(e);t={},this.keys.forEach(function(e,r){t[e.name]=n[r+1]})}return function(e){return this.handler(e,t,this.options)}.bind(this)},t.exports=c},{"path-to-regexp":15}],6:[function(e,t,n){"use strict";function r(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}var o=e("./route"),i=e("./helpers"),c=function(e,t){for(var n=e.entries(),r=n.next(),o=[];!r.done;){var i=new RegExp(r.value[0]);i.test(t)&&o.push(r.value[1]),r=n.next()}return o},s=function(){this.routes=new Map,this.routes.set(RegExp,new Map),this.default=null};["get","post","put","delete","head","any"].forEach(function(e){s.prototype[e]=function(t,n,r){return this.add(e,t,n,r)}}),s.prototype.add=function(e,t,n,c){c=c||{};var s;t instanceof RegExp?s=RegExp:(s=c.origin||self.location.origin,s=s instanceof RegExp?s.source:r(s)),e=e.toLowerCase();var a=new o(e,t,n,c);this.routes.has(s)||this.routes.set(s,new Map);var u=this.routes.get(s);u.has(e)||u.set(e,new Map);var f=u.get(e),h=a.regexp||a.fullUrlRegExp;f.has(h.source)&&i.debug('"'+t+'" resolves to same regex as existing route.'),f.set(h.source,a)},s.prototype.matchMethod=function(e,t){var n=new URL(t),r=n.origin,o=n.pathname;return this._match(e,c(this.routes,r),o)||this._match(e,[this.routes.get(RegExp)],t)},s.prototype._match=function(e,t,n){if(0===t.length)return null;for(var r=0;r<t.length;r++){var o=t[r],i=o&&o.get(e.toLowerCase());if(i){var s=c(i,n);if(s.length>0)return s[0].makeHandler(n)}}return null},s.prototype.match=function(e){return this.matchMethod(e.method,e.url)||this.matchMethod("any",e.url)},t.exports=new s},{"./helpers":1,"./route":5}],7:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache first ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(t){var r=n.cache||o.cache,c=Date.now();return i.isResponseFresh(t,r.maxAgeSeconds,c)?t:i.fetchAndCache(e,n)})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],8:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache only ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(e){var t=n.cache||o.cache,r=Date.now();if(i.isResponseFresh(e,t.maxAgeSeconds,r))return e})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],9:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: fastest ["+e.url+"]",n),new Promise(function(r,c){var s=!1,a=[],u=function(e){a.push(e.toString()),s?c(new Error('Both cache and network failed: "'+a.join('", "')+'"')):s=!0},f=function(e){e instanceof Response?r(e):u("No result returned")};o.fetchAndCache(e.clone(),n).then(f,u),i(e,t,n).then(f,u)})}var o=e("../helpers"),i=e("./cacheOnly");t.exports=r},{"../helpers":1,"./cacheOnly":8}],10:[function(e,t,n){t.exports={networkOnly:e("./networkOnly"),networkFirst:e("./networkFirst"),cacheOnly:e("./cacheOnly"),cacheFirst:e("./cacheFirst"),fastest:e("./fastest")}},{"./cacheFirst":7,"./cacheOnly":8,"./fastest":9,"./networkFirst":11,"./networkOnly":12}],11:[function(e,t,n){"use strict";function r(e,t,n){n=n||{};var r=n.successResponses||o.successResponses,c=n.networkTimeoutSeconds||o.networkTimeoutSeconds;return i.debug("Strategy: network first ["+e.url+"]",n),i.openCache(n).then(function(t){var s,a,u=[];if(c){var f=new Promise(function(r){s=setTimeout(function(){t.match(e).then(function(e){var t=n.cache||o.cache,c=Date.now(),s=t.maxAgeSeconds;i.isResponseFresh(e,s,c)&&r(e)})},1e3*c)});u.push(f)}var h=i.fetchAndCache(e,n).then(function(e){if(s&&clearTimeout(s),r.test(e.status))return e;throw i.debug("Response was an HTTP error: "+e.statusText,n),a=e,new Error("Bad response")}).catch(function(r){return i.debug("Network or response error, fallback to cache ["+e.url+"]",n),t.match(e).then(function(e){if(e)return e;if(a)return a;throw r})});return u.push(h),Promise.race(u)})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],12:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: network only ["+e.url+"]",n),fetch(e)}var o=e("../helpers");t.exports=r},{"../helpers":1}],13:[function(e,t,n){"use strict";var r=e("./options"),o=e("./router"),i=e("./helpers"),c=e("./strategies"),s=e("./listeners");i.debug("Service Worker Toolbox is loading"),self.addEventListener("install",s.installListener),self.addEventListener("activate",s.activateListener),self.addEventListener("fetch",s.fetchListener),t.exports={networkOnly:c.networkOnly,networkFirst:c.networkFirst,cacheOnly:c.cacheOnly,cacheFirst:c.cacheFirst,fastest:c.fastest,router:o,options:r,cache:i.cache,uncache:i.uncache,precache:i.precache}},{"./helpers":1,"./listeners":3,"./options":4,"./router":6,"./strategies":10}],14:[function(e,t,n){t.exports=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)}},{}],15:[function(e,t,n){function r(e,t){for(var n,r=[],o=0,i=0,c="",s=t&&t.delimiter||"/";null!=(n=x.exec(e));){var f=n[0],h=n[1],p=n.index;if(c+=e.slice(i,p),i=p+f.length,h)c+=h[1];else{var l=e[i],d=n[2],m=n[3],g=n[4],v=n[5],w=n[6],y=n[7];c&&(r.push(c),c="");var b=null!=d&&null!=l&&l!==d,E="+"===w||"*"===w,R="?"===w||"*"===w,k=n[2]||s,$=g||v;r.push({name:m||o++,prefix:d||"",delimiter:k,optional:R,repeat:E,partial:b,asterisk:!!y,pattern:$?u($):y?".*":"[^"+a(k)+"]+?"})}}return i<e.length&&(c+=e.substr(i)),c&&r.push(c),r}function o(e,t){return s(r(e,t))}function i(e){return encodeURI(e).replace(/[\/?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function c(e){return encodeURI(e).replace(/[?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function s(e){for(var t=new Array(e.length),n=0;n<e.length;n++)"object"==typeof e[n]&&(t[n]=new RegExp("^(?:"+e[n].pattern+")$"));return function(n,r){for(var o="",s=n||{},a=r||{},u=a.pretty?i:encodeURIComponent,f=0;f<e.length;f++){var h=e[f];if("string"!=typeof h){var p,l=s[h.name];if(null==l){if(h.optional){h.partial&&(o+=h.prefix);continue}throw new TypeError('Expected "'+h.name+'" to be defined')}if(v(l)){if(!h.repeat)throw new TypeError('Expected "'+h.name+'" to not repeat, but received `'+JSON.stringify(l)+"`");if(0===l.length){if(h.optional)continue;throw new TypeError('Expected "'+h.name+'" to not be empty')}for(var d=0;d<l.length;d++){if(p=u(l[d]),!t[f].test(p))throw new TypeError('Expected all "'+h.name+'" to match "'+h.pattern+'", but received `'+JSON.stringify(p)+"`");o+=(0===d?h.prefix:h.delimiter)+p}}else{if(p=h.asterisk?c(l):u(l),!t[f].test(p))throw new TypeError('Expected "'+h.name+'" to match "'+h.pattern+'", but received "'+p+'"');o+=h.prefix+p}}else o+=h}return o}}function a(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function u(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function f(e,t){return e.keys=t,e}function h(e){return e.sensitive?"":"i"}function p(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return f(e,t)}function l(e,t,n){for(var r=[],o=0;o<e.length;o++)r.push(g(e[o],t,n).source);var i=new RegExp("(?:"+r.join("|")+")",h(n));return f(i,t)}function d(e,t,n){return m(r(e,n),t,n)}function m(e,t,n){v(t)||(n=t||n,t=[]),n=n||{};for(var r=n.strict,o=n.end!==!1,i="",c=0;c<e.length;c++){var s=e[c];if("string"==typeof s)i+=a(s);else{var u=a(s.prefix),p="(?:"+s.pattern+")";t.push(s),s.repeat&&(p+="(?:"+u+p+")*"),p=s.optional?s.partial?u+"("+p+")?":"(?:"+u+"("+p+"))?":u+"("+p+")",i+=p}}var l=a(n.delimiter||"/"),d=i.slice(-l.length)===l;return r||(i=(d?i.slice(0,-l.length):i)+"(?:"+l+"(?=$))?"),i+=o?"$":r&&d?"":"(?="+l+"|$)",f(new RegExp("^"+i,h(n)),t)}function g(e,t,n){return v(t)||(n=t||n,t=[]),n=n||{},e instanceof RegExp?p(e,t):v(e)?l(e,t,n):d(e,t,n)}var v=e("isarray");t.exports=g,t.exports.parse=r,t.exports.compile=o,t.exports.tokensToFunction=s,t.exports.tokensToRegExp=m;var x=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g")},{isarray:14}],16:[function(e,t,n){!function(){var e=Cache.prototype.addAll,t=navigator.userAgent.match(/(Firefox|Chrome)\/(\d+\.)/);if(t)var n=t[1],r=parseInt(t[2]);e&&(!t||"Firefox"===n&&r>=46||"Chrome"===n&&r>=50)||(Cache.prototype.addAll=function(e){function t(e){this.name="NetworkError",this.code=19,this.message=e}var n=this;return t.prototype=Object.create(Error.prototype),Promise.resolve().then(function(){if(arguments.length<1)throw new TypeError;return e=e.map(function(e){return e instanceof Request?e:String(e)}),Promise.all(e.map(function(e){"string"==typeof e&&(e=new Request(e));var n=new URL(e.url).protocol;if("http:"!==n&&"https:"!==n)throw new t("Invalid scheme");return fetch(e.clone())}))}).then(function(r){if(r.some(function(e){return!e.ok}))throw new t("Incorrect response status");return Promise.all(r.map(function(t,r){return n.put(e[r],t)}))}).then(function(){})},Cache.prototype.add=function(e){return this.addAll([e])})}()},{}]},{},[13])(13)});


// *** End of auto-included sw-toolbox code. ***



// Runtime cache configuration, using the sw-toolbox library.

toolbox.router.get(/\.ampproject\.org\//, toolbox.cacheFirst, {"cache":{"name":"amproject"}});




