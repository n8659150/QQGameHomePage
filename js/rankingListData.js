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
window.onload = function(){
	rankingListLoader(hotRankingList);
}