/**
 * 用于屏幕自适应
 */
"use strict";
// 获取html标签
var documentElement = document.documentElement;

// 页面加载完执行一次
getSize();

function getSize() {
	/*// 获取屏幕的宽度
	var screenWidth = documentElement.clientWidth;

	if (screenWidth <= 320) { // 当屏幕宽度小于等于320时, 将font-size固定在25.6px
		screenWidth = 300;
	} else if (screenWidth >= 1024) { // 当屏幕宽度大于等于640时, 将font-size固定在51.2px
		screenWidth = 1024;
	}*/
	documentElement.style.fontSize = "50px";
}

window.onresize = function () {
	getSize();
};
