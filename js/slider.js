// 设定初始化的轮播图背景
let oSlider = document.getElementById("slider");
oSlider.style.background = "url(images/slides/slider-1.jpg) no-repeat";
var sliderIndex = 1;
// 初始化右侧thumbnail小图片
let oSliderThumb = document.getElementById("slider-thumbnail");
//给轮播图右侧thumbnail设置悬停高亮及移出取消
let oLis = oSliderThumb.getElementsByTagName("li");

for (let i = 0; i < oLis.length;i++) {
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
	sliderIndex>3?sliderIndex=1:sliderIndex++;
};

setInterval(sliderChange, 4000);
	

