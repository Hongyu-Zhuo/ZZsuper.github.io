console.log("通");
start.onclick=function() {
    document.getElemetById("1-1")
}

// var box1 = document.getElementById(Math.floor(Math.random()*10));
// var box2 = document.getElementById(Math.floor(Math.random()*10));
    // var box1 = document.getElementById(Math.floor(Math.random()*10));
    // var box2 = document.getElementById(Math.floor(Math.random()*10));
    // var box3 = document.getElementById(Math.floor(Math.random()*10));
   
// var color = "#" + Math.floor(Math.random()*0xffffff).toString(16);
// ((box1==0) || (box2==0) || (box3==0))
function color() {
        box_color = "#" + (((Math.random()*9)*0xffffff+0.5>>0).toString(16)).slice(-6);
        return box_color ;
    }

function start() {
    
    var box1 = Math.floor(Math.random()*10);
    console.log(box1);
    var box2 = Math.floor(Math.random()*10);
    console.log(box2);
    var box3 = Math.floor(Math.random()*10);
    console.log(box3);

    if (box1!=box2&&box1!=box3&&box2!=box3&&box1!=0&&box2!=0&&box3!=0) {
        document.getElementById(box1).style.backgroundColor = color();
        console.log(color());
        document.getElementById(box2).style.backgroundColor = color();
        console.log(color());
        document.getElementById(box3).style.backgroundColor = color();
        console.log(color());
    
    }
    else {
        start();
    }


    
        
    
    // if (box1 = document.getElementById(0)||document.getElementById(0)||document.getElementById(0) ) {
    //     return start;
    // } 
    // else {
        // var color = "#" + Math.floor(Math.random()*0xffffff).toString(16);
        // document.getElementById(box1).style.backgroundColor = color();
        // box2.style.backgroundColor = color();
        // box3.style.backgroundColor = color();
    // }

    
    // document.getElementById(Math.floor(Math.random()*10)).style.backgroundColor = color;
    
}
 var tt = windows.setIntveral(start, 1000);