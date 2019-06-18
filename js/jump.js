var jump = document.getElementById("jump"),
	storeys = document.getElementsByClassName("storey"),
	jumpAll = jump.children,
	down = document.getElementById("down"),
	totop = document.getElementById("totop"),
	binggo = document.getElementById("binggo"),
	code = document.getElementById("code"),
	leader = 0,
	target = 0,
	timer = null;

binggo.onmouseenter = function(){
	code.style.display = "block";
}

binggo.onmouseleave = function(){
	code.style.display = "none";
}


for(var i = 0; i<jumpAll.length; i++){
	jumpAll[i].index = i;

	jumpAll[i].onclick = function(){
		target = storeys[this.index].offsetTop-80;
		timer = setInterval(function(){
			var step = (target - leader)/10;
			step = step>0? Math.ceil(step):Math.floor(step);
			leader = leader+step;
			window.scrollTo(0, leader);
			if(Math.abs(target - leader)<=Math.abs(step)){
				window.scrollTo(0, target);
				clearInterval(timer);
			}
		},20)
	}
}


window.onscroll = function(){
	leader = scroll().top;
}

totop.onclick = function(){
	var target = 0,
		timer = null;
	totop.style.animation = "sway 1s ease-in";
	setTimeout(function(){
		totop.style.animation = "huojian 2s linear";
		timer = setInterval(function(){
		leader = leader-10;
		window.scrollTo(0,leader);
		if(leader<=0){
			clearInterval(timer);
			totop.style.animation = "";
		}
	},6);
	},1000)
		
}

down.onclick = function(){
	var juli = storeys[1].offsetTop;
	target = juli-80;
	timer = null;
	timer = setInterval(function(){
		var step = (target-leader)/10;
		step = step>0? Math.ceil(step):Math.floor(step);
		leader = leader+step;
		window.scrollTo(0,leader);
		if(Math.abs(target - leader)<=Math.abs(step)){
				window.scrollTo(0, target);
				clearInterval(timer);
			}
	},20)
}



function scroll() {
    if(window.pageYOffset != null) {  // ie9+ 高版本浏览器
        // 因为 window.pageYOffset 默认的是  0  所以这里需要判断
        return {
            left: window.pageXOffset,
            top: window.pageYOffset
        }
    }
    else if(document.compatMode === "CSS1Compat") {    // 标准浏览器   来判断有没有声明DTD
        return {
            left: document.documentElement.scrollLeft,
            top: document.documentElement.scrollTop
        }
    }
    return {   // 未声明 DTD
        left: document.body.scrollLeft,
        top: document.body.scrollTop
    }
}



function toTop(){
	setTimeout(function(){
		$(".flash").animate({opacity: "0"});
	},10000);
	setTimeout(function(){
		$(".flash").hide();
	},11000);
	setTimeout(function(){
		$(".super_box").fadeIn(1000);
	},10000)
}

toTop();