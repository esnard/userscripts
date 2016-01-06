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
    var current_url = window.decodeURI(window.location.pathname);
    var expected_url = current_url.toLowerCase();

    if (current_url !== expected_url) {
        window.location.pathname = expected_url;
    }
})();
