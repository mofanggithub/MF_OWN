var lbtn = document.querySelectorAll(".lbtn"),
	articleone = document.getElementById("articleone"),
	articletwo = document.getElementById("articletwo"),

	trbtn = document.querySelectorAll(".trbtn"),
	trans = document.querySelectorAll(".trans");

for(var i = 0; i<lbtn.length; i++){
	lbtn[i].onclick = function(){
		var ajax = new XMLHttpRequest;
		ajax.open('post','api/vie.php');
		ajax.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		ajax.send('name='+this.value);
		ajax.onreadystatechange = function(){
			if(ajax.readyState == 4 && ajax.status == 200){
				// articleone.innerHTML = ajax.responseText + '<img src="./images/fat.jpg" width="190px" height="188px">';
				// console.log(ajax.responseText);
				var str = ajax.responseText;
				str = str.split("|");
				articleone.innerHTML = str[0] + '<img src="./images/fat.jpg" width="190px" height="188px">';
				articletwo.innerHTML = str[1];
			}
		}
	}
}


for(var i=0; i<trbtn.length; i++){
	trbtn[i].onclick = function(){
		var ajax = new XMLHttpRequest;
		ajax.open('post','api/trans.php');
		ajax.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		ajax.send('name='+this.value);
		ajax.onreadystatechange =function(){
			if(ajax.readyState == 4 && ajax.status == 200){
				var str = ajax.responseText;
				str = str.split("|");
				for(var i=0; i<str.length; i++){
					trans[i].innerHTML = str[i];
				}
			}
		}
	}
}
