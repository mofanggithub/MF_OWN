var btnside = document.getElementById("btnside"),
	sidebar = document.getElementById("sidebar"),
	closeside = document.getElementById("closeside"),
	sr = document.getElementById("sidebarright");
	cr = document.getElementById("closesideright"),
	btnr = document.getElementById("btnsideright"),
	maxh = document.documentElement.clientHeight,
	srliArr = sr.getElementsByTagName("li");


sidebar.style.overflowX = "hidden";
sidebar.style.maxHeight = maxh + "px";
sidebar.style.minHeight = "250px";

sr.style.overflowX = "hidden";
sr.style.maxHeight = maxh + "px";
sr.style.minHeight = "250px";

btnside.onclick = function(){
	var speed = 10,
		timer=0;
	sidebar.style.top = leader + "px";

	if(sidebar.offsetLeft <= -500){
		timer = setInterval(function(){
			if(sidebar.offsetLeft >= 0){
				clearInterval(timer);
			}else{
				sidebar.style.left = sidebar.offsetLeft + speed + "px";
			}
		},15)
	}
}

btnr.onclick = function(){
	var speed = 10,
		timer=0;
	sr.style.top = leader + "px";
	if(sr.offsetLeft <= -500){
		timer = setInterval(function(){
			if(sr.offsetLeft >= 0){
				clearInterval(timer);
			}else{
				sr.style.left = sr.offsetLeft + speed + "px";
			}
		},15)
	}
}

closeside.onclick = function(){
	var speed = 10,
		timer = 0;

	if(sidebar.offsetLeft>=0){
		timer = setInterval(function(){
			if(sidebar.offsetLeft <= -500){
				clearInterval(timer);
			}else{
				sidebar.style.left = sidebar.offsetLeft - speed +"px"
			}
		},15)
	}
}


cr.onclick = function(){
	var speed = 10,
		timer = 0;

	if(sr.offsetLeft>=0){
		timer = setInterval(function(){
			if(sr.offsetLeft <= -500){
				clearInterval(timer);
			}else{
				sr.style.left = sr.offsetLeft - speed +"px"
			}
		},15)
	}
}


srliArr[0].onmouseenter = function(){
	srliArr[5].innerHTML = "Contact: 18084430028";
}
srliArr[1].onmouseenter = function(){
	srliArr[5].innerHTML = "Contact: mofangemail@163.com";
}
srliArr[2].onmouseenter = function(){
	srliArr[5].innerHTML = "Contact: 691776584";
}
srliArr[3].onmouseenter = function(){
	srliArr[5].innerHTML = "Contact: q691776584";
}
srliArr[4].onmouseenter = function(){
	srliArr[5].innerHTML = "Contact: github.com/mofang01";
}