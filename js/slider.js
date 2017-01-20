function setActive(element){
  element.getElementsByTagName("img")[0].className = "active";
  element.getElementsByClassName("title")[0].className = "title active";
}

function cancelActive(element) {
	element.getElementsByTagName("img")[0].className = "";
	element.getElementsByClassName("title")[0].className = "title";
}