/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.2.0/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "832efeb48bbee912a2e0efa866fc6814"
  },
  {
    "url": "assets/css/6.styles.45ac861a.css",
    "revision": "582f8a61b9cec8b5391ed5c3b441a062"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/0.e705988b.js",
    "revision": "004d65a152f74999b9e86e3812e3c51a"
  },
  {
    "url": "assets/js/1.207899a9.js",
    "revision": "acd5c08a40c0dc78623e3f8a46a05a2d"
  },
  {
    "url": "assets/js/2.fc61ad7d.js",
    "revision": "2d6223f8b5d0ab76b71103d3f1ae9011"
  },
  {
    "url": "assets/js/3.07729f55.js",
    "revision": "702d93681ab75ec24aa290cc491b27d0"
  },
  {
    "url": "assets/js/4.a53576a7.js",
    "revision": "f6735a97b90b0126f4fd7fc8f03610c9"
  },
  {
    "url": "assets/js/5.5daf82f2.js",
    "revision": "a9a2895f0826b9fc300ba8f91eab6e58"
  },
  {
    "url": "assets/js/app.e1853d7c.js",
    "revision": "2a574902d2ad2a8d37cf5b6be95fbd36"
  },
  {
    "url": "changelog.html",
    "revision": "75351653bc974f08df3ebdc3070bf300"
  },
  {
    "url": "cookbook/index.html",
    "revision": "9a84f30d4582c94222cc04b40dd67925"
  },
  {
    "url": "guide/index.html",
    "revision": "99a87d84eefe41d903eb5a4d75c606d2"
  },
  {
    "url": "index.html",
    "revision": "d038c1069726e0f1b3ba994ff05bbe0c"
  },
  {
    "url": "logo.png",
    "revision": "b8c50251399a8890d798d2d531ca4d3b"
  },
  {
    "url": "migrating.html",
    "revision": "1c9d6de9811f2144554d60c8fe3c5b39"
  },
  {
    "url": "options.html",
    "revision": "1c89fcd3c82909dcb454edb26ecc4d56"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
