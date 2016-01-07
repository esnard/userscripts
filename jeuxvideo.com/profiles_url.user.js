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
    var current_pathname = window.decodeURI(window.location.pathname);
    var expected_pathname = current_pathname.toLowerCase();

    if (current_pathname !== expected_pathname) {
        window.location.pathname = expected_pathname;
    }
})();
