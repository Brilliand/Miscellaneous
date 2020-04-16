// ==UserScript==
// @name         Delete Testing Grounds
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Removes the Testing Grounds subforum from Town of Salem Game Forums
// @author       Brilliand
// @match        https://www.blankmediagames.com/phpbb/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    document.querySelectorAll("a").forEach(function(a) {
        if(a.href.match(/view[a-z]+\.php\?f=50/)) {
            var elem = a.closest(".row") || a;
            elem.parentNode && elem.parentNode.removeChild(elem)
        }
    });
})();