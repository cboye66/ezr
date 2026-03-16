'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "a429a52f9e36af80e11c10eee85b79e5",
"version.json": "a0abfd0ec7bbde2c1f98e1a8f3db2da1",
"index.html": "3c981c3139e6988aa58fd5aa7dacfd09",
"/": "3c981c3139e6988aa58fd5aa7dacfd09",
"main.dart.js": "9f4839f443659b12b13092d724d63110",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"README.md": "50652424aeb07a2ab4716f1c94d21dde",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "3c4b6cfbe81fd2ec8bde618b67318359",
".git/ORIG_HEAD": "42eb676670553dc703451e0af20fcdc9",
".git/config": "e03b86ea6789a10d31fed88075ea7ec9",
".git/objects/61/d044217893bdff46add9e70ecc4bc30f2bd2c8": "210a4bc688213c1cde4b0a06ea3b5266",
".git/objects/0c/a66c71d0280c70113ec5e97007dfa41158cda1": "14952f3bfc16329d200e8b247099dbb0",
".git/objects/69/b2023ef3b84225f16fdd15ba36b2b5fc3cee43": "6ccef18e05a49674444167a08de6e407",
".git/objects/0b/d023481b29dc9a015775524e39087f5f043731": "dec96bcf20e7aafc27fcea2fc3aa6083",
".git/objects/5f/629febb12744999978ffeffa742f5e25f41193": "86d4ade4ddaee681d761ec941097e2fa",
".git/objects/02/1193f62398e7a327ff51da2743a3e34404cd2f": "26d367275fe2309308607a197bed0fa7",
".git/objects/a3/6ee67e58b826d919d5b86492c8a15352beebfa": "9a139a394e250138ba1c7f199010ff03",
".git/objects/ac/dddf265108d8c74bbe51a347bc13e2c4fe2d98": "3752ba305f85971eab6742f7ba129d4e",
".git/objects/ad/8d5f9d9740335dfe20cfb4d7242ae8babfee50": "eb9eadb67537a949959e65f7f1a17927",
".git/objects/d7/f9ba44c1946921eb375064612349a7474806b2": "8749fa9c74f546781319fab78d2028c9",
".git/objects/da/85477e80b38c4248173c59e49c56b2bd8f54ed": "c180ace5de9ccc0578099ba611a7cfe1",
".git/objects/bd/200f8ceb3852024d40aa67f7813ccb247820c2": "856c18b505646fd2bf3e99b9e4e91a3d",
".git/objects/d6/53063d32141135611a18444b2d452bc2e47975": "0b1991be45ba15a23df9fc81c4b40f79",
".git/objects/ab/850a1418ed93d544dff4a78e66c85808a7ed25": "827df7223e5e98fecbf92d7b84da11b1",
".git/objects/f3/f115cf082055209546b28d493a5cde66153eb9": "5dfcd8b85f28c75f252517c446a34e39",
".git/objects/eb/9a9e5f21427ce907f42274fffde95b0dfa3f7e": "f5a31f03b9e248c05900b01ce674509e",
".git/objects/f2/b1c17ad072b09951a0dea12d2b2b962ae574e4": "e76f55a4cc0f90a1bbd15c19c9c62a83",
".git/objects/e4/353df5b953177f217847ae093b840761db3485": "41bea969d36495987c11023f2a0eb988",
".git/objects/fe/8b29a935b0d3450a4af2d7f87dcb26fa639b36": "406ec5d32b2a6aa7f33031978e95cb5a",
".git/objects/20/a58b5091847ba97ad99d5b9a52cac4216a09c3": "2b768107a6b095f588058de832f8d02d",
".git/objects/pack/pack-cacb3339d2adf4e4258dbb0ece77b9bcaa70bf13.idx": "083ed6dfb7ee0804bfbd674e0ea4f3f6",
".git/objects/pack/pack-cacb3339d2adf4e4258dbb0ece77b9bcaa70bf13.pack": "63dd69c6afdd77413c3d55d728766b17",
".git/objects/73/ca3359825c47c7a8de5df0d2675f3b2fb7cdfc": "3e80e81077be57ee6a01bf3a0e44dade",
".git/objects/87/fd0c50626c324cf38ff86d0b5c772104bced73": "4744376c1f25f965364201ad1eb22e80",
".git/objects/7e/28727e64a8ccc87ee8b92a2ccf58ec81ce2303": "06dada91e975cc5c103efc43c3764b35",
".git/objects/4c/f606d692eab5ca5714c5d413381103dbe57499": "5b7bb589034bd31802b076ed15953398",
".git/objects/44/f991ff9f851ad568d010cda26169e586a846ea": "09482b8e3ce0b9d7c01562eb19aafcbe",
".git/objects/2a/331a63bfdc67e9d3f2c037fe1323535fabd5d0": "e0e20ede185ece8aded08a6eeaab60c3",
".git/objects/43/6401e78218c932b995ceeb551174d1a41fe7f9": "fbe965752801fba19ae5f86e28f61f2a",
".git/objects/43/9b82be3003dac4066e85145187d0ce123c38e0": "81b1d7ad909032c2a8307f315594849e",
".git/objects/6b/280a05a8d52d997f5c289e3952246c2f18a5cd": "a15c8ba23eba5478ca4e16dba63228ec",
".git/objects/38/8eaa82de3292da3f0f4475557d4dc7558f57d8": "200ad5414fd412204ac6a92b7e3a763e",
".git/objects/31/8e85613d4d615ef22184c6787f66f8c0062759": "18c41579abb9325b61d813806afd0c76",
".git/objects/91/8af6a81f122e6ce36bcb4eff5dc2fcbb66f306": "8275441f86206c6935b74279dc99af07",
".git/objects/65/6a2e94b35b60c8ce53f31c7daa1156f707b19f": "714c059eba401219cceac539283beb32",
".git/objects/65/0fa69ca834ad7b8154e6096c1d11c6d3ac8c99": "78c65557182b6960feffaf56e40d89f7",
".git/objects/62/8c94aa9e54270d45dfc35d002ba5fc1083dd3b": "64a301eb6c895e8e1d973b27cc6cb6c2",
".git/objects/62/d42ad49f25aa81254dde2d7127fee89ff528d4": "68be5c9ee8e779054af0590749023dca",
".git/objects/37/acd6358753fcd3dd8c4c9352858852f58eb15e": "5e8aae8afcd323dabb729837a72c97c9",
".git/objects/06/64d97267a67dbc0fcb1cf8357fb2a986ca34af": "0a4e98d4b46af895a51026f013b617cc",
".git/objects/52/661a381954ba1d6c072a98fcf538661e730352": "138aa04bfbb1af2793603a1417d7c226",
".git/objects/0f/0c0f51a92599c2cc174b6394add8bfbc1396bb": "aaf1e252ad2e0080f28e6e3754664e11",
".git/objects/bf/669f49f3de0396626a6bc34203862f9dea4787": "9bf3d1d1007e6280dd1f1debcd8f36bc",
".git/objects/d3/ac85c7dd36bb9290b52ef69a525ee641274750": "59b695d14ec261672052aa52cfeeda9a",
".git/objects/a7/bc9cceca06beb386b60641cfa21ef261d7e300": "a47a28b332dc8f19e6cef80c27a19853",
".git/objects/dd/84e0df3f556d0541f091496f4872dff7412c12": "496238b7de97fe86c829ef5278075d29",
".git/objects/dc/c286aca6a1b89314f026a2f9e61a6d3abb3dd6": "184387dac256ac577d538d248e8d2b08",
".git/objects/b0/558e03e9f049686bbfad5f3a95db28d60b9491": "4dcbe3faa7179acc11a3735af0c72c94",
".git/objects/e6/eb8f689cbc9febb5a913856382d297dae0d383": "466fce65fb82283da16cdd7c93059ff3",
".git/objects/f0/8f0b9f901b49d2378ecbefc182c68a066f5dcb": "956b299b95ea97314d8c772876b127b6",
".git/objects/ce/7d2056f06e9a49a40fab834685f3b3ea9794dd": "34e8cb6ecb4776eebba13eea7a8bb015",
".git/objects/48/3b59e7d96ca2f53345b0fa541e7186bbe3ca8c": "838be59597fb5e60e51e46afb6d29a44",
".git/objects/70/6d42d6621e3cae87dabe93e4767ab431aef400": "cadb8962d719e61adedbdf3319f5c121",
".git/objects/24/1c28dc158231a8774884016469e8082d8c92a8": "efd7edc29ef17ddbf3d40f36c384e716",
".git/objects/24/c62526b448d9dca34e9e3d7397f1330326c3c6": "9e07ce3e012f8dd1e0a97e440d123f35",
".git/objects/4f/5279e83d55c5a2828a8486854d1b1b0af6bcf9": "1ccc7b424fdc6d437ebf891297b94752",
".git/objects/82/63b9e1af2c568ca821f2f5d3df718ef537624f": "05d167fbefa2e16e2549aa5221534368",
".git/objects/2b/4ec4fcc2a342d50f8bb667220690f2ebb329dc": "3fb46a713bbfd98a778fa10d901b0a6c",
".git/objects/8b/54c962ca6cde18695717cd9b8f4262ccae267a": "73fa8028993f2b0dec81279df56a088f",
".git/objects/8b/5f563d34eefc31a161ba5a587cb27bbe9a2378": "c46897cc393e236f56636deeec6d3779",
".git/objects/14/fc899a293cc79389261f1cfa4a5a9a98e6aef7": "a5f470d9e76db8e14a3d17edd3d579fa",
".git/objects/25/b8ed8b53834e912af5b17c3d539eb47e605fb1": "3ad264e27490e2763b81111dfda2f8e1",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "1aaf53647a2a16c90066b8e0fef5feae",
".git/logs/refs/heads/main": "1aaf53647a2a16c90066b8e0fef5feae",
".git/logs/refs/remotes/origin/main": "ec8d45605791ab90bcd457f9c7803c89",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "42eb676670553dc703451e0af20fcdc9",
".git/refs/remotes/origin/main": "42eb676670553dc703451e0af20fcdc9",
".git/gk/config": "34ce3a24131da6dc1e153ba8f4f88706",
".git/index": "072118f5681aa33eedcbe0f3e51c9c82",
".git/COMMIT_EDITMSG": "160018db7c2a9912bd66ee60c822c4a6",
".git/FETCH_HEAD": "523bec291df7c06808e0a6406771057f",
"assets/NOTICES": "68f43ea367083faac83ab2892641ca72",
"assets/FontManifest.json": "632736759cb6ddd32cecfc04cd167e65",
"assets/AssetManifest.bin.json": "5042604cad72b057f313a11a117027a8",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b93248a553f9e8bc17f1065929d5934b",
"assets/packages/iconsax/lib/assets/fonts/iconsax.ttf": "071d77779414a409552e0584dcbfd03d",
"assets/packages/flutter_dropzone_web/assets/flutter_dropzone.js": "dddc5c70148f56609c3fb6b29929388e",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"assets/AssetManifest.bin": "702cb71b41e978e98e0c1bf9e41802be",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/images/products/nike-shoes.png": "7bd206fd5ea8a583f29774ba5056944c",
"assets/assets/images/content/tiny-man-maintaining-a-work-life-balance.png": "4276412c3f27426077b7e8e6dcec184e",
"assets/assets/images/content/tiny-color-palette.png": "b7e756302d4e0b3ce3d7ba87fa5b555c",
"assets/assets/images/content/user.png": "3d32ce9cf37351e47b1bbda03b02e318",
"assets/assets/images/content/default_image.png": "79794da0bf39e1aa1ed0d76ca08ddfde",
"assets/assets/images/content/default-images-icon.png": "d891e5ee15e14498bdb690461e14d974",
"assets/assets/images/content/default-image-icon.png": "adc3e03ee76f67785309b761c731a0c7",
"assets/assets/images/banners/banner_4.jpg": "f03072f3585725d4c5f55dc2058aa46a",
"assets/assets/images/banners/banner_2.jpg": "c20228aba1cf55b58dca20c4c776ad2d",
"assets/assets/images/banners/banner_3.jpg": "f5e13e5d315221b3c3f564ced5be1b03",
"assets/assets/images/banners/promo-banner-1.png": "3782cfad0a8c18afe3315fa8c56f6071",
"assets/assets/images/banners/promo-banner-3.png": "2d4ac1598b12eac6fb143a9feebf58c2",
"assets/assets/images/banners/promo-banner-2.png": "3fecbd4c54aef7fc52ae0897a5a0702f",
"assets/assets/images/animations/loader-animation.json": "2f4d8873f57c144c9c1cc001c19fd2fd",
"assets/assets/images/animations/sammy-line-sale.png": "c8cf76d47496487772f231d41e3673ed",
"assets/assets/images/animations/141397-loading-juggle.json": "18cd80a46915ce96176088f6de32cc17",
"assets/assets/images/animations/110052-paper-plane.json": "f37753fd6490213aafe42c28ce082860",
"assets/assets/images/animations/104368-thank-you.json": "cb41def8492745f6da17aa174f24bc18",
"assets/assets/images/animations/53207-empty-file.json": "798eedcbdacc86b43851c8f678c4eb83",
"assets/assets/images/animations/lady-adding-product-in-cart-animation.json": "fa6f9ae5b579cf56ade9fec2d74010af",
"assets/assets/images/animations/cloud-uploading-animation.json": "1cd38deb1399a0368a650d21dc2fdcab",
"assets/assets/images/animations/order-complete-car-delivery-animation.json": "f4ac9e34a730c64dad0940752f2438bd",
"assets/assets/images/animations/72785-searching.json": "42d6b09696a19c24719a8102a4f093c9",
"assets/assets/images/animations/ecommerce-checkout-laptop-500-nb.gif": "72e47bd4103bdf8850d41f4155538bbd",
"assets/assets/images/animations/sammy-line-success.png": "4aaf57cacb9b7514f345bd45cea880e1",
"assets/assets/images/animations/default-loader-animation.json": "0a0b121ec84940f613d27b4d72c75048",
"assets/assets/images/animations/creating-product.gif": "5a3613a3e6f14f0abfb8e80d7a9cb929",
"assets/assets/images/animations/140429-pencil-drawing.json": "ad496d8fba433f392cac58a28f592c5a",
"assets/assets/images/animations/72462-check-register.json": "f025dd10b211685777be1fc8b9d43f37",
"assets/assets/images/animations/sammy-line-come-back-later.png": "bb489d0ad837808917ed0b3bd2c17d97",
"assets/assets/images/animations/sammy-line-workout.gif": "32c3916fc369a730a7aa7a6c24b9583e",
"assets/assets/images/animations/141594-animation-of-docer.json": "0447d6592aa7c62f7464b5a867a18bf7",
"assets/assets/images/animations/tick-confetti.json": "ebfc8e95a2514d3f339c8d0b3912f773",
"assets/assets/images/animations/sammy-line-travel-backpack-with-passport-and-air-ticket.gif": "a691c26c3c08c432f68ce4b117dcb6a0",
"assets/assets/images/animations/120978-payment-successful.json": "23257c5bfbb6517be2883084bac86fe7",
"assets/assets/images/animations/world-bicycle-day-blue-nb.gif": "2c9d6c89128010d0b4fdf1264b4ac3a3",
"assets/assets/images/animations/136491-animation-lottie-car-rides.json": "c7be1f7cd21460d83e7af61b45c23294",
"assets/assets/images/animations/uploading-files-from-computer-to-cloud-storage.gif": "ee0de1d1b3bbaeaf6413fe55e8e1dbdc",
"assets/assets/images/animations/67263-security-icon-transparent.json": "c6aa8a75f3bdf204d2c7fe86a68076e0",
"assets/assets/images/animations/uploading-document.json": "a7c973378012ac7a2857955b8c7e6e32",
"assets/assets/images/animations/congratulation.json": "ebfc8e95a2514d3f339c8d0b3912f773",
"assets/assets/images/animations/sammy-line-man-receives-a-mail.png": "05ecfa9b154cb7fe1d4f4339119a3b45",
"assets/assets/images/animations/world-bicycle-day-blue.gif": "cbf7bcb47c81c7842514a85b0881b9fe",
"assets/assets/images/animations/98783-packaging-in-progress.json": "ad95f6974da0dbcbb295e6ca62997668",
"assets/assets/images/animations/uploading-done.json": "684c443c716f99421747aae5a9c6ebbe",
"assets/assets/logos/easyriz-logo-three.png": "dd42dcf6f88dcdfd62c03bd0038297e7",
"assets/assets/logos/facebook-icon.png": "be0423f843fc36586991cbf92c059422",
"assets/assets/logos/easyriz-logo-two.png": "3f32643917996434a0522155a5a1276a",
"assets/assets/logos/easyriz-splash-screen.png": "f5341482340a011899e7177a25cc8393",
"assets/assets/logos/appLogoWhite.png": "254ae0d13c806fb581e2ab5b971a7833",
"assets/assets/logos/google-icon.png": "b95e5615716a3ae4b62f14a430bb1253",
"assets/assets/logos/easyriz-splash-one.png": "44c06a27d98a32997695b4b6c675980f",
"assets/assets/logos/easyriz-logo-one.png": "6c0eada0e248cbedc6ebffd50b481bb6",
"assets/assets/icons/payment_methods/master-card.png": "647f4f9e11f4fa27fc415b1190a1d9e0",
"assets/assets/icons/payment_methods/visa.png": "dcd36d867f0f60f1ddf675f28b460981",
"assets/assets/icons/payment_methods/paystack.png": "4a7ac4e8e0a890715d732e007a79864d",
"assets/assets/icons/payment_methods/credit-card.png": "6ffbf260c19fde171b618ce6fb48314a",
"assets/assets/icons/payment_methods/paytm.png": "a5f0f450edb5fd5512efc780b067d39d",
"assets/assets/icons/payment_methods/google-pay.png": "5a02c53580e0bd0b61a30e03c886bab4",
"assets/assets/icons/payment_methods/cash-xaf.png": "cf3024ad9a424f45249c3c8fffbd0062",
"assets/assets/icons/payment_methods/apple-pay.png": "3c1f533a24ae1a3ea3c7ac9104820b21",
"assets/assets/icons/payment_methods/mtn-momo.png": "6a343c6a88fa188dfb47864a228102ee",
"assets/assets/icons/payment_methods/paypal.png": "1597d2e2a75ec5d8f9ea4fbc40ff7e3d",
"assets/assets/icons/payment_methods/successful_payment_icon.png": "c6ecac5e4a7b5ab35be124e482287cd4",
"assets/assets/fonts/urbanist/Urbanist-Bold.ttf": "1ffe51e22e7841c65481a727515e2198",
"assets/assets/fonts/urbanist/Urbanist-Regular.ttf": "4c1ae1074c39cca3b3fd7a788b5afd96",
"assets/assets/fonts/urbanist/Urbanist-MediumItalic.ttf": "1497d007b844b9b86a871ff242929d51",
"assets/assets/fonts/urbanist/Urbanist-SemiBold.ttf": "ae731014b8aa4267df78b8e854d006ef",
"assets/assets/fonts/urbanist/Urbanist-Italic.ttf": "213b2ebe4092125001fa5d9f686ac1a0",
"assets/assets/fonts/urbanist/Urbanist-Light.ttf": "46ffc15bcd0fb7da54fc241cb43ece28",
"assets/assets/fonts/urbanist/Urbanist-Medium.ttf": "9ffbd4b23b829ddd499aaf5eb925a86c",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
