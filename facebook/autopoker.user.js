// ==UserScript==
// @name        Facebook AutoPoker
// @namespace   https://github.com/esnard/userscripts
// @version     1.0
// @description Automatically pokes back.
// @author      Benoit Esnard
// @match       https://www.facebook.com/pokes/*
// @grant       none
// ==/UserScript==

(function () {
    var getQueryStringParams = function (url) {
        if (typeof url !== "string") {
            url = url.toString();
        }

        var params = {};
        var queryStringOffset = url.toString().indexOf("?");

        if (queryStringOffset < 0) {
            return params;
        }

        var queryString = url.substr(queryStringOffset + 1);

        queryString.split("&").forEach(function (part) {
            var separatorOffset = part.indexOf("=");

            if (separatorOffset < 0) {
                return;
            }

            var paramName  = part.substr(0, separatorOffset);
            var paramValue = part.substr(separatorOffset + 1);

            params[paramName] = paramValue;
        });

        return params;
    };

    var target   = document.getElementById("contentArea");
    var options  = {childList: true, subtree: true};
    var observer = new MutationObserver(function (mutations) {
        mutations.forEach(function (mutation) {
            [].forEach.call(mutation.addedNodes, function (node) {
                if (!(node instanceof HTMLElement)) {
                    return;
                }

                [].forEach.call(node.getElementsByTagName("a"), function (link) {
                    var ajaxify = link.getAttribute("ajaxify");

                    if (!ajaxify) {
                        return;
                    }

                    var params = getQueryStringParams(ajaxify);

                    if (params.is_hide === "0" && params.poke_target) {
                        link.click();
                    }
                });
            });
        });
    });

    observer.observe(target, options);
})();
