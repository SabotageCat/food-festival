const APP_PREFIX = 'FoodFest-';
const VERSION = 'version_01';
const CACHE_NAME = APP_PREFIX + VERSION;

self.addEventListener('install', function (e) {
    const FILES_TO_CACHE = [
        "./index.html",
        "./events.html",
        "./tickets.html",
        "./schedule.html",
        "./assets/css/style.css",
        "./assets/css/bootstrap.css",
        "./assets/css/tickets.css",
        "./dist/app.bundle.js",
        "./dist/events.bundle.js",
        "./dist/tickets.bundle.js",
        "./dist/schedule.bundle.js"
    ];

    e.waitUntil(
        caches.open(CACHE_NAME).then(function (cache) {
            console.log('installing cache: ' + CACHE_NAME);
            return cache.addAll(FILES_TO_CACHE);
        })
    );

    e.waitUntil(
        caches.keys().then(function (keylist) {
            let cacheKeepList = keylist.filter(function (key) {
                return key.indexOf(APP_PREFIX);
            })
        })
    );
});