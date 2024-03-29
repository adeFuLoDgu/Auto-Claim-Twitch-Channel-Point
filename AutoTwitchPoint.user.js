// ==UserScript==
// @name        Auto Claim Twitch Channel Point
// @namespace   https://github.com/adeFuLoDgu/Auto-Claim-Twitch-Channel-Point
// @version     0.6
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
	setInterval(() => {
		var bonusChests = document.getElementsByClassName('claimable-bonus__icon');
		if (bonusChests.length > 0) bonusChests[0].click();
	}, 1000);
})();
