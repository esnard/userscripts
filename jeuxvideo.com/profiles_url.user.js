// ==UserScript==
// @name        Profiles URLs
// @namespace   https://github.com/esnard/userscripts
// @version     1.0
// @description Allows capitalized letters in profiles URLs.
// @author      Benoit Esnard
// @match       *://www.jeuxvideo.com/profil/*
// @grant       none
// @run-at      document-start
// ==/UserScript==

(function () {
    var pathname = window.location.pathname.toLowerCase();
    if (window.location.pathname !== pathname) {
        window.location.pathname = pathname;
    }
})();
