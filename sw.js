/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","dce4952a8f7c0425549df41b42b92d91"],["/about/index.html","e4ec89699658c5843c326de889ad14c1"],["/archives/2021/09/index.html","31f46d82bcedb33c23ea6e5586ed3019"],["/archives/2021/10/index.html","8179414460ab32ff3e64aa9216205ef5"],["/archives/2021/index.html","22557f69ed32e85371bdd3d251cf3947"],["/archives/2022/06/index.html","0632092444a5d2f6bd886966633fc598"],["/archives/2022/index.html","f794e6417ee3a641dc17640a2ebc0036"],["/archives/2023/03/index.html","5f07a021d7398d7fe1c86a23d17a6f07"],["/archives/2023/07/index.html","98fa693d95954674294befc68be04c1e"],["/archives/2023/08/index.html","b82ab68e05cace4b0887a1a151052b12"],["/archives/2023/09/index.html","bbac8b5a20037398944d6920a412f2ff"],["/archives/2023/10/index.html","56618664054e2f135e5958544fb4b48c"],["/archives/2023/12/index.html","b0d77ab1dec5a5092ea65a102c45d8b7"],["/archives/2023/index.html","013acef474cbd22db4c099478a8e31e5"],["/archives/2023/page/2/index.html","6e1a2992d7b1bc6610b25c11ca4d0016"],["/archives/2024/01/index.html","6721afdedcb5636cdf8c4467256b30b7"],["/archives/2024/02/index.html","1d84a90e82354e4a41bfcc50505b125a"],["/archives/2024/03/index.html","08a1858575f872b4bb9e9b357dc5278f"],["/archives/2024/index.html","14af185b2190db5fb4e8b3b9bed6a3fb"],["/archives/index.html","250a327ac40a31dc752047f5d6e15cae"],["/archives/page/2/index.html","e129191ed3bcd3d9abeecbfa4f7c95f4"],["/categories/Technical/Android/index.html","47c2294c968c4c74bcfa3d4bfe17eff4"],["/categories/Technical/Multiplatform/index.html","d7682697dfdd217af8ebec805c20ebc3"],["/categories/Technical/Tools/index.html","6881ac2dfa700f8c9a043d5e32df37bd"],["/categories/Technical/iOS/index.html","25ddac31fbeb969f3ec1dd88fee9e4cc"],["/categories/Technical/index.html","877c0da9a2555ae6a16f517c9d03ece9"],["/categories/Technical/page/2/index.html","84ef11efc0eb61dc96f045e5e41a419f"],["/categories/index.html","7a47f991c5606f055cb7b19efbb07c43"],["/categories/随记/index.html","01fa9329333bd60e45dbd69d99bdaa41"],["/css/main.css","930c17df880808af908f667fdacc659a"],["/css/noscript.css","2be0f545683395bf734bfdd37fb5f3e2"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","bfe261f101725ead9363904cfcd95968"],["/images/avatar.png","ebb32784e0113e9f1cd84dcc4bb39845"],["/images/codes/aidl_1.jpg","c4e74c5429926abb52e1a8aaaf58de1d"],["/images/codes/aidl_error.jpg","460640e02c21adff24fff4d3fa9a4f00"],["/images/codes/jvm_field.jpg","9275b5e36a79d84b1ac67843dcbf3499"],["/images/codes/jvm_field_1.jpg","179580d9e1cf3e89342374913986d0fc"],["/images/codes/launched_effect_1.jpg","1fad009384cbf5ebfd7886a01d47d865"],["/images/comment_bg.png","04208f25e34b8f29f072efbb2e212c86"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/flutter_cover.webp","3d9856b8b599ea91d194c2bcb4fa801c"],["/images/logo.svg","9278d16cf8d2e7473b4e646cbbc28075"],["/images/pic1.png","780172edd57c2947dcd8559ef8d8c272"],["/images/post/remember.gif","1fcfd40155a53cf9758a7bd94c9c94e5"],["/images/post/remember_log.jpg","8d2d14710f7cb188c25dad9ff01d19ed"],["/images/post/remember_log1.jpg","558ab76a845e801af0abbce388c601de"],["/images/post/top-langs.jpg","27da33d45c08604745beb45237164384"],["/images/reward/alipay.jpg","9b573d9f9945db754862371e4343a6b6"],["/images/reward/wechat.jpg","08ebace7982efd284ac07527e7b3fb09"],["/images/siteicon/android-chrome-144x144.png","591b081a225ec42d31d47f780264610c"],["/images/siteicon/android-chrome-192x192.png","2de3e90425ae9e0522a92199810a6dbd"],["/images/siteicon/android-chrome-256x256.png","170f0b49a2060788d767467eb8512979"],["/images/siteicon/android-chrome-36x36.png","83bab84c9e337e48edf9ba73fe03ffab"],["/images/siteicon/android-chrome-384x384.png","6e65e4d7014b6cfd4ab232c3980cb0c9"],["/images/siteicon/android-chrome-48x48.png","8709deaf63d224369b7397d0a5e5c8a1"],["/images/siteicon/android-chrome-512x512.png","9cb06f94294ef94db3ea4e6c5a0e6b56"],["/images/siteicon/android-chrome-72x72.png","1328b1c12237a7adce45b38f330e9417"],["/images/siteicon/android-chrome-96x96.png","678a9b7ad7fce86dec250eaf0822fac7"],["/images/siteicon/apple-touch-icon.png","071e652e29a181213451ad5fb283a2e4"],["/images/siteicon/browserconfig.xml","8f9e2e0c1e3f4a01a6621bebd2979532"],["/images/siteicon/favicon-16x16.png","de48385c211fd84381742f40895289a8"],["/images/siteicon/favicon-32x32.png","6ed16518affcdc095a92f521794b1351"],["/images/siteicon/mstile-150x150.png","4b31d11b14fef7d20f31aa02ba4f0e59"],["/images/siteicon/safari-pinned-tab.svg","a6c25a4b1f265cdeb6c76b8ddc816ec8"],["/images/tcp_3ways_handshake.png","aa37c04372614c3d052a3b885366d192"],["/index.html","ce94549966027885c4f910c252c75521"],["/js/comments.js","d6996a202a9ad8176a0e39343a974b26"],["/js/config.js","9c844f6ccdb39fdc03e2f53711e2b282"],["/js/motion.js","00b3296dedd0f692c06f6f6626da318b"],["/js/next-boot.js","c7f09dbb62506d5eee539c1a5ddc883c"],["/js/schemes/muse.js","2498e6836861160124cafdaae02c68d8"],["/js/third-party/addtoany.js","e5bf63f47c0191250fe6e6d0a2425c04"],["/js/third-party/analytics/baidu-analytics.js","59db45f5e16951a2a1f7b8eccfab736a"],["/js/third-party/analytics/matomo.js","41e11502744876fd591016942813ea25"],["/js/third-party/pace.js","4527c8f8b76bdf14e83f7e6ecb620ea1"],["/js/third-party/search/local-search.js","d2c28f3d0de820d6346ee159082e9d40"],["/js/third-party/tags/mermaid.js","c324fa39e18b47c330c8325bb14cb7da"],["/js/third-party/tags/wavedrom.js","0bddd6d5f1641c97cadb4d52e6ab8d28"],["/js/utils.js","c93a901b0ee8508624ed768b4422bc4e"],["/page/2/index.html","b036665a4994381b781e64e2c498392d"],["/page/3/index.html","7c4a79de5ffa8eb508f8f4e9a23814cc"],["/posts/2021/09/11/5c71264a/index.html","47006c162883de22cb4549b8ce6b59a8"],["/posts/2021/10/12/84a43c7b/index.html","babe113ea5740aa322d995baa7d5e54a"],["/posts/2022/06/08/ed292b98/index.html","334c887829b951eea63599ef3b3c7932"],["/posts/2023/03/20/ba1c720c/index.html","96624c91d88253686b914f610bd46a44"],["/posts/2023/07/04/c6b943f6/index.html","82cf879153e34b5c5031d3a6c27a83df"],["/posts/2023/07/06/c60ea2e3/index.html","68cd72f4ce3d09b133731fc6d6a147b7"],["/posts/2023/07/10/6ae1f469/index.html","74a23a47c8bb6b30016ad82cd42390a5"],["/posts/2023/08/13/bb96b1c7/index.html","63294ab2e67ab6570a10cf19a5590277"],["/posts/2023/08/21/92856721/index.html","4848f8cfa3f0ca7a86c6e70f758b30cb"],["/posts/2023/08/28/e4ef3026/index.html","3f134e97a6e8a5dac348f8c98e992a20"],["/posts/2023/09/25/b9b953e9/index.html","eaeef025ae9c5846968cf607120355a6"],["/posts/2023/09/27/ddd9439e/index.html","ccc2c486d9508a453be57bde1f54555e"],["/posts/2023/10/04/e5178a3c/index.html","cfec1d70c244dd6f527b59b58d213be2"],["/posts/2023/10/17/bcdb2252/index.html","55761c7aa385510ebcaa597c4359fcb4"],["/posts/2023/10/17/bcdb2252/interfaces_of.jpg","9b2e800c9b6c6573d304620d2e15df27"],["/posts/2023/10/17/bcdb2252/viewmodel-lifecycle.png","a16d8eb6c5388ad144fb59e3930274eb"],["/posts/2023/12/04/f68195/index.html","6a810d14e60f72a923c6f35059b31628"],["/posts/2023/12/29/9734dc48/app_warning_dialog.png","d1b3d8323489b9e4feb89bcb36f58f8b"],["/posts/2023/12/29/9734dc48/index.html","c5dc28d9d4cc77c0af19f92a69d051e6"],["/posts/2023/12/29/9734dc48/search_result.jpg","37b88d6ce4179d4c0959e303bd001fed"],["/posts/2023/12/31/c262e439/index.html","541920bd74c7887ec8b2796472f9f4d0"],["/posts/2024/01/06/a0983be/index.html","2da60c832cc040daa29889200447300e"],["/posts/2024/01/06/a0983be/magnifier.gif","8788dd94ba148676b2f9de000329a7d3"],["/posts/2024/01/18/36ef9a4a/index.html","7108973439e16c232eed875b083b3eb6"],["/posts/2024/02/12/53af0ebf/android-clean-architecture.png","843e85a8505f294f1363224ad2256b80"],["/posts/2024/02/12/53af0ebf/clean-architecture.webp","fe884b4350788fd1873be4f8975e4991"],["/posts/2024/02/12/53af0ebf/data-flow.png","0c509305d5a1fbd40fd3bc80360bc1b4"],["/posts/2024/02/12/53af0ebf/index.html","9738df11f0698e06aa60972b154d60b7"],["/posts/2024/02/12/53af0ebf/model-recommended.jpg","db4cf38d24b4b11e7721296bc4733908"],["/posts/2024/03/06/8c99ce9c/UDF_works_in_app_architecture.jpg","7647c1c59f6faf49527a0966beb20c0b"],["/posts/2024/03/06/8c99ce9c/cycle_of_events_and_data_in_UDF.jpg","a5f4b64926673573eb0c54d3c191fc08"],["/posts/2024/03/06/8c99ce9c/index.html","f124f15adc1bd355b6958f76c5775de9"],["/posts/2024/03/06/8c99ce9c/mvvm_architecture.jpg","69ee29d676ea84a1ca7e504d73db35fc"],["/privacy/index.html","807a527888c2c4c4d22a570f551782e6"],["/resume/assets/css/main.css","88715a15afc31b7375011048bf72acd1"],["/resume/assets/images/profile.png","9cb06f94294ef94db3ea4e6c5a0e6b56"],["/resume/assets/js/main.js","21952bd06a05f4b0344803347f67ae97"],["/resume/assets/js/min/main-min.js","b77cc1133baf6921970713474b921f38"],["/resume/assets/plugins/awesome/css/all.css","59e626fe99d31dfded1e674a4089e0c8"],["/resume/assets/plugins/awesome/css/all.min.css","8ef777107c4620d4ddd4f8c4bb14a36c"],["/resume/assets/plugins/awesome/webfonts/fa-brands-400.ttf","3c90ddcce4c5c666e642e5b6ae53ede6"],["/resume/assets/plugins/awesome/webfonts/fa-brands-400.woff2","5531dd3a7705ec68a6c5f5d02b25da6f"],["/resume/assets/plugins/awesome/webfonts/fa-regular-400.ttf","02acddafdebd72be23b03798c86f2fec"],["/resume/assets/plugins/awesome/webfonts/fa-regular-400.woff2","e42bcafcb7cc5002daa805140064bf40"],["/resume/assets/plugins/awesome/webfonts/fa-solid-900.ttf","a59a3077d72245429c95c29dfe119546"],["/resume/assets/plugins/awesome/webfonts/fa-solid-900.woff2","be4dccbe54eea47a0ad5d7bb60a3c17d"],["/resume/assets/plugins/awesome/webfonts/fa-v4compatibility.ttf","6334955791896af71300ae5c46e8fb08"],["/resume/assets/plugins/awesome/webfonts/fa-v4compatibility.woff2","eca6332a7e5060488f5fb896747fe50a"],["/resume/assets/plugins/bootstrap/css/bootstrap-theme.css","54e2c153d16842c0fb6904f3db40ddc6"],["/resume/assets/plugins/bootstrap/css/bootstrap-theme.min.css","46d96593303e4c8666f497bb7602c999"],["/resume/assets/plugins/bootstrap/css/bootstrap.css","5ba37ad9163643c32251366754f08b2a"],["/resume/assets/plugins/bootstrap/css/bootstrap.min.css","2f624089c65f12185e79925bc5a7fc42"],["/resume/assets/plugins/bootstrap/fonts/glyphicons-halflings-regular.eot","f4769f9bdb7466be65088239c12046d1"],["/resume/assets/plugins/bootstrap/fonts/glyphicons-halflings-regular.svg","89889688147bd7575d6327160d64e760"],["/resume/assets/plugins/bootstrap/fonts/glyphicons-halflings-regular.ttf","e18bbf611f2a2e43afc071aa2f4e1512"],["/resume/assets/plugins/bootstrap/fonts/glyphicons-halflings-regular.woff","fa2772327f55d8198301fdb8bcfc8158"],["/resume/assets/plugins/bootstrap/fonts/glyphicons-halflings-regular.woff2","448c34a56d699c29117adc64c43affeb"],["/resume/assets/plugins/bootstrap/js/bootstrap.js","685178d751f2609bdde3d36ab8d3b83c"],["/resume/assets/plugins/bootstrap/js/bootstrap.min.js","f63dfbdcc649f13af4791a90e51f7907"],["/resume/assets/plugins/bootstrap/js/npm.js","ccb7f3909e30b1eb8f65a24393c6e12b"],["/resume/assets/plugins/jquery/jquery-3.6.0.min.js","8fb8fee4fcc3cc86ff6c724154c49c42"],["/resume/print/index.html","a71d1eec268851ccda0d69e70b5bf738"],["/resume/zh_cn/index.html","a6f098dd23571d23bdb5ef6c82c6e907"],["/search.xml","252dad5e5050dc2b4e06a753bc460ef7"],["/sw-register.js","b582510d046e49746fa5ca897a15f232"],["/tags/AIDL/index.html","3ce00fd426439f977f527bbcd21510c4"],["/tags/Android/index.html","0bd76b30fb8c28cf39b13d89593cb731"],["/tags/Android14/index.html","9b56bf8cca55f96704e78f5bb96d21a6"],["/tags/Binder/index.html","75f8bc5e2696ddaacdbd13915960c4ff"],["/tags/Flutter/index.html","0ae0683869993ada37879c9a2b8db41f"],["/tags/Github/index.html","1c01c0d8acff25030bd24b8578200a7e"],["/tags/Gradle-Plugin/index.html","cd92347db0b20172e8ce5fa3f6501222"],["/tags/Gradle/index.html","f77470e27cc64af952dd5254f04d1ab0"],["/tags/HTTP/index.html","8d157a4c3ff152afbf8daa14397e7f60"],["/tags/Handler/index.html","ee0276bb20f0ff501825515dbbd7b75a"],["/tags/Interview/index.html","e9184ee2841830fc4d186429a09b84a6"],["/tags/Jetpack-Compose/index.html","9eb6f4f0b4b8dfdbe5d9a3e3a17835d9"],["/tags/Kotlin-Coroutine/index.html","7220e99fa2046a33a39610b683809f62"],["/tags/Kotlin-Native/index.html","a70276a383a3c057332413bcbbd553aa"],["/tags/Kotlin-Serialization/index.html","65535f715c1dffc59c62e3ed34897fbd"],["/tags/Kotlin/index.html","e16013923bacab6b2da44d3b6bef158d"],["/tags/Ktor/index.html","d341b1a91cf9cd5b5a6ae35c3334b9fd"],["/tags/MVVM/index.html","5d5e3696015fdadf37dda5a47c27d82e"],["/tags/Multiplatform/index.html","a0411fee917d65fd623c24a0dbe9e5d7"],["/tags/Performance/index.html","912553dc5939fd497ca028736b7acfc2"],["/tags/SwiftUI/index.html","26b57f89bbc5ec186cca7b3a8b08bd3d"],["/tags/TCP-IP/index.html","7d4b0773968fb91cce40ad77c5cfb76a"],["/tags/ViewModel/index.html","ade05db0dd9d3ea509ae5435319ed20f"],["/tags/index.html","1d95b3cdcc3f66252206720a6a577050"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
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



// Runtime cache 配置转换后的 toolbox 代码.

toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"pic.imgdb.cn"});
toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"unpkg.com"});
toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"cdn.jsdelivr.net"});





/* eslint-enable */