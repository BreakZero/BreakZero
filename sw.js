/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","8717bd2ca651779c3d18125fee53e8d5"],["/about/index.html","4be454b7c905b9cb42b420daeab4f819"],["/archives/2021/09/index.html","09746a31a4fd169413457188f7c2cec1"],["/archives/2021/10/index.html","dc1fbbcd902643d9afd7545aaf84e7d6"],["/archives/2021/index.html","61e775288eec34e460a70a5b3bdb819f"],["/archives/2022/06/index.html","6b071b113b1cedc6dfc31248858a2e25"],["/archives/2022/index.html","a22df75b3c3699c4f15df011a51e1383"],["/archives/2023/03/index.html","54716ea6b92a2164e79b297edfde12bc"],["/archives/2023/07/index.html","3d1e84a467e9dcdd1b51b9e745fbe115"],["/archives/2023/08/index.html","337712644fd3626b9d220de72241f43f"],["/archives/2023/09/index.html","9d6bc240eab111e419ac00f76c757a6e"],["/archives/2023/10/index.html","0469c4d9ed2cf5daaa52f1ba3d66e88d"],["/archives/2023/12/index.html","8bbda2a37cccd1a307a8d187dcd11db8"],["/archives/2023/index.html","87c3831755b5fcd455e04f061997508b"],["/archives/2023/page/2/index.html","e6716e12bb67560a6df95553221bdc78"],["/archives/2024/01/index.html","cb60ae296aab0ca335e111acb0839351"],["/archives/2024/02/index.html","96c509b0a52ea64f7b6b581d4b385db9"],["/archives/2024/03/index.html","2df77d12ce7dcfaeef61630c46e3f312"],["/archives/2024/09/index.html","b97ee6fae405986baa5425fd6fc73909"],["/archives/2024/index.html","457893789e9932cba0a4e562057773e9"],["/archives/index.html","17fa677f7c4e750b1f1e85b6fd55a8b6"],["/archives/page/2/index.html","356d55d8ee2004eec540c0d8f069aa76"],["/categories/Technical/Android/index.html","430ccdb131af5cb62c7fd148a69834d5"],["/categories/Technical/Multiplatform/index.html","c345e7c8932d64d4c526db3c351b8efa"],["/categories/Technical/Tools/index.html","b198c5cb8df7cd0b890143aed362a3f9"],["/categories/Technical/iOS/index.html","9cc00ce3246eb5af1d820688ee4a99c1"],["/categories/Technical/index.html","dfb95f5da639adbc927957375874cc7a"],["/categories/Technical/page/2/index.html","b125bff95a4030196b55a156234dee39"],["/categories/index.html","a95306ec05d1b3285753a63bd3336453"],["/categories/随记/index.html","efb63f05d6d24f6324c61bdb0e52f4a3"],["/css/main.css","4994e85cd8bc38331b5f30c1c239d5f8"],["/css/noscript.css","2be0f545683395bf734bfdd37fb5f3e2"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","bfe261f101725ead9363904cfcd95968"],["/images/avatar.png","ebb32784e0113e9f1cd84dcc4bb39845"],["/images/codes/aidl_1.jpg","c4e74c5429926abb52e1a8aaaf58de1d"],["/images/codes/aidl_error.jpg","460640e02c21adff24fff4d3fa9a4f00"],["/images/codes/jvm_field.jpg","9275b5e36a79d84b1ac67843dcbf3499"],["/images/codes/jvm_field_1.jpg","179580d9e1cf3e89342374913986d0fc"],["/images/codes/launched_effect_1.jpg","1fad009384cbf5ebfd7886a01d47d865"],["/images/comment_bg.png","04208f25e34b8f29f072efbb2e212c86"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/flutter_cover.webp","3d9856b8b599ea91d194c2bcb4fa801c"],["/images/logo.svg","9278d16cf8d2e7473b4e646cbbc28075"],["/images/pic1.png","780172edd57c2947dcd8559ef8d8c272"],["/images/post/remember.gif","1fcfd40155a53cf9758a7bd94c9c94e5"],["/images/post/remember_log.jpg","8d2d14710f7cb188c25dad9ff01d19ed"],["/images/post/remember_log1.jpg","558ab76a845e801af0abbce388c601de"],["/images/post/top-langs.jpg","27da33d45c08604745beb45237164384"],["/images/reward/alipay.jpg","9b573d9f9945db754862371e4343a6b6"],["/images/reward/wechat.jpg","08ebace7982efd284ac07527e7b3fb09"],["/images/siteicon/android-chrome-144x144.png","591b081a225ec42d31d47f780264610c"],["/images/siteicon/android-chrome-192x192.png","2de3e90425ae9e0522a92199810a6dbd"],["/images/siteicon/android-chrome-256x256.png","170f0b49a2060788d767467eb8512979"],["/images/siteicon/android-chrome-36x36.png","83bab84c9e337e48edf9ba73fe03ffab"],["/images/siteicon/android-chrome-384x384.png","6e65e4d7014b6cfd4ab232c3980cb0c9"],["/images/siteicon/android-chrome-48x48.png","8709deaf63d224369b7397d0a5e5c8a1"],["/images/siteicon/android-chrome-512x512.png","9cb06f94294ef94db3ea4e6c5a0e6b56"],["/images/siteicon/android-chrome-72x72.png","1328b1c12237a7adce45b38f330e9417"],["/images/siteicon/android-chrome-96x96.png","678a9b7ad7fce86dec250eaf0822fac7"],["/images/siteicon/apple-touch-icon.png","071e652e29a181213451ad5fb283a2e4"],["/images/siteicon/browserconfig.xml","8f9e2e0c1e3f4a01a6621bebd2979532"],["/images/siteicon/favicon-16x16.png","de48385c211fd84381742f40895289a8"],["/images/siteicon/favicon-32x32.png","6ed16518affcdc095a92f521794b1351"],["/images/siteicon/mstile-150x150.png","4b31d11b14fef7d20f31aa02ba4f0e59"],["/images/siteicon/safari-pinned-tab.svg","a6c25a4b1f265cdeb6c76b8ddc816ec8"],["/images/tcp_3ways_handshake.png","aa37c04372614c3d052a3b885366d192"],["/index.html","321907fada6210fff5fe34d775227baa"],["/js/comments.js","d6996a202a9ad8176a0e39343a974b26"],["/js/config.js","9c844f6ccdb39fdc03e2f53711e2b282"],["/js/motion.js","00b3296dedd0f692c06f6f6626da318b"],["/js/next-boot.js","c7f09dbb62506d5eee539c1a5ddc883c"],["/js/schemes/muse.js","2498e6836861160124cafdaae02c68d8"],["/js/third-party/addtoany.js","e5bf63f47c0191250fe6e6d0a2425c04"],["/js/third-party/analytics/baidu-analytics.js","59db45f5e16951a2a1f7b8eccfab736a"],["/js/third-party/analytics/matomo.js","41e11502744876fd591016942813ea25"],["/js/third-party/pace.js","4527c8f8b76bdf14e83f7e6ecb620ea1"],["/js/third-party/search/local-search.js","d2c28f3d0de820d6346ee159082e9d40"],["/js/third-party/tags/mermaid.js","c324fa39e18b47c330c8325bb14cb7da"],["/js/third-party/tags/wavedrom.js","0bddd6d5f1641c97cadb4d52e6ab8d28"],["/js/utils.js","c93a901b0ee8508624ed768b4422bc4e"],["/page/2/index.html","43129440d59db4566b26781c064efa43"],["/page/3/index.html","d3fe90896904d15c0bf008afe99e6172"],["/posts/2021/09/11/5c71264a/index.html","39331396518a04d8fb1c88bb2043dbd4"],["/posts/2021/10/12/84a43c7b/index.html","f761b7c9dd3ea10cfc9e04650f2be231"],["/posts/2022/06/08/ed292b98/index.html","d831f9daea99058c351c736e309a75f4"],["/posts/2023/03/20/ba1c720c/index.html","4cdc509dd7f15209577fab91536ff7e2"],["/posts/2023/07/04/c6b943f6/index.html","086a5086a6d281fdf1cac8ffd0ab6992"],["/posts/2023/07/06/c60ea2e3/index.html","aa37f391165585ae74cc890787d6590c"],["/posts/2023/07/10/6ae1f469/index.html","9c9f6375fe5e15e0c4d7eb92ebfbfa3c"],["/posts/2023/08/13/bb96b1c7/index.html","53348f476954b935ed26ef74d307aeed"],["/posts/2023/08/21/92856721/index.html","507e52f27c9244a7730d3c316735b159"],["/posts/2023/08/28/e4ef3026/index.html","287b0056abbc2a127f8282686be8f77f"],["/posts/2023/09/25/b9b953e9/index.html","9a7110a0812931bdd5133210150f9cec"],["/posts/2023/09/27/ddd9439e/index.html","93b64dc9c49cb2b4e667f5b918e30244"],["/posts/2023/10/04/e5178a3c/index.html","a30c64510f2b597a6c086c7dd2eafc17"],["/posts/2023/10/17/bcdb2252/index.html","5789f5e8f8aa90d203f7ebc8a28fac99"],["/posts/2023/10/17/bcdb2252/interfaces_of.jpg","9b2e800c9b6c6573d304620d2e15df27"],["/posts/2023/10/17/bcdb2252/viewmodel-lifecycle.png","a16d8eb6c5388ad144fb59e3930274eb"],["/posts/2023/12/04/f68195/index.html","b6d6fdf878d5d019e294471f48ab8dd4"],["/posts/2023/12/29/9734dc48/app_warning_dialog.png","d1b3d8323489b9e4feb89bcb36f58f8b"],["/posts/2023/12/29/9734dc48/index.html","141cb65081179bcc8824f7305687b192"],["/posts/2023/12/29/9734dc48/search_result.jpg","37b88d6ce4179d4c0959e303bd001fed"],["/posts/2023/12/31/c262e439/index.html","efc96b95f198ba71eedbf8789ddd0fa6"],["/posts/2024/01/06/a0983be/index.html","214bd72e40878d3a01ca964fdf995b4b"],["/posts/2024/01/06/a0983be/magnifier.gif","8788dd94ba148676b2f9de000329a7d3"],["/posts/2024/01/18/36ef9a4a/index.html","f4db447b1d6608f218f1b94061670ba7"],["/posts/2024/02/12/53af0ebf/android-clean-architecture.png","843e85a8505f294f1363224ad2256b80"],["/posts/2024/02/12/53af0ebf/clean-architecture.webp","fe884b4350788fd1873be4f8975e4991"],["/posts/2024/02/12/53af0ebf/data-flow.png","0c509305d5a1fbd40fd3bc80360bc1b4"],["/posts/2024/02/12/53af0ebf/index.html","c7339a00cc0245a91666135585d3c260"],["/posts/2024/02/12/53af0ebf/model-recommended.jpg","db4cf38d24b4b11e7721296bc4733908"],["/posts/2024/03/06/8c99ce9c/UDF_works_in_app_architecture.jpg","7647c1c59f6faf49527a0966beb20c0b"],["/posts/2024/03/06/8c99ce9c/cycle_of_events_and_data_in_UDF.jpg","a5f4b64926673573eb0c54d3c191fc08"],["/posts/2024/03/06/8c99ce9c/index.html","ac6f24e06ac536d4e1ef3f150e88d62a"],["/posts/2024/03/06/8c99ce9c/mvvm_architecture.jpg","69ee29d676ea84a1ca7e504d73db35fc"],["/posts/2024/09/26/3de1644d/index.html","2626b65e24ff67a3e5e5c73636825282"],["/privacy/index.html","807a527888c2c4c4d22a570f551782e6"],["/resume/assets/css/main.css","776482a962d6bc138ecfb80260d96143"],["/resume/assets/images/profile.png","9cb06f94294ef94db3ea4e6c5a0e6b56"],["/resume/assets/plugins/awesome/css/all.css","59e626fe99d31dfded1e674a4089e0c8"],["/resume/assets/plugins/awesome/css/all.min.css","8ef777107c4620d4ddd4f8c4bb14a36c"],["/resume/assets/plugins/awesome/webfonts/fa-brands-400.ttf","3c90ddcce4c5c666e642e5b6ae53ede6"],["/resume/assets/plugins/awesome/webfonts/fa-brands-400.woff2","5531dd3a7705ec68a6c5f5d02b25da6f"],["/resume/assets/plugins/awesome/webfonts/fa-regular-400.ttf","02acddafdebd72be23b03798c86f2fec"],["/resume/assets/plugins/awesome/webfonts/fa-regular-400.woff2","e42bcafcb7cc5002daa805140064bf40"],["/resume/assets/plugins/awesome/webfonts/fa-solid-900.ttf","a59a3077d72245429c95c29dfe119546"],["/resume/assets/plugins/awesome/webfonts/fa-solid-900.woff2","be4dccbe54eea47a0ad5d7bb60a3c17d"],["/resume/assets/plugins/awesome/webfonts/fa-v4compatibility.ttf","6334955791896af71300ae5c46e8fb08"],["/resume/assets/plugins/awesome/webfonts/fa-v4compatibility.woff2","eca6332a7e5060488f5fb896747fe50a"],["/resume/assets/plugins/bootstrap/css/bootstrap-theme.css","54e2c153d16842c0fb6904f3db40ddc6"],["/resume/assets/plugins/bootstrap/css/bootstrap-theme.min.css","46d96593303e4c8666f497bb7602c999"],["/resume/assets/plugins/bootstrap/css/bootstrap.css","5ba37ad9163643c32251366754f08b2a"],["/resume/assets/plugins/bootstrap/css/bootstrap.min.css","2f624089c65f12185e79925bc5a7fc42"],["/resume/assets/plugins/bootstrap/fonts/glyphicons-halflings-regular.eot","f4769f9bdb7466be65088239c12046d1"],["/resume/assets/plugins/bootstrap/fonts/glyphicons-halflings-regular.svg","89889688147bd7575d6327160d64e760"],["/resume/assets/plugins/bootstrap/fonts/glyphicons-halflings-regular.ttf","e18bbf611f2a2e43afc071aa2f4e1512"],["/resume/assets/plugins/bootstrap/fonts/glyphicons-halflings-regular.woff","fa2772327f55d8198301fdb8bcfc8158"],["/resume/assets/plugins/bootstrap/fonts/glyphicons-halflings-regular.woff2","448c34a56d699c29117adc64c43affeb"],["/resume/assets/plugins/bootstrap/js/bootstrap.js","685178d751f2609bdde3d36ab8d3b83c"],["/resume/assets/plugins/bootstrap/js/npm.js","ccb7f3909e30b1eb8f65a24393c6e12b"],["/resume/print/index.html","e84ca3ce45cb28490e9f608235162100"],["/resume/zh_cn/index.html","0fb3797a3f1e84e5e64fcf835d43b04d"],["/search.xml","9880e43b0e45b71e2ecc52b29280ab8c"],["/sw-register.js","306e56565dba37908dbfe83416ddcf1b"],["/tags/AIDL/index.html","2896f6316ebaf7182e36e4572fd3f32f"],["/tags/Android/index.html","8042d4b90a05aed1cb2ec1465c3023ba"],["/tags/Android14/index.html","32e87b71e56041657905abac6667b8ca"],["/tags/Binder/index.html","9311693ba28c7f1f904fc45753f9f188"],["/tags/Flutter/index.html","1da29eb6b9956b566f341a00c7b5598c"],["/tags/Github/index.html","e51674b8cc4559adf4fde3ad43e7cc97"],["/tags/Gradle-Plugin/index.html","511742f2dabf4e0c4e4432fe22f86e0d"],["/tags/Gradle/index.html","6cd64ab8bef26fd6a353ccf5e3e523e7"],["/tags/HTTP/index.html","3f1b5d4afbf630f80159a5d9b1cdc56f"],["/tags/Handler/index.html","b20a369cee88d49967e85e92a85efee5"],["/tags/Interview/index.html","79117792afc82d2612db911c62a7634a"],["/tags/Jetpack-Compose/index.html","ff6cad9bb1481ed0be4443349363744e"],["/tags/Kotlin-Coroutine/index.html","7bb068510cd928d84f54e0e1ba7227c6"],["/tags/Kotlin-Native/index.html","c93f55627cd6ae6f9fbea15d28c2d199"],["/tags/Kotlin-Serialization/index.html","1ba73053523231b9f6207551cc11d31f"],["/tags/Kotlin/index.html","5154e5b2fc46fa4205b55901ff7d9789"],["/tags/Ktor/index.html","4c9102643b1a8dfa8de54cf16b1270b0"],["/tags/MVVM/index.html","7ed07d9277ce667844cd56fc0714ee46"],["/tags/Multiplatform/index.html","46ca982e00597c3bb23dd41da215d63e"],["/tags/Performance/index.html","da4ef1c09cc825ed7a3be87915d881ea"],["/tags/SwiftUI/index.html","feef28a298c383c8e7f942e6b46d8e9e"],["/tags/TCP-IP/index.html","d5fdf28fc9ed28322fd5908291989745"],["/tags/ViewModel/index.html","92463c48ddf162e8a2235848c633e32e"],["/tags/index.html","f360264c8edf500abe042cf7c10478ee"]];
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
