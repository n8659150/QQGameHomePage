"use strict";
$(document).ready(function(){
	$('#slider').unslider({
		nav:false,
		arrows:false,
		autoplay:true,
		delay:4000
	});
// slider.js
// 设定初始化的轮播图背景
// $("#slider").css({"background":"url(images/slides/slider-1.jpg) no-repeat"});
var sliderIndex = 1;
//给轮播图右侧thumbnail设置悬停高亮及移出取消
let aSliderThumbItems = $("#slider-thumbnail").find("li");
// let timer = setInterval(sliderChange, 4000);
for (let i = 0; i<aSliderThumbItems.length;i++) {

	let oDiv = $("#slider-thumbnail").find("li").eq(i).find("div:first");
	oDiv.mouseover(function(){
		$("#slider").css({"background":"url(images/slides/slider-"+ (i+1) +".jpg) no-repeat"});
		setActive(this);
	});
	oDiv.mouseout(function(){
		cancelActive(this);
	});
}

function setActive(element){
	$(element).find("img:first").addClass("active");
	$(element).find(".title:first").addClass("title active");
  // element.getElementsByTagName("img")[0].setAttribute("class", "active");
  // element.getElementsByClassName("title")[0].setAttribute("class","title active");
}

function cancelActive(element) {
	$(element).find("img:first").removeClass("active");
	$(element).find(".title:first").removeClass("active");
	// element.getElementsByTagName("img")[0].setAttribute("class","");
	// element.getElementsByClassName("title")[0].setAttribute("class","title");
}

function sliderChange(){
	console.log(sliderIndex)
	//重置所有高亮样式
	//let aSliderThumbItems = oSliderThumb.getElementsByTagName("li");
	let aSliderThumbItems = $("#slider-thumbnail").find("li");
	for (let j = 0; j < aSliderThumbItems.length; j++) {
		cancelActive(aSliderThumbItems.eq(j).find("div:first"));
	}
	//根据当前轮播图背景设置高亮
	let oLi = $("#slider-thumbnail").find("li").eq(sliderIndex);
	let oDiv = oLi.find("div:first");
	setActive(oDiv);
	//$("#slider").css({"background":"url(images/slides/slider-"+ (sliderIndex) +".jpg) no-repeat"});
	//oSlider.style.background = "url(images/slides/slider-"+ (sliderIndex) +".jpg) no-repeat";
	sliderIndex>
	2?sliderIndex=0:sliderIndex++;
};
	setInterval(sliderChange,4000)
// gameTabPicLoader.js

// 热门游戏
//let oHotGames = document.getElementById("hot-games");
//let aHotGameTabs = oHotGames.getElementsByClassName("game-tab");
let aHotGameTabs = $("#hot-games").find(".game-tab");
for (let i = 0; i < aHotGameTabs.length;i++) {
	aHotGameTabs.eq(i).css({"background":"url(images/hot-game-pics/"+ (i) +".jpg) no-repeat"});
}

//最新游戏
// let oLatestGames = document.getElementById("latest-games");

// let aLatestGameTabs = oLatestGames.getElementsByClassName("game-tab");
// for (let i = 0; i < aLatestGameTabs.length;i++) {
// 	aLatestGameTabs[i].style.background = "url(images/latest-game-pics/"+ (i) +".jpg) no-repeat";
// }
let aLatestGameTabs = $("#latest-games").find(".game-tab");
for (let i = 0; i < aLatestGameTabs.length;i++) {
	aLatestGameTabs.eq(i).css({"background":"url(images/latest-game-pics/"+ (i) +".jpg) no-repeat"});
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
	let ele = $("#ranking-list").find(".ranking-content");
	for (let i=0;i<list.length;i++){
		ele.find(".ranking-number").eq(i).text(list[i]["rank"]);
		ele.find(".ranking-name").eq(i).text(list[i]["name"]);
		ele.find(".ranking-count").eq(i).text(list[i]["count"]);
	}
}

$("#hot-list-tab").mouseover(function(){
		rankingListLoader(hotRankingList);
	});
$("#new-list-tab").mouseover(function(){
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
$(appGames+"-count").text("("+appGameData.length+"款)");
	for (let i=0;i<appGameData.length;i++){
		let cardAppIcon = $(appGames).find(".app-icon").eq(i); 
		cardAppIcon.css({"background":"url(images/app-game-icons/"+appGameData[i]["id"]+".png) no-repeat"});
		cardAppIcon.css({"background-size":"100%"});
		cardAppIcon.text(appGameData[i]["name"]);
	}
}
// 棋牌游戏
appGameLoader("appGameLoader","#card-apps");
// 网页游戏
appGameLoader("appGameLoader","#web-apps")

// server timetable
function fetchNewServerData(){
	let httpReq = new XMLHttpRequest();
	httpReq.open("GET","js/serverTimeTable.json",false);
	httpReq.send();
	return JSON.parse(httpReq.responseText); 
}
fetchNewServerData();
let aNewServerData = fetchNewServerData();
let aNewServerContents = $("#new-server-timetable").find(".new-server-content");
	for (let i = 0; i < aNewServerContents.length; i++){
		// 防止数组越界，数据（aNewServerData）可能会多于屏幕上显示的数目（aNewServerData）
		if(!(aNewServerContents.eq(i))){
			return;
		}
		let serverGameIcon = aNewServerContents.eq(i).find(".server-game-icon:first");
		let serverGameName = aNewServerContents.eq(i).find(".server-game-name:first");
		serverGameIcon.css({"background":"url(images/server-timetable-pics/"+(i)+".png) no-repeat"});
		serverGameIcon.css({"background-size":"100%"});
		serverGameName.text(aNewServerData[i]["name"]);
	}
});