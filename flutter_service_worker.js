'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "65fdbb084f4c54a1b720fe285750b9af",
"assets/assets/animations/spaceman.flr": "ccd5d72eeee45994f1c389fd2d671517",
"assets/assets/audio/bgm/bg_music.mp3": "52fd64096b54f2ca8983e707c3217ec0",
"assets/assets/audio/sfx/hit1.mp3": "4953187339bc1287aa124b05b57c017e",
"assets/assets/audio/sfx/hit2.mp3": "0210e3d3078d55452b23cc050731898c",
"assets/assets/audio/sfx/laugh.mp3": "8be6605851d6a569553e94f7fbf258d3",
"assets/assets/fonts/arial.ttf": "918b7612af1843d14fb8a7308f81dcf1",
"assets/assets/fonts/Montserrat-Regular.ttf": "a8a117360e71de94ae3b0b0f8d15b44d",
"assets/assets/images/background.jpg": "29ac2cf4ddabf7da9e46bc2fbc24b54e",
"assets/assets/images/bg/room.png": "a64b025be59ab03900671b4a665c6bee",
"assets/assets/images/covid19_essentials.png": "bb8cac0b8abbb460dafda06848cf76f2",
"assets/assets/images/covid19_financial.png": "30e191847f2ddf059aee621cd2ab48ea",
"assets/assets/images/covid19_hands.png": "4ee76f11d68f0e5cc5ad20ba5c4ddc08",
"assets/assets/images/covid19_heart.png": "6a88265a5ba7c67a3c8551b411bf3971",
"assets/assets/images/covid19_selfisolation.png": "d6257cc125feb1535c4e93a2a330ecc3",
"assets/assets/images/covid19_stayhome.png": "354a8d6744fe6edd2486f4de7fa1c81e",
"assets/assets/images/googlelogo.png": "80fa4bcab0351fdccb69c66fb55dcd00",
"assets/assets/images/logo.png": "8f9c4c6d898e9185a9fb136fde55cb4b",
"assets/assets/images/social_distance.jpg": "7b9e29f304ba33a1b9d7bf106f2ffb5b",
"assets/assets/images/ui/chat.png": "620a4ea320f6e28e4fe34811705c77af",
"assets/assets/images/ui/defeat_btn.png": "05e719d3a9bb0333dbeddf5fe0a95875",
"assets/assets/images/ui/game_name.png": "5120558452e2d76ca83ae730980cbf17",
"assets/assets/images/ui/help_btn.png": "aba230fd0ef9d116c8319c582436397c",
"assets/assets/images/ui/instruction_game.png": "56d8a0733b716ac281b1bc14b4404652",
"assets/assets/images/ui/no_sfx_sound.png": "f49a1088c8b98aa5d537f1a99855b164",
"assets/assets/images/ui/no_sound.png": "87ec572bfeee45ac8c94e9eabed98474",
"assets/assets/images/ui/play_btn.png": "99b37f3f9144c80278e4b31c9064ad05",
"assets/assets/images/ui/restart_btn.png": "ffb903c966432e0f7ef4da224317d82e",
"assets/assets/images/ui/sfx_sounds.png": "42088858464b9c5d4f38e714b96ccc89",
"assets/assets/images/ui/sound.png": "8174d34dba766e20d27dea757b16b497",
"assets/assets/images/ui/win_btn.png": "7354cbdf7f12403557464fb951bae220",
"assets/assets/images/virus/dragon_fly_down.png": "f48d6e94cf8121bbb583df5889fedc0e",
"assets/assets/images/virus/dragon_fly_up.png": "881966c0a97ab9c0fdc0a6df03aee043",
"assets/assets/images/virus/enemy.png": "9302f27d14e711e498dff8dc21f6d83d",
"assets/assets/images/virus/virus_fly_down.png": "8cc62a88c200da680f577d3e3008f12e",
"assets/assets/images/virus/virus_fly_up.png": "75b992af3ba290c01e2c4486b50eeb81",
"assets/FontManifest.json": "7e59749be31daf01ad54e5f93b794f47",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/NOTICES": "0b9df7b2a322c661fa048b6c9ce9737f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "831eb40a2d76095849ba4aecd4340f19",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "a126c025bab9a1b4d8ac5534af76a208",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "d80ca32233940ebadc5ae5372ccd67f9",
"cat.jpg": "85b7e2805a1ec5b52b3efb44327e5389",
"favicon.png": "a37e33588294a5b1393bb96c0ba48b0f",
"index.html": "5130a34ec5f1a9ac06b69edf75c1aa43",
"/": "5130a34ec5f1a9ac06b69edf75c1aa43",
"js/custom.js": "21e99197686edc6696ef848540e95c40",
"js/ml/iris/data.js": "e18e4dc5eed42d084f6a47ff426a1632",
"js/ml/ml.js": "3f2fe78db14f14fc150c71cef6833ff1",
"js/ml/mobilenet.js": "45ce6ab27b2f102ff2e67caa32cf8537",
"logo.png": "0b1de2f2b3dd59124c9df61484771028",
"main.dart.js": "638e36329a8d91c64876e091ae840197",
"version.json": "929a6538066429a61538b9af9948522d"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
  for (var resourceKey in Object.keys(RESOURCES)) {
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
