'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "61b972d777a7cb2101e4a43b8501d792",
".git/config": "c8ad93bf91dc18987fb10151b70481c6",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "6ab0cd34df0f1d79b9cc171e8049a493",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "073813d700b9480e45af63c159a0e961",
".git/logs/refs/heads/main": "68e7ac29134f652c349a9ffcf5f1656d",
".git/logs/refs/remotes/origin/main": "38ef023ef0a6905acabe91e4949cbd76",
".git/objects/00/18f535545d5c93c727910d29fbaf4984b82599": "20d404aac5e2407dd1a288061657d43a",
".git/objects/02/366b6091fee5c5dad3d09b54b0c0f522d7e3ab": "4b59b435b3ed4795d26f4c874b9ed0a6",
".git/objects/04/e91f2a2abee9c4c3e98536809b5b71ccb89b24": "ae02f74c46e364c897a2637a3daa2cf5",
".git/objects/05/65c4735035f51d7fa8805363332ac425a395f2": "5d9099dea5accee481e8ef6cbf5729a4",
".git/objects/08/27c17254fd3959af211aaf91a82d3b9a804c2f": "360dc8df65dabbf4e7f858711c46cc09",
".git/objects/0b/37c6e594a9f2ba38d271814fedff4a7f26d81b": "e5de9a20cd376b9cdb1bbad9ab3bdc7e",
".git/objects/0b/4342663fba9d86294b675074f7a4f7bd85a756": "d4d914900c8c1bc6c0acfc98d3f1b12a",
".git/objects/11/a6297d71a4d0d57c921dac8050c825943367e4": "e4b829aab09e3fcd21ccb47275b480bf",
".git/objects/16/b2833fd81848f59302d605b94dfbcc4d5d4dff": "46a49fa1545aa9a650f0bc84bfbc09b2",
".git/objects/16/e40830f44d02ab9f70994dae6041f4ebc4a2af": "4540422d9b6c63fe36103fa28c39b446",
".git/objects/17/baf8631dd858d0b94edf51f1cefa90cda25f5f": "dc0a6f59f2eb33bb4d7def68fd7cd6a6",
".git/objects/1a/0ad7d4e9f1fea4b436d9f19391a234c8c36b9c": "9ca6cb3c482db14366f3e1021aa67211",
".git/objects/1d/129c486bc0b3e8461e2d589ab92d3a4e237c06": "f099164afe77ad103fe8283ce26abeee",
".git/objects/1d/b79e68cc93f5581324c44e796053b1618abcba": "1e89b5356d4cd354dcbce5bf9e57bdf3",
".git/objects/1d/eaada0167009d6cdbf5ad829866afc103cfd2e": "307360ed4ed4b31c3af502ce76e6fcd5",
".git/objects/1e/06fd8fe8cc5d227e35e7e0448b29a4a76262f6": "5077d5538d12277e8b02c34e15185251",
".git/objects/2a/794b2701f4a3d07b70fa77ab94ca5e4b2b503e": "6792b99701298341a350b566a1d57137",
".git/objects/33/0e84f9548499cd9ad7c32ba563cc9bc637d8b3": "692e28633bd09d8cb706ea885f5f9b01",
".git/objects/34/b16bd0f93e550e8cbffc6f2b4c7b88986e2c91": "e57694810c586699d774232a6f1cf265",
".git/objects/34/b9330ec002f63e835a6ab35da7df2c0847c441": "46656dcd11bdfd480916d06b97e451cf",
".git/objects/3a/8cda5335b4b2a108123194b84df133bac91b23": "1636ee51263ed072c69e4e3b8d14f339",
".git/objects/3b/ccbcbd497e0988f86dfbf9c33a47b91f4f9832": "bbab8bcf4c6064837a7b5ec432a29093",
".git/objects/3c/69f89b2b86f1d9371a3128fbca7fcd2ba0a5fe": "4be1e30f2816cd1cf8a4112a62b45651",
".git/objects/3e/54b6832adbe8a0e111c4169b437532264cc93f": "87df441e254a8b86ebbd00b30df0845c",
".git/objects/3e/7677ba8edc36477e8da1da4723ceeee611a147": "ea391d118ff8a085fa1f2db62fe8f049",
".git/objects/40/507eff15aa774d0bc3d35ba019a962d5af8cff": "f47af2468f3e8fbaa574946b5f696dc7",
".git/objects/40/f1694ba4c97cdfaaa99a6459feab9a24614586": "aca2ed34561ba1ba8fc7d7674cd50113",
".git/objects/40/fb63c38b71a8c8d439e04a2ecbce0aa418c3aa": "a28a79c369e85eaf8097ab819f9f2127",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/44/566b2bc56bdcd41212ae1a8f2b933ff3e21b9e": "2277a9108884dca1e69ae45a94faebc3",
".git/objects/44/a9c897acf8d6cff5b3ba9c04689608f58cf16b": "bcbdf6bed7cd3b8e6095f6c694842bc0",
".git/objects/47/def5d6fa8d238b918a2717a3221bf08d2be823": "6089440094372059493ae08bba3c37e5",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/4c/81eca1e13aa80a79950491f028d299966f8404": "475726fca2bfc8e645de0a0ecb68dbff",
".git/objects/4f/7c2cae0a85340b84be4d132837ec6302d7852e": "ccd0df9a64ecb2c91ad79fe6f5c5228a",
".git/objects/51/03e757c71f2abfd2269054a790f775ec61ffa4": "d437b77e41df8fcc0c0e99f143adc093",
".git/objects/58/e24c7887fb9b7c3e6fc8715940d271119b1ef3": "ccbc31a80c3a34e57b0adfe34ec2a934",
".git/objects/59/03400040c5a25fb4fc3061e3568e5c3f19ef2b": "06af0040656690fc824dc7f3ea091ec5",
".git/objects/5a/38cf7cbcb779deda0f2a3fee396924d3b1c30b": "6b7c79a32bfefb978fc8e48c746feab5",
".git/objects/5c/84778cbba9b2cf0505962fd714084856527fc1": "a7b706be9fe20ef59431184dc038ee02",
".git/objects/5d/49d427b84ed2de5836b5a2e0a805be04387470": "2074a5a3311166a25ad8444baa8274b5",
".git/objects/5f/a715e2e5301eceaf68c16ee7d935f8d6b18b6b": "932eb41b38f7d408b2fb62016a6f2d61",
".git/objects/5f/a9c43972d4cc2baf98ab1547d6abd5d99672b7": "c66d484d94801a73d3fbcb4e41ab6511",
".git/objects/61/25a1b281f3e378e9750b87dfe02f60314f18fe": "4297ead0d9ac9ef5e2cb698cb647ab06",
".git/objects/61/bd36c7c808463ded16889a79f0d7c397eef69c": "5c7836d5cf0862b5854ced765ba2cc5e",
".git/objects/61/bebbe5874ad4631125b22e82adbeaa2b63b196": "c2bcdf5b744b0f38cbc53aff2e5d3f08",
".git/objects/62/829697aca1c66bacbdeea9ec483dbe1c21a10a": "7f89a3acc2a10eb383a768d0be0bec4b",
".git/objects/63/aa351b2fc2f0b681c8e5724e6f7bc3008331ac": "4fa1a341c7c02c982981e2021c9a0934",
".git/objects/64/7d21e45ea35d51e04f35e8128f1fe495940afe": "76327f857e6281f1bc027efea31189bd",
".git/objects/65/6af8572235b299cc99346cbed8f40d2d2ae9e9": "be1bb1d41b34c9895b0f169369128891",
".git/objects/65/d410662f30e04c24e01ced0447845cebec5dae": "3d7c0e916ac9c85de980e971b7360abe",
".git/objects/68/43fddc6aef172d5576ecce56160b1c73bc0f85": "2a91c358adf65703ab820ee54e7aff37",
".git/objects/6c/b05f75fc3bd05e8edf7d6dc84bedc7aa7d8052": "8500a96c5aefc42094a43c67ed4cc0bc",
".git/objects/6d/393d1cd23bb3d06676bc0194cfb69d77a2af78": "3eaca5225f6a71877c09f978de503bd9",
".git/objects/6f/7661bc79baa113f478e9a717e0c4959a3f3d27": "985be3a6935e9d31febd5205a9e04c4e",
".git/objects/6f/e89b7cfb635308b8206da650b45177b0ccc96d": "2e487a7a9cbefeb66045bf53bb039e19",
".git/objects/73/9787144503b88d5fa3ce3578cfdb9a83cb70ea": "740247bef1d5c939d7bd7d3a8f79c174",
".git/objects/73/cd0a439f64d92a72a2d89204d8cff8178387ea": "51cc5d019c3acddb3771876e8c62e54a",
".git/objects/74/fce7ebedfd2c5672db4da95384e96405f8ab30": "a254dbd92c883ac02f36a9e37a114f9e",
".git/objects/75/c3f07b48bc36f05cbac23efef1aa1fb174106f": "d9da902e109129b99ef68c732a3106d5",
".git/objects/76/0ff6af40e4946e3b2734c0e69a6e186ab4d8f4": "009b8f1268bb6c384d233bd88764e6f8",
".git/objects/76/8b8351943df1290b33282c4ef2a7069350213a": "9703d621b114305c381e6252075fec0e",
".git/objects/79/688a6c8fb3118493e5de440e89618e7c5575ed": "76a8785f55a152d238198341a543f26c",
".git/objects/7b/4697dc272fe77e3aa1c7a61a58a489077ec44b": "2f2cc42071a7e71fed17315a3cfe32f3",
".git/objects/7c/3463b788d022128d17b29072564326f1fd8819": "37fee507a59e935fc85169a822943ba2",
".git/objects/7c/6c064798fb24afe681646151dc7ba8c1bb3df7": "3c4d4c5d5edfd9692b1535dbda658be7",
".git/objects/85/63aed2175379d2e75ec05ec0373a302730b6ad": "997f96db42b2dde7c208b10d023a5a8e",
".git/objects/86/ce1871e3524fca0cc756029c9860bac4c03d7f": "71c959dc5e7a9dec8ec2da021e1b5b3c",
".git/objects/86/dea66e382a37de429cf8cc1d7399fca15ab7a5": "a90ed4ca882d4796928efac4455b7a40",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/8d/e969d017ca8504861b2aed0c74bad5cfb1f103": "161e37268b5fd2d6fa21ff09bbadc66f",
".git/objects/8e/21753cdb204192a414b235db41da6a8446c8b4": "1e467e19cabb5d3d38b8fe200c37479e",
".git/objects/91/1c829013556ed47a10623606d500843c01b033": "8b96cd2c7d843c7995eae47eea456ef5",
".git/objects/93/b363f37b4951e6c5b9e1932ed169c9928b1e90": "c8d74fb3083c0dc39be8cff78a1d4dd5",
".git/objects/94/21c03292b0b1e3934cb8722420c543585ddb1f": "fc0d63674288e1a184a4c28d842b57e0",
".git/objects/98/5227c3efd95c89123f4e75ddbc58c51a772ec1": "5e54b25401f06aacd52b0cac2b316c8e",
".git/objects/98/ac278f5a6aaf6e2650fcc13cb0745abc0cb3c2": "4316d30490c6c9354c259d48a8e4ee45",
".git/objects/98/c0faa53811b93f29e5bc932aac0357202e887b": "d6875f9c2fd6f04e4d3fa2f56d8a295b",
".git/objects/98/e9c040e18b7432ae1af99103ceac6cc631e215": "e6616f0c0871cc2c85d77c5ba44ec9cd",
".git/objects/98/f00dd5c26d9d622d77988aeaf42a50ae5d8a82": "ca74e19a1449038d21a52c3a6fb2fd1f",
".git/objects/99/1c8979d168007b04f944492bb3d263764319ef": "c02590c7b7e8b8eada25f6c107e7ead2",
".git/objects/9b/6627615511e0c0be7f8799f5c96ce31ca4f546": "14dcac38538de0a6e250beae0a2f3a6b",
".git/objects/9b/7f91003bd283b070f3311299ff9d752f28fc43": "7e45f2675c6d047daf8f1c4c9ccb840d",
".git/objects/a0/6eeb619f640ae85e1180542ab80e5a12a60245": "56306411bd310d2d66e99be8faa4505f",
".git/objects/a3/252e0beabe724dfb0fbce6956293719056a398": "6fd29a272ea1ca1ff77324741685202a",
".git/objects/a4/fb81f4e674e848a0a6cb7ec72e644744c06806": "5e0b23adfc58e7cf94ca54c014b24c6b",
".git/objects/a7/3f4b23dde68ce5a05ce4c658ccd690c7f707ec": "ee275830276a88bac752feff80ed6470",
".git/objects/a7/968663aa0382e5570cd41a3d8644b7efea8cf0": "852f3062a9ed3769bc3342253b06e5ab",
".git/objects/a8/04e9e211ae84900ba27c843b9bd8e023131bd4": "30d3dd36fe862d324ff9a8dba4ca9a5f",
".git/objects/a9/1aea7a8565b4776bbbf536d0c2bd87ea6009b6": "93007875c8f7facac021f85bffe3614a",
".git/objects/aa/c9e56f57d157fe673a07aa3dd9ed506ea3a6e7": "f31dece0e3933fa679fd75958afcc0f3",
".git/objects/ac/c8245bcf5df5b3c402ff22a3a379da0cf97d01": "8833f4544b9cf2cee762e14cffeadddc",
".git/objects/ac/f5dea29f1c2d4c3766ef046fdd2578e9a80224": "6792ba79abb74eff6013f429667feb80",
".git/objects/ad/4c0ba9842f4de544316a62269732d33f652961": "d2648c4f7ac6a01d24dedabffef3980b",
".git/objects/ad/a73c08d4ed3624b1ee08969f39615ea8d9fae1": "2c6e444602ddabee1130a50a2b20368e",
".git/objects/ad/ced61befd6b9d30829511317b07b72e66918a1": "37e7fcca73f0b6930673b256fac467ae",
".git/objects/b4/6942388396f141be80a54e0826b3aa10ed3a62": "c5aedb7700c73e892848437c8afb3812",
".git/objects/b6/5d985e17843f66ba41d39d3d74a21d2da2827d": "7a84cc147aafefde039217a234d400ce",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/40a661b1713d107fc7875f3b2b3b30e1e77a97": "fadd3abc9a1261085332438ec4534748",
".git/objects/b8/855e8cad32b5312d6c713a0b0517ba4a163a1d": "72c7f110601192f52532df7c13583692",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/3e39bd49dfaf9e225bb598cd9644f833badd9a": "666b0d595ebbcc37f0c7b61220c18864",
".git/objects/b9/43f6cb641698204c6418ac6946e3b3b664492f": "66b9e33fbd4b8cfc9a6cecf0d72e735b",
".git/objects/b9/98f05087c4e884f2a3254d9aa41f647945ab24": "1cd48b98cffe5a7932cb0c24b6c2b2e1",
".git/objects/bc/c36eaa964d7d26b99cb546c4140512e37e3b77": "498d7e82dff585079d178b76c969f23b",
".git/objects/bd/f0ef90436b7d0fb06d281958d098bc74ff0688": "267576bdb25e0d98a5feadef2bbb82aa",
".git/objects/be/ab70262e863d6eae79cc61e2626e0b2ea0ae3b": "3ca631349bd00c43e096666b9518b64e",
".git/objects/be/e74e0fcb1b41d7292ec86b17a368a4d79ccc67": "5fc613e221cc71c20f6b2d200cc256e5",
".git/objects/bf/950412e4f984b86d41bea0c4b7a3142f03fda3": "ddbdfe1a640b4bdc64e63f77a791f8a9",
".git/objects/c1/7296d1c91e73acf491a274e42c8362f7c8577c": "83e21615a05bda3c843a086257f99966",
".git/objects/c1/86b3392db596a5fdafe399dc6faa0e50b1523f": "35587489dad583b88d1da66b54ccff1b",
".git/objects/c5/0ac58cab75b3f192e39293ea947f8a73007b38": "4974fd0960d31a484b93236cb1656178",
".git/objects/c5/a9b366d2efc64cd2d8185a8ef65a15192c944d": "432a6cf6b5d253a996d75fc234d403dc",
".git/objects/c7/b2c77069620bf31693c5068f6023f871855e90": "063dc922ade57599765ea12a9118c8e4",
".git/objects/c8/3af99da428c63c1f82efdcd11c8d5297bddb04": "144ef6d9a8ff9a753d6e3b9573d5242f",
".git/objects/c9/972cb038b1504a49e666efcffea7e1e2478266": "81c9cffd23b70b6d2c2147a53a91c77d",
".git/objects/c9/f6be2aeef10c76bfbb05f9af7db13ac663e822": "da137083a11dfcf49f38cd6e7f484aec",
".git/objects/cc/cabdf931bfa0ca5d97ac05e8471753a3e0f23f": "3e7b8d3d542b5181ffd58a3b607422ad",
".git/objects/d0/506e4750ec62594e27b4dc0c155dd7a626e618": "018f928dca0308f9b16fc24a02be5e01",
".git/objects/d2/109074ed8af1f53d12d9c9e4073e241c0950ba": "204a7ee7fb7474df1fa829999146215a",
".git/objects/d4/0fe75c7092dbf21cf3bba09ca833e95471355a": "0fe97a9b99ca8958706db19f183d77aa",
".git/objects/d4/245525098651813e21d037daeeb3b0af0ee4b8": "fb43ee30e7757cd7488df9b5ca7a982e",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/80ce749ea55b12b92f5db7747290419c975070": "8b0329dbc6565154a5434e6a0f898fdb",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/9b25c9408d9af3c89ed6f07486e1fbd3194e56": "4725ef974d4c6fb8b16b60100df41dde",
".git/objects/d8/a8a04003fe79ab63d91fdcbd3b3ed1eee1bf63": "d522aa44aac4199598e5bc2601089a01",
".git/objects/d9/5b1d3499b3b3d3989fa2a461151ba2abd92a07": "a072a09ac2efe43c8d49b7356317e52e",
".git/objects/db/a6084bbaabf89f2b40dd8e0e0a88c51ff80c2b": "663128d3de0c042ea34dc1411cbeb45e",
".git/objects/df/5af73ce364abeb1e1c5ec2035c34206f701fa5": "4f2626c08f9c5ddce4116355b7a97b77",
".git/objects/df/ef50c29edf8c5bf4af25d8ee73a526575c80d9": "a8ab6aa2f0725877b0079c203a225716",
".git/objects/e0/63f7a6c5c733fa54629d186b603853ad9f005a": "e4d93ac48b01e2de45df3ce58534325c",
".git/objects/e2/8ca0dc4f38c8c49ff440981659abc947059325": "f4aa2a0668cb3102cc1a1f910011ca1e",
".git/objects/e4/c29856904373e6af4271b63b13c338e41981c9": "1f5a1770eb143258ced78f9a7b14cbe5",
".git/objects/e6/eecb2830acc1c6d0172401c57246460e8441ba": "3c6346ad1a3d1513fb90b16b7bb7c92b",
".git/objects/e7/22c6162a04924db347584fc80c69c7e5092e0a": "0e68cb86039251f373f0a79780533af1",
".git/objects/e9/a6dbb06b82939449307e9aab304628b3c46525": "da237aede30a8aadd229c82977a4dbbf",
".git/objects/ea/86c101f4aa6167761c8e119af4dbcecc38895f": "9cf908e3acb1c5771665899e486532a2",
".git/objects/ea/c0c32e063c70eed90e1f10458000bfc8905ae6": "ac9adc9c983f1726f20ee13021edbf9f",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f0/eba39bbb6f41a6f71fcc3c078fd10f27f0f704": "e38281495b0a96ea6537da76fe50f77a",
".git/objects/f3/3e0726c3581f96c51f862cf61120af36599a32": "afcaefd94c5f13d3da610e0defa27e50",
".git/objects/f6/e6c75d6f1151eeb165a90f04b4d99effa41e83": "95ea83d65d44e4c524c6d51286406ac8",
".git/objects/f7/ac919ffc1ef73068ab15442320552581269598": "c87efc3e5c9294492f98de8fb5f58f62",
".git/objects/f8/2693223a6329edd44b717f2133ab119e2971e1": "38ea4070844c5acad52e1e774b91d0af",
".git/objects/fb/d18cda14b170a8e4fb167cb5df4f39c09ec777": "1cd9832c81b7339b3a61abfdbe7d750d",
".git/objects/fc/f59c177acd91508e68ba70e878841b6976d944": "2a31c0bd6f820a98973809d121d2ddfb",
".git/objects/fd/05cfbc927a4fedcbe4d6d4b62e2c1ed8918f26": "5675c69555d005a1a244cc8ba90a402c",
".git/refs/heads/main": "7384d78fb4d5fc49e79cdf396b2c2891",
".git/refs/remotes/origin/main": "7384d78fb4d5fc49e79cdf396b2c2891",
"assets/AssetManifest.bin": "6b91653e3410e0ec14b6637e1f4e2b59",
"assets/AssetManifest.bin.json": "ba939cc0334dc73ebcffdfd80e3d63a0",
"assets/assets/fonts/urbanist/Urbanist-Bold.ttf": "1ffe51e22e7841c65481a727515e2198",
"assets/assets/fonts/urbanist/Urbanist-Italic.ttf": "213b2ebe4092125001fa5d9f686ac1a0",
"assets/assets/fonts/urbanist/Urbanist-Light.ttf": "46ffc15bcd0fb7da54fc241cb43ece28",
"assets/assets/fonts/urbanist/Urbanist-Medium.ttf": "9ffbd4b23b829ddd499aaf5eb925a86c",
"assets/assets/fonts/urbanist/Urbanist-MediumItalic.ttf": "1497d007b844b9b86a871ff242929d51",
"assets/assets/fonts/urbanist/Urbanist-Regular.ttf": "4c1ae1074c39cca3b3fd7a788b5afd96",
"assets/assets/fonts/urbanist/Urbanist-SemiBold.ttf": "ae731014b8aa4267df78b8e854d006ef",
"assets/assets/icons/payment_methods/apple-pay.png": "3c1f533a24ae1a3ea3c7ac9104820b21",
"assets/assets/icons/payment_methods/credit-card.png": "6ffbf260c19fde171b618ce6fb48314a",
"assets/assets/icons/payment_methods/google-pay.png": "5a02c53580e0bd0b61a30e03c886bab4",
"assets/assets/icons/payment_methods/master-card.png": "647f4f9e11f4fa27fc415b1190a1d9e0",
"assets/assets/icons/payment_methods/paypal.png": "1597d2e2a75ec5d8f9ea4fbc40ff7e3d",
"assets/assets/icons/payment_methods/paystack.png": "4a7ac4e8e0a890715d732e007a79864d",
"assets/assets/icons/payment_methods/paytm.png": "a5f0f450edb5fd5512efc780b067d39d",
"assets/assets/icons/payment_methods/successful_payment_icon.png": "c6ecac5e4a7b5ab35be124e482287cd4",
"assets/assets/icons/payment_methods/visa.png": "dcd36d867f0f60f1ddf675f28b460981",
"assets/assets/images/animations/104368-thank-you.json": "cb41def8492745f6da17aa174f24bc18",
"assets/assets/images/animations/110052-paper-plane.json": "f37753fd6490213aafe42c28ce082860",
"assets/assets/images/animations/120978-payment-successful.json": "23257c5bfbb6517be2883084bac86fe7",
"assets/assets/images/animations/136491-animation-lottie-car-rides.json": "c7be1f7cd21460d83e7af61b45c23294",
"assets/assets/images/animations/140429-pencil-drawing.json": "ad496d8fba433f392cac58a28f592c5a",
"assets/assets/images/animations/141397-loading-juggle.json": "18cd80a46915ce96176088f6de32cc17",
"assets/assets/images/animations/141594-animation-of-docer.json": "0447d6592aa7c62f7464b5a867a18bf7",
"assets/assets/images/animations/53207-empty-file.json": "798eedcbdacc86b43851c8f678c4eb83",
"assets/assets/images/animations/67263-security-icon-transparent.json": "c6aa8a75f3bdf204d2c7fe86a68076e0",
"assets/assets/images/animations/72462-check-register.json": "f025dd10b211685777be1fc8b9d43f37",
"assets/assets/images/animations/72785-searching.json": "42d6b09696a19c24719a8102a4f093c9",
"assets/assets/images/animations/98783-packaging-in-progress.json": "ad95f6974da0dbcbb295e6ca62997668",
"assets/assets/images/animations/cloud-uploading-animation.json": "1cd38deb1399a0368a650d21dc2fdcab",
"assets/assets/images/animations/congratulation.json": "ebfc8e95a2514d3f339c8d0b3912f773",
"assets/assets/images/animations/creating-product.gif": "5a3613a3e6f14f0abfb8e80d7a9cb929",
"assets/assets/images/animations/default-loader-animation.json": "0a0b121ec84940f613d27b4d72c75048",
"assets/assets/images/animations/ecommerce-checkout-laptop-500-nb.gif": "72e47bd4103bdf8850d41f4155538bbd",
"assets/assets/images/animations/lady-adding-product-in-cart-animation.json": "fa6f9ae5b579cf56ade9fec2d74010af",
"assets/assets/images/animations/loader-animation.json": "2f4d8873f57c144c9c1cc001c19fd2fd",
"assets/assets/images/animations/order-complete-car-delivery-animation.json": "f4ac9e34a730c64dad0940752f2438bd",
"assets/assets/images/animations/sammy-line-come-back-later.png": "bb489d0ad837808917ed0b3bd2c17d97",
"assets/assets/images/animations/sammy-line-man-receives-a-mail.png": "05ecfa9b154cb7fe1d4f4339119a3b45",
"assets/assets/images/animations/sammy-line-sale.png": "c8cf76d47496487772f231d41e3673ed",
"assets/assets/images/animations/sammy-line-success.png": "4aaf57cacb9b7514f345bd45cea880e1",
"assets/assets/images/animations/sammy-line-travel-backpack-with-passport-and-air-ticket.gif": "a691c26c3c08c432f68ce4b117dcb6a0",
"assets/assets/images/animations/sammy-line-workout.gif": "32c3916fc369a730a7aa7a6c24b9583e",
"assets/assets/images/animations/tick-confetti.json": "ebfc8e95a2514d3f339c8d0b3912f773",
"assets/assets/images/animations/uploading-document.json": "a7c973378012ac7a2857955b8c7e6e32",
"assets/assets/images/animations/uploading-done.json": "684c443c716f99421747aae5a9c6ebbe",
"assets/assets/images/animations/uploading-files-from-computer-to-cloud-storage.gif": "ee0de1d1b3bbaeaf6413fe55e8e1dbdc",
"assets/assets/images/animations/world-bicycle-day-blue-nb.gif": "2c9d6c89128010d0b4fdf1264b4ac3a3",
"assets/assets/images/animations/world-bicycle-day-blue.gif": "cbf7bcb47c81c7842514a85b0881b9fe",
"assets/assets/images/banners/banner_2.jpg": "c20228aba1cf55b58dca20c4c776ad2d",
"assets/assets/images/banners/banner_3.jpg": "f5e13e5d315221b3c3f564ced5be1b03",
"assets/assets/images/banners/banner_4.jpg": "f03072f3585725d4c5f55dc2058aa46a",
"assets/assets/images/banners/promo-banner-1.png": "3782cfad0a8c18afe3315fa8c56f6071",
"assets/assets/images/banners/promo-banner-2.png": "3fecbd4c54aef7fc52ae0897a5a0702f",
"assets/assets/images/banners/promo-banner-3.png": "2d4ac1598b12eac6fb143a9feebf58c2",
"assets/assets/images/content/default-image-icon.png": "adc3e03ee76f67785309b761c731a0c7",
"assets/assets/images/content/default-images-icon.png": "d891e5ee15e14498bdb690461e14d974",
"assets/assets/images/content/default_image.png": "79794da0bf39e1aa1ed0d76ca08ddfde",
"assets/assets/images/content/tiny-color-palette.png": "b7e756302d4e0b3ce3d7ba87fa5b555c",
"assets/assets/images/content/tiny-man-maintaining-a-work-life-balance.png": "4276412c3f27426077b7e8e6dcec184e",
"assets/assets/images/content/user.jpg": "7af9f2268e64db0f9efdcfa42da7de5c",
"assets/assets/images/content/user.png": "3d32ce9cf37351e47b1bbda03b02e318",
"assets/assets/images/content/user1.png": "f9e447f2bebc53ca0294824e2db43c82",
"assets/assets/images/products/nike-shoes.png": "7bd206fd5ea8a583f29774ba5056944c",
"assets/assets/logos/appLogoWhite.png": "254ae0d13c806fb581e2ab5b971a7833",
"assets/assets/logos/easyriz-logo-one.png": "6c0eada0e248cbedc6ebffd50b481bb6",
"assets/assets/logos/easyriz-logo-three.png": "dd42dcf6f88dcdfd62c03bd0038297e7",
"assets/assets/logos/easyriz-logo-two.png": "3f32643917996434a0522155a5a1276a",
"assets/assets/logos/easyriz-splash-one.png": "44c06a27d98a32997695b4b6c675980f",
"assets/assets/logos/easyriz-splash-screen.png": "f5341482340a011899e7177a25cc8393",
"assets/assets/logos/er-logo-black.png": "ca35737254680d07a457cebcff28d8a7",
"assets/assets/logos/er-logo-blue.png": "12a5a012ee45b8de0895c9bcb7c14b7a",
"assets/assets/logos/er-logo-deepblue.png": "224fce4a76927d881e28d9ffa16ad5cf",
"assets/assets/logos/er-logo-grey.png": "8294f6fd6d866bb4c8edf252ecbaec9d",
"assets/assets/logos/er-logo-white.png": "60543c0f56fec66d89d39803f970dba4",
"assets/assets/logos/facebook-icon.png": "be0423f843fc36586991cbf92c059422",
"assets/assets/logos/google-icon.png": "b95e5615716a3ae4b62f14a430bb1253",
"assets/assets/logos/light-long-logo.png": "fb68bf547ce2be089b625d9f4cc4864b",
"assets/assets/logos/logo.png": "6396522830c33b00837003d3a6dda31c",
"assets/FontManifest.json": "632736759cb6ddd32cecfc04cd167e65",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "65adfb64d747dfded8cef05e8f28b6bd",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b93248a553f9e8bc17f1065929d5934b",
"assets/packages/flutter_dropzone_web/assets/flutter_dropzone.js": "dddc5c70148f56609c3fb6b29929388e",
"assets/packages/iconsax/lib/assets/fonts/iconsax.ttf": "071d77779414a409552e0584dcbfd03d",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"flutter_bootstrap.js": "e0c6713681e0a781bcc27238a0c84f5d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "71c99eec527910b9249161dbce5052bd",
"/": "71c99eec527910b9249161dbce5052bd",
"main.dart.js": "ebb595e3b844f54f9963ab997ce854dc",
"manifest.json": "89d21016d4c42e96474f9151a57797f5",
"version.json": "a0abfd0ec7bbde2c1f98e1a8f3db2da1"};
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
