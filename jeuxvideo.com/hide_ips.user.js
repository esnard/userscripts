// ==UserScript==
// @name        Hide IP addresses
// @namespace   https://github.com/esnard/userscripts
// @version     1.0
// @description Hide sensitive information like IP addresses in JeuxVideo.com forums.
// @author      Benoit Esnard
// @match       *://www.jeuxvideo.com/forums/*
// @grant       none
// ==/UserScript==

(function () {
    var styleElement = document.createElement("style");
    document.head.appendChild(styleElement);
    styleElement.sheet.insertRule(".bloc-outils-modo:not(:hover) {color: transparent;}", 0);
})();
