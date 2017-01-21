// 设定初始化的轮播图背景
let oSlider = document.getElementById("slider");
oSlider.style.background = "url(images/slider-1.jpg) no-repeat";
var sliderIndex = 1;
// 初始化右侧thumbnail小图片
let oSliderThumb = document.getElementById("slider-thumbnail");


function setActive(element){
  element.getElementsByTagName("img")[0].className = "active";
  element.getElementsByClassName("title")[0].className = "title active";
}

function cancelActive(element) {
	element.getElementsByTagName("img")[0].className = "";
	element.getElementsByClassName("title")[0].className = "title";
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
	oSlider.style.background = "url(images/slider-"+ (sliderIndex) +".jpg) no-repeat";
	sliderIndex>3?sliderIndex=1:sliderIndex++;
};
setInterval(sliderChange, 2000);	

