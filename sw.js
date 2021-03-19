const urlsToCache = [
  "/images/icon-192x192.png",
  "/images/icon-512x512.png",
  "/index.html",
  "/offline.html",
];

self.addEventListener("install", function (event) {
  // Perform install steps
  event.waitUntil(
    caches.open("gwc").then(function (cache) {
      console.log("Opened cache");
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("fetch", function (event) {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      if (response) return response;

      // return the cached offline file if app is offline
      return fetch(event.request).catch((err) => {
        return caches.match("offline.html");
      });
    })
  );
});

self.addEventListener("activate", (event) => {});
