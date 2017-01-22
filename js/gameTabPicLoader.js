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
