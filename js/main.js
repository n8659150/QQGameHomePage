"use strict";
window.onload = (function(){
alert("ready");
// slider.js
// 设定初始化的轮播图背景
let oSlider = document.getElementById("slider");
oSlider.style.background = "url(images/slides/slider-1.jpg) no-repeat";
var sliderIndex = 1;
// 初始化右侧thumbnail小图片
let oSliderThumb = document.getElementById("slider-thumbnail");
//给轮播图右侧thumbnail设置悬停高亮及移出取消
let oLis = oSliderThumb.getElementsByTagName("li");

for (let i = 0; i
< oLis.length;i++) {
	let oDiv = oLis[i].getElementsByTagName("div")[0];
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
	let oLis = oSliderThumb.getElementsByTagName("li");
	for (let j = 0; j < oLis.length; j++) {
		cancelActive(oLis[j].getElementsByTagName("div")[0]);
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
let hotRankingList = [
	{rank:1,name:"欢乐斗地主",count:2263760},
	{rank:2,name:"夺宝斗地主",count:1129088},
	{rank:3,name:"蛇蛇争霸",count:848812},
	{rank:4,name:"欢乐麻将全集",count:624418},
	{rank:5,name:"犀利蛇",count:490240},
	{rank:6,name:"海底大作战",count:407488},
	{rank:7,name:"星球大乱斗",count:381616},
	{rank:8,name:"捕鱼达人3D",count:299232},
	{rank:9,name:"街篮高手",count:263808},
	{rank:10,name:"开心消消乐",count:248176},
	{rank:11,name:"梦幻练舞",count:245712},
	{rank:12,name:"王者荣耀(电脑版)",count:238800}
]
let newGameRankingList = [
	{rank:1,name:"欢乐斗地主",count:12263760},
	{rank:2,name:"夺宝斗地主",count:11129088},
	{rank:3,name:"蛇蛇争霸",count:1848812},
	{rank:4,name:"欢乐麻将全集",count:624418},
	{rank:5,name:"犀利蛇",count:490240},
	{rank:6,name:"海底大作战",count:407488},
	{rank:7,name:"星球大乱斗",count:381616},
	{rank:8,name:"捕鱼达人3D",count:299232},
	{rank:9,name:"街篮高手",count:263808},
	{rank:10,name:"开心消消乐",count:248176},
	{rank:11,name:"梦幻练舞",count:245712},
	{rank:12,name:"王者荣耀(电脑版)",count:238800}
]
function rankingListLoader(list){
	for(let i=0;i<aRankingItems.length;i++){
		for(let j=0;j<list.length;j++){
			aRankingItems[j].getElementsByClassName("ranking-number")[0].innerHTML=list[j]["rank"];
			aRankingItems[j].getElementsByClassName("ranking-name")[0].innerHTML=list[j]["name"];
			aRankingItems[j].getElementsByClassName("ranking-count")[0].innerHTML=list[j]["count"];
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
let appGameData = [
		{name:"斗地主",id:0},{name:"夺宝斗地主",id:1},{name:"欢乐斗地主",id:2},{name:"欢乐麻将",id:3},{name:"欢乐升级",id:4},
		{name:"火拼斗地主",id:5},{name:"英雄杀",id:6},{name:"明星三缺一",id:7},{name:"大众麻将",id:8},{name:"腾讯围棋",id:9},
		{name:"红五三打一",id:10}
	]

let oCardApps = document.getElementById("card-apps");
let aCardAppItems = document.getElementsByClassName("app-icon");

for (let i=0;i<aCardAppItems.length;i++){
	for (let j=0;j<appGameData.length;j++){
		aCardAppItems[j].style.background = "url(images/app-game-icons/"+appGameData[j]["id"]+".png) no-repeat";
		aCardAppItems[j].innerHTML = appGameData[j]["name"];
		aCardAppItems[j].style.backgroundSize = "100%";
	}
}

});