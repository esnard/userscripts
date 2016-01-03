// ==UserScript==
// @name        HTTPS
// @namespace   https://github.com/esnard/userscripts
// @version     1.0
// @description JeuxVideo.com: redirects HTTP requests to HTTPS.
// @author      Benoit Esnard
// @match       http://www.jeuxvideo.com/*
// @grant       none
// ==/UserScript==

(function () {
    var url = new URL(window.location);
    url.protocol = "https:";
    window.location = url;
})();
