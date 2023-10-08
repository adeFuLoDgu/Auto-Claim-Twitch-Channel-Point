// ==UserScript==
// @name        Auto Claim Twitch Channel Point
// @namespace   https://github.com/adeFuLoDgu/Auto-Claim-Twitch-Channel-Point
// @version     0.4
// @description Automatically claims the randomly appearing bonus chest on any open twitch stream.
// @author      adeFuLoDgu
// @match     	*://*.twitch.tv/*
// @updateURL   https://github.com/adeFuLoDgu/Auto-Claim-Twitch-Channel-Point/raw/main/AutoTwitchPoint.user.js
// @downloadURL https://github.com/adeFuLoDgu/Auto-Claim-Twitch-Channel-Point/raw/main/AutoTwitchPoint.user.js
// @run-at      document-end
// @grant       none
// ==/UserScript==

(function() {
    'use strict';
    function waitForElm(selector) {
        return new Promise(resolve => {
            if (document.querySelector(selector)) {
                return resolve(document.querySelector(selector));
            }

            const observer = new MutationObserver(mutations => {
                if (document.querySelector(selector)) {
                    observer.disconnect();
                    resolve(document.querySelector(selector));
                }
            });

            observer.observe(document.body, {
                childList: true,
                subtree: true
            });
        });
    }

    waitForElm('.claimable-bonus__icon').then(function(elm) {
        if (elm !== null) {
            elm.click();
        }
    });
})();
