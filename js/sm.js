var na = document.getElementById("na"),
	address = document.getElementById("address"),
	opinion = document.getElementById("opinion"),
	btn = document.getElementById("btn");


function check(){
	var value = this.value;
	if(!value){
		this.style.border = "1px solid red";
		this.placeholder = "Please enter the content !";
	}else{
		this.style.border = "1px solid #e4c9b4";
	}
}

na.onblur = check;
address.onblur = check;
opinion.onblur = check;



btn.onclick = function(){
	var navalue = na.value,
		addressvalue = address.value,
		opinionvalue = opinion.value;
	if(!navalue){
		alert("Please enter your name !");
	}else{
		if(!addressvalue){
			alert("Please enter your email address !");
		}else{
			//传到test进行正则验证。
			test(navalue,addressvalue,opinionvalue);

		}	
	};
}

function test(naval,adval,opval){
	//进行正则验证.
	var reg=/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
	if(!reg.test(adval)){
		alert("Please enter the correct mailbox format!");
	}else{
		if(!opval){
				alert("Please enter your opinion...")
			}else{
				serve(naval,adval,opval);
			}
	}
}


//AJAX发送到服务端.
function serve(naval,adval,opval){

	var ajax = new XMLHttpRequest;
	ajax.open('post','api/sm.php');
	ajax.setRequestHeader("Content-type","application/x-www-form-urlencoded");
	ajax.send('name='+naval+adval+opval);
	ajax.onreadystatechange = function(){
		if(ajax.readyState == 4 && ajax.status == 200){
			var str = ajax.responseText;
			alert("Submit successfully! We will treat your suggestion correctly!");
			na.value = "";
			address.value = "";
			opinion.value = "";
		}
	}

}
