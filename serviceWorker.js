
const staticCache = 'dev-static-cache'
const assets = [
    '/',
    '/script.js',
    '/index.html',
    '/css/style.css',
    '/manifest.json',
    '/img/111__1_-removebg.png',
    '/fonts/Raleway/Raleway-VariableFont_wght.ttf',
    '/fonts/Montserrat/Montserrat-VariableFont_wght.ttf',
    '/img/profile.png'
]

self.addEventListener("install",async e =>{
    let cache = await caches.open(staticCache);
    await cache.addAll(assets)
})

self.addEventListener('activate', async e => {
    let cache = await caches.keys();
    await Promise.all(
        cache.filter(cache_name => cache_name != staticCache)
        .map(cache_data => caches.delete(cache_data))
    );
});

self.addEventListener('fetch', e => {
    e.respondWith(caches.match(e.request));
})