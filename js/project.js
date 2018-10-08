var arr = [
        {   //  1
            width:200,
            top:70,
            left:150,
            opacity:20,
            zIndex:2
        },
        {  // 2
            width:400,
            top:120,
            left:200,
            opacity:80,
            zIndex:3
        },
        {   // 3
            width:600,
            top:180,
            left:300,
            opacity:100,
            zIndex:4
        },
        {  // 4
            width:400,
            top:120,
            left:600,
            opacity:80,
            zIndex:3
        },
        {   //5
            width:200,
            top:70,
            left:850,
            opacity:20,
            zIndex:2
        }
    ];

var sp = document.getElementById("slideproject");
    ul = document.getElementById("project"),
    liArr = ul.children,
    arrow = document.getElementById("arrow");
    arrowChildren = arrow.children;
    //可以利用flag来阻止快速翻动。
    // flag = true;

    sp.onmouseenter = function(){
        animate(arrow,{"opacity":100});
    }
    sp.onmouseleave = function(){
        animate(arrow, {"opacity": 0});
    }


    move();


    arrowChildren[0].onclick = function(){
        // if(flag){
        //     flag = false;
            move(true);
        // }
    }


    arrowChildren[1].onclick = function(){
        // if(flag){
        //     flag = false;
            move(false);
        // }
    }


    function move(bool){
        if(bool === true || bool === false){
            if(bool){
                arr.unshift(arr.pop());
            }else{
                arr.push(arr.shift());
            }
        }
        
        for(var i=0; i<liArr.length; i++){
            animate(liArr[i], arr[i], function(){
                // flag = true;
            });
        }
    }
