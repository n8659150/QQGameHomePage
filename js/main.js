"use strict";
window.onload = (function(){
// slider.js
// 设定初始化的轮播图背景
let oSlider = document.getElementById("slider");
oSlider.style.background = "url(images/slides/slider-1.jpg) no-repeat";
var sliderIndex = 1;
// 初始化右侧thumbnail小图片
let oSliderThumb = document.getElementById("slider-thumbnail");
//给轮播图右侧thumbnail设置悬停高亮及移出取消
let aSliderThumbItems = oSliderThumb.getElementsByTagName("li");

for (let i = 0; i
<aSliderThumbItems.length;i++) {
	let oDiv = aSliderThumbItems[i].getElementsByTagName("div")[0];
	oDiv.addEventListener("mouseover", function(){
		setActive(this);
	});
	oDiv.addEventListener("mouseout", function(){
		cancelActive(this);
	});
}

function setActive(element){
  element.getElementsByTagName("img")[0].setAttribute("class", "active");
  element.getElementsByClassName("title")[0].setAttribute("class","title active");
}

function cancelActive(element) {
	element.getElementsByTagName("img")[0].setAttribute("class","");
	element.getElementsByClassName("title")[0].setAttribute("class","title");
}

function sliderChange(){
	//重置所有高亮样式
	let aSliderThumbItems = oSliderThumb.getElementsByTagName("li");
	for (let j = 0; j < aSliderThumbItems.length; j++) {
		cancelActive(aSliderThumbItems[j].getElementsByTagName("div")[0]);
	}
	//根据当前轮播图背景设置高亮
	let oLi = oSliderThumb.getElementsByTagName("li")[sliderIndex-1];
	let oDiv = oLi.getElementsByTagName("div")[0];
	setActive(oDiv);
	oSlider.style.background = "url(images/slides/slider-"+ (sliderIndex) +".jpg) no-repeat";
	sliderIndex>
	3?sliderIndex=1:sliderIndex++;
};
setInterval(sliderChange, 4000);

// gameTabPicLoader.js

// 热门游戏
let oHotGames = document.getElementById("hot-games");
let aHotGameTabs = oHotGames.getElementsByClassName("game-tab");
for (let i = 0; i < aHotGameTabs.length;i++) {
	aHotGameTabs[i].style.background = "url(images/hot-game-pics/"+ (i) +".jpg) no-repeat";
}

//最新游戏
let oLatestGames = document.getElementById("latest-games");

let aLatestGameTabs = oLatestGames.getElementsByClassName("game-tab");
for (let i = 0; i < aLatestGameTabs.length;i++) {
	aLatestGameTabs[i].style.background = "url(images/latest-game-pics/"+ (i) +".jpg) no-repeat";
}
//rankingListData.js
let oRankingList = document.getElementById("ranking-list");
let aRankingItems = oRankingList.getElementsByClassName("ranking-content");
let oHotListTab = document.getElementById("hot-list-tab");
let oNewListTab = document.getElementById("new-list-tab");
function fetchRankingList(sourcename){
	let xmlhttp = new XMLHttpRequest();
	let sourceUrl = "js/"+sourcename+".json";
	xmlhttp.open("GET",sourceUrl,false);
	xmlhttp.send();
	return JSON.parse(xmlhttp.responseText);
}

let hotRankingList = fetchRankingList("hotRankingListData");
let newGameRankingList = fetchRankingList("newRankingListData");

function rankingListLoader(list){
	for(let i=0;i<aRankingItems.length;i++){
		for(let j=0;j<list.length;j++){
			let rankingItem = aRankingItems[j];
			let listData = list[j];
			rankingItem.getElementsByClassName("ranking-number")[0].innerHTML=listData["rank"];
			rankingItem.getElementsByClassName("ranking-name")[0].innerHTML=listData["name"];
			rankingItem.getElementsByClassName("ranking-count")[0].innerHTML=listData["count"];
		}
	}
}
oHotListTab.addEventListener("mouseover", function(){
		rankingListLoader(hotRankingList);
	});
oNewListTab.addEventListener("mouseover", function(){
		rankingListLoader(newGameRankingList);
	});
rankingListLoader(hotRankingList);
// appGameLoader.js
function fetchAppGames(sourcename){
	let httpReq = new XMLHttpRequest();
	let url = "js/"+sourcename+".json";
	httpReq.open("GET",url,false);
	httpReq.send();
	return JSON.parse(httpReq.responseText);
}
//用来加载appgame数据。
function appGameLoader(sourcename,appGames){
//sourcename所传入的参数对应fetchAppGames中的sourcename文件名，和本地json文件名相同。
let appGameData = fetchAppGames(sourcename);
// appGames所传入的参数和对应HTML区域所指定的id相同
let oCardApps = document.getElementById(appGames);
let aCardAppIcons = oCardApps.getElementsByClassName("app-icon");
let oCardGameCount = document.getElementById(appGames+"-count");
oCardGameCount.innerHTML = "("+appGameData.length+"款)";
	for (let i=0;i<aCardAppIcons.length;i++){
		for (let j=0;j<appGameData.length;j++){
			let cardAppIcon = aCardAppIcons[j];
			cardAppIcon.style.background = "url(images/app-game-icons/"+appGameData[j]["id"]+".png) no-repeat";
			cardAppIcon.innerHTML = appGameData[j]["name"];
			cardAppIcon.style.backgroundSize = "100%";
		}
	}
}
// 棋牌游戏
appGameLoader("appGameLoader","card-apps");
// 网页游戏
appGameLoader("appGameLoader","web-apps")

// server timetable
function fetchNewServerData(){
	let httpReq = new XMLHttpRequest();
	httpReq.open("GET","js/serverTimeTable.json",false);
	httpReq.send();
	return JSON.parse(httpReq.responseText); 
}
let aNewServerData = fetchNewServerData();
fetchNewServerData();
let oNewServerTable = document.getElementById("new-server-timetable");
let aNewServerContents = oNewServerTable.getElementsByClassName("new-server-content");
for (let i = 0; i < aNewServerContents.length; i++){
	for (let j = 0; j < aNewServerData.length;j++){
		// 防止数组越界，数据（aNewServerData）可能会多于屏幕上显示的数目（aNewServerData）
		if(aNewServerContents[j] == undefined) {
			return;
		}
		let serverGameIcon = aNewServerContents[j].getElementsByClassName("server-game-icon")[0];
		let serverGameName = aNewServerContents[j].getElementsByClassName("server-game-name")[0];
		serverGameIcon.style.background = "url(images/server-timetable-pics/"+(j)+".png) no-repeat";
		serverGameIcon.style.backgroundSize = "cover";
		serverGameName.innerHTML = aNewServerData[j]["name"];
		
	}
	
}

});