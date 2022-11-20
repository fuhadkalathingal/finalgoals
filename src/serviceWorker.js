const staticFinalGoals = "final-goals-site-v1"
const assets = [
  "/",
  "/index.html",
  "style.css",
  "main.js",
  "css/bootstrap.min.css",
  "css/all.min.css",
  "css/simple-line-icons.css",
  "css/slick.css"
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticFinalGoals).then(cache => {
      cache.addAll(assets)
    })
  )
})

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request)
    })
  )
})