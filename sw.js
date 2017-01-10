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

var precacheConfig = [["/01-quid/index.html","cc5ab9de91c85cdccd5228f0cd491e3b"],["/01-quid/nosaltres/index.html","b051acf5522eb5e7cef68cf90e9c9ad4"],["/01-quid/partners/index.html","0d3c5b16695dfca652e13e4d7d7cdbfe"],["/01-quid/qui-som-nosaltres/index.html","8341e4b270a91a1cb571696a53663f19"],["/01-quid/qui-som-partners/index.html","09afc48acbbca8a5c86e22eb020086e8"],["/02-missio-i-valors/index.html","547a8875e8b65390f0d42ca0d94a6657"],["/03-serveis/index.html","b3cf44a4750c9441639964d78f3d516d"],["/03-serveis/productes/index.html","d994c3f9cb121677dbee0998b7cb61f6"],["/03-serveis/programes-quid/index.html","21bb5a772e47fb571e2b8e1eca2e1967"],["/04-metodologia/index.html","9ac9337df4c47c808a46aa3b5b47e01d"],["/04-metodologia/la-cultura-com-a-eix-vertebrador/index.html","7a22f54d30501dad915db03106eae179"],["/04-metodologia/la-pagina-en-blanc/index.html","1f11f80328563769d41ee882b57c5e79"],["/05-usos-i-beneficis/index.html","adc952092dc99013ae45025a81a25284"],["/06-casos-d-exit/index.html","f2538236a16fca6290ed28549c5d5c47"],["/2016/10/20/diale-benefici-mutu-i-icompromis-adn-de-quid.html","7d2f07c134755bd14aeaade2b29c4bf4"],["/2016/10/20/serveis.html","38baefc60153666d17272964c83ccf6a"],["/404.html","db46c70b6bf8ab08c164a5ab2a528852"],["/actualitat/2016/12/21/es-presenta-el-programa-quid-que-preten-connectar-empresa-i-cultura-per-a-millorar-la-comunicacio-i-la-imatge-de-l-empresa.html","e9243f56856c184d0acabdad8070c19f"],["/articles/2016/10/20/diale-benefici-mutu-i-icompromis-adn-de-quid.html","7d2f07c134755bd14aeaade2b29c4bf4"],["/articles/2016/10/20/dialeg-benefici-mutu-i-icompromis-adn-de-quid.html","2712b5642149ac4221a26f4085c7c28f"],["/articles/2016/10/20/serveis.html","3e7fede9c78f473f2613d6dd1364bd3f"],["/articles/2016/10/24/simbiosi-entre-la-cultura-i-l-empresa.html","10f613c1cc1a1704e8bea255410c0afd"],["/articles/2016/11/03/metodologia-quid-connectem-empresa-cultura.html","060c006652b6fec56b0e1135af80b42a"],["/articles/2016/11/10/Empresa-i-cultura-connexions-amb-anima.html","27339deeec2b584428d7dcfb354b61bd"],["/articles/2016/11/15/win-win-empresa-cultura.html","2dbc1d2b680b34a57673321e95940c2a"],["/articles/2016/11/17/Simposi-Quid-connexions-empresa-i-cultura.html","6f20487a763d08b4c6fa20cbaf5728c8"],["/articles/2016/11/22/Usos-i-beneficis-duna-comunicació-vinculada-a-la-cultura.html","138aa0ac3691e5fb74037ccf9a7eb6f0"],["/articles/2016/11/29/problemes-empresarials-solucions-culturals.html","24568af3554dcf5a6dcc25d994a4eb26"],["/articles/2016/12/05/per-crear-vincles-de-confianca-entre-l-empresa-i-la-cultura-programa-de-presencia.html","122cf671fc2fd807acb6c8cb5582be32"],["/articles/2016/12/13/cultura-i-empresa-com-a-motors-de-cohesio-social.html","7124b27be545d0091af248ebda57b5a9"],["/articles/2016/12/19/Marketing-social-corporatiu-una-eina-util-per-a-les-empreses.html","3962cbfbbf6eaa8a6f664f9331842188"],["/articles/2017/01/02/Beneficis-i-usos-dunir-cultura-i-empresa.html","718b5c2dfa31d4f49bb5d9b431f10474"],["/articles/2017/01/10/quatre-raons-per-incorporar-lart-al-teu-local-comercial.html","ab6ee4a881d8b19d27f1d8c3885c6d5f"],["/assets/fonts/4vqKRIwnQQGUQQh-PnvdMA.woff2","ccb601ecfc7ed29ee9e594c0774cbbb9"],["/assets/fonts/BYKAuswRIqh69412sen31PY6323mHUZFJMgTvxaG2iE.woff2","8c8f28d332da3d3594deeb4e2ab1d096"],["/assets/fonts/GsNxiN0oIzsS201cnUag6w.woff2","972356f1b7a9f588cf3b47d4cfe566b4"],["/assets/fonts/I0dEfRgGNE90_hXZq7bjyw.woff2","b453edfb2ae26f8c229bc79f9879a800"],["/assets/fonts/P18Nsu9EiYldSvHIj_0e5w.woff2","bff8d5e4c936f4834a3a0430a0ce9000"],["/assets/fonts/VZ-5ejr2fpt5l1RKkVxPr_Y6323mHUZFJMgTvxaG2iE.woff2","a5ebee7a63f01fc7908189c007c652a0"],["/assets/fonts/opensans_bold_macroman/OpenSans-Bold-webfont.woff","2e90d5152ce92858b62ba053c7b9d2cb"],["/assets/fonts/opensans_extrabold_macroman/OpenSans-ExtraBold-webfont.woff","6ad396399f4022ccd1616cf11d0985be"],["/assets/fonts/opensans_light_macroman/OpenSans-Light-webfont.woff","45b47f3e9c7d74b80f5c6e0a3c513b23"],["/assets/images/01-casos-d-exit-memora-dot-funerari-w300.jpg","76204e027092a110d124104ffc83f723"],["/assets/images/01-casos-d-exit-memora-dot-funerari-w525.jpg","f473c406a869496066f35c2a31764f7a"],["/assets/images/01-casos-d-exit-memora-dot-funerari.jpg","ab0da0dfcbfdb6edfae9cbcb2105bb53"],["/assets/images/01-casos-d-exit-memora-w300.jpg","25f5ad3f12a95efdc16c4892b4d7d259"],["/assets/images/01-casos-d-exit-memora-w525.jpg","ab14a69a100564843ee7f64d8acd5815"],["/assets/images/01-casos-d-exit-memora.jpg","89ebb8ebe67fcf2c28c20aea2b5f4827"],["/assets/images/01-espai-de-trobada-quid-home-w525.jpg","e155d5b3534d2fc62028b6e83d271be8"],["/assets/images/01-espai-de-trobada-quid-home.jpg","d9f97b64a7b92f361efb4031ed1d27d6"],["/assets/images/01-qui-som-partners.jpg","aec42f97de3656dcabe0fc9fb7ae1858"],["/assets/images/01-qui-som.jpg","f5eeb73655f34792db1cbc1bf9227118"],["/assets/images/01-quid-connectar-empresa-i-cultura-millorar-comunicacio-i-imatge-empresa-w525.jpg","71a558cd74bc8b14756be3494744c4bc"],["/assets/images/01-quid-connectar-empresa-i-cultura-millorar-comunicacio-i-imatge-empresa.jpg","cab41ab48290ec7323e7c3fadd931405"],["/assets/images/01-quid-qui-som-nosaltres-w525.jpg","7ec0a989094556f3f980db09639202d9"],["/assets/images/01-quid-qui-som-nosaltres.jpg","8877eddad582451000bcddd331a2d2af"],["/assets/images/01-quid-qui-som-partners-w525.jpg","8b0a27b4c982dd7f00b673250682d641"],["/assets/images/01-quid-qui-som-partners.jpg","aec42f97de3656dcabe0fc9fb7ae1858"],["/assets/images/01-quid-qui-som-w525.jpg","a75e11de29353456dd246ad6b6a92374"],["/assets/images/01-quid-qui-som.jpg","c3326e68fc23ed44e301e98161f6711a"],["/assets/images/01-quid.jpg","c3326e68fc23ed44e301e98161f6711a"],["/assets/images/02-aportar-valor-quid-home-w525.jpg","a18b35f04a5558cd857cb2511ca6aae3"],["/assets/images/02-aportar-valor-quid-home.jpg","96697029d881ac9cfc567906e85a02c0"],["/assets/images/02-casos-d-exit-mostra-art-digital-w300.jpg","9e2a1ef4a5b089552470c68410ae957e"],["/assets/images/02-casos-d-exit-mostra-art-digital-w525.jpg","93d92893888183e497e245371f8d3e06"],["/assets/images/02-casos-d-exit-mostra-art-digital.jpg","46625bde88a8731f37c33c41033231ff"],["/assets/images/03-casos-d-exit-poetopia-w300.jpg","523e67fc94828abad9dd5635d5adb844"],["/assets/images/03-casos-d-exit-poetopia-w525.jpg","51b58bc8a698bf94e9971e23291aad9b"],["/assets/images/03-casos-d-exit-poetopia.jpg","07821b5aeffbc4206b582ae2b1bd6e66"],["/assets/images/03-fer-creixer-quid-home-w525.jpg","07ba6978a52d023b0504cfd87faf8d31"],["/assets/images/03-fer-creixer-quid-home.jpg","60945f4c1f680257ed1999467992d57d"],["/assets/images/03-serveis-productes-gent-gran.jpg","0c5b7c1dea05d029c847853193738300"],["/assets/images/03-serveis-programes-comunicacio-w525.jpg","59fcc23787eaeed55fa01773cf22d02c"],["/assets/images/03-serveis-programes-comunicacio.jpg","3822d138a85d5afd536dba29adcd3000"],["/assets/images/03-serveis-programes-creacio.jpg","f3d491d7e4e89421733706e315186a32"],["/assets/images/03-serveis-programes-dialeg.jpg","26fcd441cefaf0561b40fb93fedad15c"],["/assets/images/03-serveis-programes-patrocini.jpg","4236a05cf77d6177c4781517a78856a0"],["/assets/images/03-serveis-programes-poetopia.jpg","f99999db37a28333157e3806e301b81b"],["/assets/images/03-serveis-programes-presencia.jpg","ba269118fd8cb22fb56cd6a04787d27d"],["/assets/images/03-serveis-w525.jpg","e5e3f734e28510daa066b6292a8bee22"],["/assets/images/03-serveis.jpg","057f81aeeb1e4390dc14a16bf0c2efad"],["/assets/images/04-casos-d-exit-mte-w300.jpg","b466e60245821ce823c8733dde022a25"],["/assets/images/04-casos-d-exit-mte-w525.jpg","e54d6fecb05a88edb663f2d3c6466998"],["/assets/images/04-casos-d-exit-mte.jpg","ef8666d5b37ad6cb27f1ade9e1106970"],["/assets/images/04-metodologia-cultura-eix-vertebrador-w525.jpg","347dbfa1c4390b3605ffd03a3df793e7"],["/assets/images/04-metodologia-cultura-eix-vertebrador.jpg","04dfc54cbc1d85d8c59a0f39186c06f0"],["/assets/images/04-metodologia-esquema.jpg","0880579415a1ce350dd20174a6707820"],["/assets/images/04-metodologia-pagina-en-blanc-w525.jpg","fedda704b5b887560a6d319e1907723a"],["/assets/images/04-metodologia-pagina-en-blanc.jpg","58382446c4e89263f78dfab89ad46ef8"],["/assets/images/04-metodologia-w525.jpg","ce1626c22161abc60582ff91fddac4b8"],["/assets/images/04-metodologia.jpg","cb52e81c36dd8f23464e55a6a660a1ad"],["/assets/images/04-millorar-quid-home-w525.jpg","7fa30e974b867ab193112c699aa4623f"],["/assets/images/04-millorar-quid-home.jpg","9cfe88a362f9283b00c30e5bda485f30"],["/assets/images/05-casos-d-exit-gent-gran-font-de-saviesa-w300.jpg","5b53902777748a398f62317d1d1a4636"],["/assets/images/05-casos-d-exit-gent-gran-font-de-saviesa-w525.jpg","f80fedd19394bbd4b74ba0acd98a6815"],["/assets/images/05-casos-d-exit-gent-gran-font-de-saviesa.jpg","8dcc79971026cbb3bd4617a3856d210b"],["/assets/images/05-think-win-win-quid-home-w525.jpg","211f82ccf9aa1a037e5924db1bd44e46"],["/assets/images/05-think-win-win-quid-home.jpg","28667adc2e53ed48632c41dc162541a2"],["/assets/images/Beneficis-i-usos-dunir-cultura-i-empresa.png","ed05f099a503ad2f49eb69dcc03bb986"],["/assets/images/Marketing-social-corporatiu-una-eina-util-per-a-les-empreses.png","ede671797e5c0b5f0339eac8dd92084c"],["/assets/images/Serveis-Quid-Retorn-social-corporatiu-cultura-empresa.png","a25feb198cb5fd1b7de4e2ebb15d617f"],["/assets/images/Simposi-Quid-connexions-empresa-i-cultura.jpg","f25d37763a7079953fea8da61ad82d86"],["/assets/images/agencia-catalana-del-patrimoni-cultural.jpg","84b1b5695001241f517cde376866d339"],["/assets/images/alexandra-maso.jpg","0b310bc0804c94341664d7226837ad34"],["/assets/images/alexandra-maso.png","14a235edb1a5a407ab4b707a534723b7"],["/assets/images/alianca-cultura-empresa-quid.jpg","b31671f5e160aa35f05bc674ebe0c1e2"],["/assets/images/author.png","63fd657e4bff15346acefaa0fe448a8f"],["/assets/images/connectar-empresa-cultura-RSC-metodologia.png","383d3acd0773f221694a882ec50f3a6c"],["/assets/images/cultura-i-empesa-com-a-motor-de-cohesio-social.png","865542f9409e733a577b3372f976ca2b"],["/assets/images/cultura-programa-de-presencia.png","1fa343ab66585796d82486f3c8f76a1c"],["/assets/images/ic_chevron_left_black_24dp_2x.png","a49283b3afe90eb0693d9dc295e1b57a"],["/assets/images/ic_chevron_right_black_24dp_2x.png","6dcbc9f1542c2c5e8a6da45ce07e8565"],["/assets/images/ic_menu_white_1x_web_24dp.png","cd703bdcd83411a8790b570d6fe7081d"],["/assets/images/ic_menu_white_2x_web_24dp.png","9cd2ca85f0a29c5666f642d3838aa159"],["/assets/images/ic_menu_yellow_1x_web_24dp.png","60e458f60a19d6320a46394526e5ab81"],["/assets/images/ic_menu_yellow_2x_web_24dp.png","78210fa07b013fb87a761a61f9b5e39c"],["/assets/images/lluis-puigvert-perfil-quid.jpg","75a4cf131eb525c4714afbfe0df49bb8"],["/assets/images/logo-quid-about.png","c75189e9b7e67a03d0ed9883528ce73d"],["/assets/images/logo.jpg","4323a0f8647c1b7b81bcf3f3e310f865"],["/assets/images/logo.png","370c3b85fa8e09d3237ae9b64512ef8c"],["/assets/images/marta-carrete.jpg","933a79a50ca3f6bce75564fcdf4eea4b"],["/assets/images/oxygen.jpg","a1ba65eaeb02a3bd3520e61eace960c9"],["/assets/images/pep-mares-perfil-quid.jpg","f9753a5cc764077e8327d4ff3a0a6d7b"],["/assets/images/problemes-empresarials-solucions-culturals.jpg","70e181484596415506bcfd621950b3dc"],["/assets/images/quatre-raons-per-incorporar-lart-al-teu-local-comercial.jpg","df7d25dd86310ec8770af46e561d421b"],["/assets/images/quid-adn.jpg","2e208d8a8eff91d60d5b33b9305b600c"],["/assets/images/quid-connectar-empresa-i-cultura-millorar-comunicacio-i-imatge-empresa.jpg","b603d88fd67e00dab139150dac2d6231"],["/assets/images/ramon-gil-perfil-quid.jpg","4edb4ab7571d8672d075da89bc8c01fa"],["/assets/images/screenshot.png","898927d8e24f5f145fbd7c53a013904b"],["/assets/images/sid-publicitat.jpg","44e7dbcda03a90cccf6fb42cee93df41"],["/assets/images/speed.png","b141c1e3c5a6a8dda24d59f9bf31de40"],["/assets/images/touch/apple-touch-icon-114x114.png","4f68410b7da1323b5a4d02978498fde4"],["/assets/images/touch/apple-touch-icon-120x120.png","1978b4afbbed5fd4a70a59ea348ed7c3"],["/assets/images/touch/apple-touch-icon-144x144.png","09c6caee6fe23e81749f8de7ac893d96"],["/assets/images/touch/apple-touch-icon-152x152.png","e306e1b12b2274a2c56e4f24d37f696f"],["/assets/images/touch/apple-touch-icon-180x80.png","6d0550adf8101a0e3da7a8bc59ae37f5"],["/assets/images/touch/apple-touch-icon-57x57.png","a75a01d3dffb98fd9e303bfbd9332be3"],["/assets/images/touch/apple-touch-icon-60x60.png","3d74abbbaa825579a2a07a3060fafc67"],["/assets/images/touch/apple-touch-icon-72x72.png","f703c50744c19feab74cbd6bff2c4d34"],["/assets/images/touch/apple-touch-icon-76x76.png","acb088d57613255cd6b282bc7bbf6df5"],["/assets/images/touch/apple-touch-icon.png","a656c01ceafc030c314b6b42e33b4693"],["/assets/images/touch/apple-touch-startup-image-1182x2208.png","71cc1abfcf4ddb925b6ee15e98a42f37"],["/assets/images/touch/apple-touch-startup-image-1242x2148.png","851dacd61297520d144e828b531ec839"],["/assets/images/touch/apple-touch-startup-image-1496x2048.png","366cf3fdfca3f7d6d35530fdfe4651f0"],["/assets/images/touch/apple-touch-startup-image-1536x2008.png","1bc64b39d2c427e8a736722ddb6a5a03"],["/assets/images/touch/apple-touch-startup-image-320x460.png","d4b887e0ec38c33391e5fad0b4d981c5"],["/assets/images/touch/apple-touch-startup-image-640x1096.png","e529f50b5be8e00b93b9f4e2181c7518"],["/assets/images/touch/apple-touch-startup-image-640x920.png","0e3f77eb075bda215cd53ef7bec97b6c"],["/assets/images/touch/apple-touch-startup-image-748x1024.png","8218d2b61358aa838d55408119938fe2"],["/assets/images/touch/apple-touch-startup-image-750x1294.png","715e0833dccfa5ed75f6e0b8e288ee01"],["/assets/images/touch/apple-touch-startup-image-768x1004.png","268e5e1760c79b300aebe6f5d2934740"],["/assets/images/touch/chrome-touch-icon-192x192.png","be6895ce581dff7edf0ec1d64b2d8d31"],["/assets/images/touch/coast-228x228.png","9946a5dc24071800f9ecbe5530ac28ee"],["/assets/images/touch/favicon-16x16.png","d8123ad4603af75df33930417c69096f"],["/assets/images/touch/favicon-230x230.png","efed50e75bf65c5e0bb7d3216c395ca9"],["/assets/images/touch/favicon-32x32.png","967182ad2462d381d76bf794163ea9c4"],["/assets/images/touch/favicon-96x96.png","767b024a0cc5d0838b46949b12e27091"],["/assets/images/touch/icon-128x128.png","a582360bbe8a7bf999e740bc6d5d82cb"],["/assets/images/touch/ms-touch-icon-144x144-precomposed.png","3c86307e51945486d4fc211d6a860228"],["/assets/images/touch/mstile-144x144.png","7841e08a9aafd76b6f145721574923af"],["/assets/images/touch/mstile-150x150.png","5ebcb64de342971b26c4b84c4aef2b59"],["/assets/images/touch/mstile-310x150.png","2dc5234b1cb402b7bd4cb39769862547"],["/assets/images/touch/mstile-310x310.png","390eaec6816db301a0e40d2c0c5266d1"],["/assets/images/touch/mstile-70x70.png","f99d41d873ce6cf2d8ac740898aba895"],["/assets/images/touch/touch-icon.png","e2b098f046e1a169849e45c408f229de"],["/assets/images/touch/yandex-browser-50x50.png","d086d599e83412b7bdc8861f627ef06e"],["/assets/images/touch/yandex-browser-manifest.json","bc28e53d72d07904a4dd9fece56c95dd"],["/assets/images/usos-i-beneficis-comunicacio.jpg","0bb084d2da9dc775ebc7bb4e8e2cedc4"],["/assets/images/win-win-cultura-empresa-rsc (Case Conflict).png","f49ac6871acaf5d82b825fd0575cb085"],["/assets/images/win-win-cultura-empresa-rsc.png","88fa1077f2d44ff62d8367c291c06e7f"],["/assets/images/win-win-empresa-cultura.png","1237d0f46cc446fd1537731fca66fe54"],["/assets/images/xarxademuseus-girona.jpg","6e2f4d5d6c45de60ac64e736e04943bf"],["/assets/images/xarxademuseus-girona.png","adc59be5ba8f46b7cc327095714cf4e2"],["/blog/index.html","6a432d5bb54aee4a4a3fe5a057908b4e"],["/blog/page2/index.html","ba51e6715ae10d959634d7a6dc113fe8"],["/blog/page3/index.html","3d87054c635461329656eb2dfa280bdc"],["/casos-d-exit/index.html","3e8c77bdd2f8919a599794aa0d7d73be"],["/casos-d-exits/l-altra-cara-de-la-vida.html","76bc77b08b36d6b69886bedb675de5ae"],["/casos-d-exits/mostra-d-art-digital.html","56d91013ff853f7b3a4fb48117c9f8a5"],["/casos-d-exits/museu-de-la-tecnica-de-l-emporda.html","389f5ae6472632a7b16c7e7d20118553"],["/casos-d-exits/poetopia.html","d2144bbb40c59138bf4af8e5e6496ff8"],["/casos-d-exits/sfb-gent-gran-font-de-saviesa.html","82a297f1de82cd8a42d1c0d684ff76cd"],["/google614be494af9bad15.html","bde376fb5880389d809048c5eb38b25c"],["/index.html","d785e2615838ea906bc29641f538758b"],["/manifest.json","b64581c4da390461da98b99e17f53770"],["/newsletter/index.html","c45a8c8eccc8de42d06294e687a9f0f0"],["/package.json","bb7f221594ce2cb50fd5869014c995fe"],["/sw.html","812189a6e664623f18d10d937d1e8b2b"]];
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
              return cache.add(new Request(cacheKey, {
                credentials: 'same-origin',
                redirect: 'follow'
              }));
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
*/!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.toolbox=e()}}(function(){return function e(t,n,r){function o(c,s){if(!n[c]){if(!t[c]){var a="function"==typeof require&&require;if(!s&&a)return a(c,!0);if(i)return i(c,!0);var u=new Error("Cannot find module '"+c+"'");throw u.code="MODULE_NOT_FOUND",u}var f=n[c]={exports:{}};t[c][0].call(f.exports,function(e){var n=t[c][1][e];return o(n?n:e)},f,f.exports,e,t,n,r)}return n[c].exports}for(var i="function"==typeof require&&require,c=0;c<r.length;c++)o(r[c]);return o}({1:[function(e,t,n){"use strict";function r(e,t){t=t||{};var n=t.debug||d.debug;n&&console.log("[sw-toolbox] "+e)}function o(e){var t;return e&&e.cache&&(t=e.cache.name),t=t||d.cache.name,caches.open(t)}function i(e,t){t=t||{};var n=t.successResponses||d.successResponses;return fetch(e.clone()).then(function(r){return"GET"===e.method&&n.test(r.status)&&o(t).then(function(n){n.put(e,r).then(function(){var r=t.cache||d.cache;(r.maxEntries||r.maxAgeSeconds)&&r.name&&c(e,n,r)})}),r.clone()})}function c(e,t,n){var r=s.bind(null,e,t,n);l=l?l.then(r):r()}function s(e,t,n){var o=e.url,i=n.maxAgeSeconds,c=n.maxEntries,s=n.name,a=Date.now();return r("Updating LRU order for "+o+". Max entries is "+c+", max age is "+i),g.getDb(s).then(function(e){return g.setTimestampForUrl(e,o,a)}).then(function(e){return g.expireEntries(e,c,i,a)}).then(function(e){r("Successfully updated IDB.");var n=e.map(function(e){return t.delete(e)});return Promise.all(n).then(function(){r("Done with cache cleanup.")})}).catch(function(e){r(e)})}function a(e,t,n){return r("Renaming cache: ["+e+"] to ["+t+"]",n),caches.delete(t).then(function(){return Promise.all([caches.open(e),caches.open(t)]).then(function(t){var n=t[0],r=t[1];return n.keys().then(function(e){return Promise.all(e.map(function(e){return n.match(e).then(function(t){return r.put(e,t)})}))}).then(function(){return caches.delete(e)})})})}function u(e,t){return o(t).then(function(t){return t.add(e)})}function f(e,t){return o(t).then(function(t){return t.delete(e)})}function h(e){e instanceof Promise||p(e),d.preCacheItems=d.preCacheItems.concat(e)}function p(e){var t=Array.isArray(e);if(t&&e.forEach(function(e){"string"==typeof e||e instanceof Request||(t=!1)}),!t)throw new TypeError("The precache method expects either an array of strings and/or Requests or a Promise that resolves to an array of strings and/or Requests.");return e}var l,d=e("./options"),g=e("./idb-cache-expiration");t.exports={debug:r,fetchAndCache:i,openCache:o,renameCache:a,cache:u,uncache:f,precache:h,validatePrecacheInput:p}},{"./idb-cache-expiration":2,"./options":4}],2:[function(e,t,n){"use strict";function r(e){return new Promise(function(t,n){var r=indexedDB.open(u+e,f);r.onupgradeneeded=function(){var e=r.result.createObjectStore(h,{keyPath:p});e.createIndex(l,l,{unique:!1})},r.onsuccess=function(){t(r.result)},r.onerror=function(){n(r.error)}})}function o(e){return e in d||(d[e]=r(e)),d[e]}function i(e,t,n){return new Promise(function(r,o){var i=e.transaction(h,"readwrite"),c=i.objectStore(h);c.put({url:t,timestamp:n}),i.oncomplete=function(){r(e)},i.onabort=function(){o(i.error)}})}function c(e,t,n){return t?new Promise(function(r,o){var i=1e3*t,c=[],s=e.transaction(h,"readwrite"),a=s.objectStore(h),u=a.index(l);u.openCursor().onsuccess=function(e){var t=e.target.result;if(t&&n-i>t.value[l]){var r=t.value[p];c.push(r),a.delete(r),t.continue()}},s.oncomplete=function(){r(c)},s.onabort=o}):Promise.resolve([])}function s(e,t){return t?new Promise(function(n,r){var o=[],i=e.transaction(h,"readwrite"),c=i.objectStore(h),s=c.index(l),a=s.count();s.count().onsuccess=function(){var e=a.result;e>t&&(s.openCursor().onsuccess=function(n){var r=n.target.result;if(r){var i=r.value[p];o.push(i),c.delete(i),e-o.length>t&&r.continue()}})},i.oncomplete=function(){n(o)},i.onabort=r}):Promise.resolve([])}function a(e,t,n,r){return c(e,n,r).then(function(n){return s(e,t).then(function(e){return n.concat(e)})})}var u="sw-toolbox-",f=1,h="store",p="url",l="timestamp",d={};t.exports={getDb:o,setTimestampForUrl:i,expireEntries:a}},{}],3:[function(e,t,n){"use strict";function r(e){var t=a.match(e.request);t?e.respondWith(t(e.request)):a.default&&"GET"===e.request.method&&0===e.request.url.indexOf("http")&&e.respondWith(a.default(e.request))}function o(e){s.debug("activate event fired");var t=u.cache.name+"$$$inactive$$$";e.waitUntil(s.renameCache(t,u.cache.name))}function i(e){return e.reduce(function(e,t){return e.concat(t)},[])}function c(e){var t=u.cache.name+"$$$inactive$$$";s.debug("install event fired"),s.debug("creating cache ["+t+"]"),e.waitUntil(s.openCache({cache:{name:t}}).then(function(e){return Promise.all(u.preCacheItems).then(i).then(s.validatePrecacheInput).then(function(t){return s.debug("preCache list: "+(t.join(", ")||"(none)")),e.addAll(t)})}))}e("serviceworker-cache-polyfill");var s=e("./helpers"),a=e("./router"),u=e("./options");t.exports={fetchListener:r,activateListener:o,installListener:c}},{"./helpers":1,"./options":4,"./router":6,"serviceworker-cache-polyfill":16}],4:[function(e,t,n){"use strict";var r;r=self.registration?self.registration.scope:self.scope||new URL("./",self.location).href,t.exports={cache:{name:"$$$toolbox-cache$$$"+r+"$$$",maxAgeSeconds:null,maxEntries:null},debug:!1,networkTimeoutSeconds:null,preCacheItems:[],successResponses:/^0|([123]\d\d)|(40[14567])|410$/}},{}],5:[function(e,t,n){"use strict";var r=new URL("./",self.location),o=r.pathname,i=e("path-to-regexp"),c=function(e,t,n,r){t instanceof RegExp?this.fullUrlRegExp=t:(0!==t.indexOf("/")&&(t=o+t),this.keys=[],this.regexp=i(t,this.keys)),this.method=e,this.options=r,this.handler=n};c.prototype.makeHandler=function(e){var t;if(this.regexp){var n=this.regexp.exec(e);t={},this.keys.forEach(function(e,r){t[e.name]=n[r+1]})}return function(e){return this.handler(e,t,this.options)}.bind(this)},t.exports=c},{"path-to-regexp":15}],6:[function(e,t,n){"use strict";function r(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}var o=e("./route"),i=e("./helpers"),c=function(e,t){for(var n=e.entries(),r=n.next(),o=[];!r.done;){var i=new RegExp(r.value[0]);i.test(t)&&o.push(r.value[1]),r=n.next()}return o},s=function(){this.routes=new Map,this.routes.set(RegExp,new Map),this.default=null};["get","post","put","delete","head","any"].forEach(function(e){s.prototype[e]=function(t,n,r){return this.add(e,t,n,r)}}),s.prototype.add=function(e,t,n,c){c=c||{};var s;t instanceof RegExp?s=RegExp:(s=c.origin||self.location.origin,s=s instanceof RegExp?s.source:r(s)),e=e.toLowerCase();var a=new o(e,t,n,c);this.routes.has(s)||this.routes.set(s,new Map);var u=this.routes.get(s);u.has(e)||u.set(e,new Map);var f=u.get(e),h=a.regexp||a.fullUrlRegExp;f.has(h.source)&&i.debug('"'+t+'" resolves to same regex as existing route.'),f.set(h.source,a)},s.prototype.matchMethod=function(e,t){var n=new URL(t),r=n.origin,o=n.pathname;return this._match(e,c(this.routes,r),o)||this._match(e,[this.routes.get(RegExp)],t)},s.prototype._match=function(e,t,n){if(0===t.length)return null;for(var r=0;r<t.length;r++){var o=t[r],i=o&&o.get(e.toLowerCase());if(i){var s=c(i,n);if(s.length>0)return s[0].makeHandler(n)}}return null},s.prototype.match=function(e){return this.matchMethod(e.method,e.url)||this.matchMethod("any",e.url)},t.exports=new s},{"./helpers":1,"./route":5}],7:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: cache first ["+e.url+"]",n),o.openCache(n).then(function(t){return t.match(e).then(function(t){return t?t:o.fetchAndCache(e,n)})})}var o=e("../helpers");t.exports=r},{"../helpers":1}],8:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: cache only ["+e.url+"]",n),o.openCache(n).then(function(t){return t.match(e)})}var o=e("../helpers");t.exports=r},{"../helpers":1}],9:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: fastest ["+e.url+"]",n),new Promise(function(r,c){var s=!1,a=[],u=function(e){a.push(e.toString()),s?c(new Error('Both cache and network failed: "'+a.join('", "')+'"')):s=!0},f=function(e){e instanceof Response?r(e):u("No result returned")};o.fetchAndCache(e.clone(),n).then(f,u),i(e,t,n).then(f,u)})}var o=e("../helpers"),i=e("./cacheOnly");t.exports=r},{"../helpers":1,"./cacheOnly":8}],10:[function(e,t,n){t.exports={networkOnly:e("./networkOnly"),networkFirst:e("./networkFirst"),cacheOnly:e("./cacheOnly"),cacheFirst:e("./cacheFirst"),fastest:e("./fastest")}},{"./cacheFirst":7,"./cacheOnly":8,"./fastest":9,"./networkFirst":11,"./networkOnly":12}],11:[function(e,t,n){"use strict";function r(e,t,n){n=n||{};var r=n.successResponses||o.successResponses,c=n.networkTimeoutSeconds||o.networkTimeoutSeconds;return i.debug("Strategy: network first ["+e.url+"]",n),i.openCache(n).then(function(t){var o,s,a=[];if(c){var u=new Promise(function(n){o=setTimeout(function(){t.match(e).then(function(e){e&&n(e)})},1e3*c)});a.push(u)}var f=i.fetchAndCache(e,n).then(function(e){if(o&&clearTimeout(o),r.test(e.status))return e;throw i.debug("Response was an HTTP error: "+e.statusText,n),s=e,new Error("Bad response")}).catch(function(r){return i.debug("Network or response error, fallback to cache ["+e.url+"]",n),t.match(e).then(function(e){if(e)return e;if(s)return s;throw r})});return a.push(f),Promise.race(a)})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],12:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: network only ["+e.url+"]",n),fetch(e)}var o=e("../helpers");t.exports=r},{"../helpers":1}],13:[function(e,t,n){"use strict";var r=e("./options"),o=e("./router"),i=e("./helpers"),c=e("./strategies"),s=e("./listeners");i.debug("Service Worker Toolbox is loading"),self.addEventListener("install",s.installListener),self.addEventListener("activate",s.activateListener),self.addEventListener("fetch",s.fetchListener),t.exports={networkOnly:c.networkOnly,networkFirst:c.networkFirst,cacheOnly:c.cacheOnly,cacheFirst:c.cacheFirst,fastest:c.fastest,router:o,options:r,cache:i.cache,uncache:i.uncache,precache:i.precache}},{"./helpers":1,"./listeners":3,"./options":4,"./router":6,"./strategies":10}],14:[function(e,t,n){t.exports=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)}},{}],15:[function(e,t,n){function r(e){for(var t,n=[],r=0,o=0,i="";null!=(t=x.exec(e));){var c=t[0],s=t[1],a=t.index;if(i+=e.slice(o,a),o=a+c.length,s)i+=s[1];else{var f=e[o],h=t[2],p=t[3],l=t[4],d=t[5],g=t[6],m=t[7];i&&(n.push(i),i="");var v=null!=h&&null!=f&&f!==h,w="+"===g||"*"===g,y="?"===g||"*"===g,b=t[2]||"/",E=l||d||(m?".*":"[^"+b+"]+?");n.push({name:p||r++,prefix:h||"",delimiter:b,optional:y,repeat:w,partial:v,asterisk:!!m,pattern:u(E)})}}return o<e.length&&(i+=e.substr(o)),i&&n.push(i),n}function o(e){return s(r(e))}function i(e){return encodeURI(e).replace(/[\/?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function c(e){return encodeURI(e).replace(/[?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function s(e){for(var t=new Array(e.length),n=0;n<e.length;n++)"object"==typeof e[n]&&(t[n]=new RegExp("^(?:"+e[n].pattern+")$"));return function(n,r){for(var o="",s=n||{},a=r||{},u=a.pretty?i:encodeURIComponent,f=0;f<e.length;f++){var h=e[f];if("string"!=typeof h){var p,l=s[h.name];if(null==l){if(h.optional){h.partial&&(o+=h.prefix);continue}throw new TypeError('Expected "'+h.name+'" to be defined')}if(v(l)){if(!h.repeat)throw new TypeError('Expected "'+h.name+'" to not repeat, but received `'+JSON.stringify(l)+"`");if(0===l.length){if(h.optional)continue;throw new TypeError('Expected "'+h.name+'" to not be empty')}for(var d=0;d<l.length;d++){if(p=u(l[d]),!t[f].test(p))throw new TypeError('Expected all "'+h.name+'" to match "'+h.pattern+'", but received `'+JSON.stringify(p)+"`");o+=(0===d?h.prefix:h.delimiter)+p}}else{if(p=h.asterisk?c(l):u(l),!t[f].test(p))throw new TypeError('Expected "'+h.name+'" to match "'+h.pattern+'", but received "'+p+'"');o+=h.prefix+p}}else o+=h}return o}}function a(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function u(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function f(e,t){return e.keys=t,e}function h(e){return e.sensitive?"":"i"}function p(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return f(e,t)}function l(e,t,n){for(var r=[],o=0;o<e.length;o++)r.push(m(e[o],t,n).source);var i=new RegExp("(?:"+r.join("|")+")",h(n));return f(i,t)}function d(e,t,n){for(var o=r(e),i=g(o,n),c=0;c<o.length;c++)"string"!=typeof o[c]&&t.push(o[c]);return f(i,t)}function g(e,t){t=t||{};for(var n=t.strict,r=t.end!==!1,o="",i=e[e.length-1],c="string"==typeof i&&/\/$/.test(i),s=0;s<e.length;s++){var u=e[s];if("string"==typeof u)o+=a(u);else{var f=a(u.prefix),p="(?:"+u.pattern+")";u.repeat&&(p+="(?:"+f+p+")*"),p=u.optional?u.partial?f+"("+p+")?":"(?:"+f+"("+p+"))?":f+"("+p+")",o+=p}}return n||(o=(c?o.slice(0,-2):o)+"(?:\\/(?=$))?"),o+=r?"$":n&&c?"":"(?=\\/|$)",new RegExp("^"+o,h(t))}function m(e,t,n){return t=t||[],v(t)?n||(n={}):(n=t,t=[]),e instanceof RegExp?p(e,t):v(e)?l(e,t,n):d(e,t,n)}var v=e("isarray");t.exports=m,t.exports.parse=r,t.exports.compile=o,t.exports.tokensToFunction=s,t.exports.tokensToRegExp=g;var x=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g")},{isarray:14}],16:[function(e,t,n){!function(){var e=Cache.prototype.addAll,t=navigator.userAgent.match(/(Firefox|Chrome)\/(\d+\.)/);if(t)var n=t[1],r=parseInt(t[2]);e&&(!t||"Firefox"===n&&r>=46||"Chrome"===n&&r>=50)||(Cache.prototype.addAll=function(e){function t(e){this.name="NetworkError",this.code=19,this.message=e}var n=this;return t.prototype=Object.create(Error.prototype),Promise.resolve().then(function(){if(arguments.length<1)throw new TypeError;return e=e.map(function(e){return e instanceof Request?e:String(e)}),Promise.all(e.map(function(e){"string"==typeof e&&(e=new Request(e));var n=new URL(e.url).protocol;if("http:"!==n&&"https:"!==n)throw new t("Invalid scheme");return fetch(e.clone())}))}).then(function(r){if(r.some(function(e){return!e.ok}))throw new t("Incorrect response status");return Promise.all(r.map(function(t,r){return n.put(e[r],t)}))}).then(function(){})},Cache.prototype.add=function(e){return this.addAll([e])})}()},{}]},{},[13])(13)});


// *** End of auto-included sw-toolbox code. ***



// Runtime cache configuration, using the sw-toolbox library.

toolbox.router.get(/\.ampproject\.org\//, toolbox.cacheFirst, {"cache":{"name":"amproject"}});




