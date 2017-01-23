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