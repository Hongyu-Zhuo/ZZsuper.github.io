var a = ["0", "0", "0", "0", "1", "0"];
//改变图片
check.addEventListener("click",changeImg);
function changeImg() {
    var iden = document.getElementById("identity");
    // for (
    //     var i = 0;
    //     i < a.length;
    //     i++) {
        if (a[1]=0) {
            iden.innerText = "平民";
            return;
        }
        else {
            iden.innerText = "杀手";

        }
    

        
        
    
    document.getElementById("wow").style.setProperty("display","block");
    block.style.setProperty("background-image","none");
    check.value = "隐藏并传递给2号";
    console.log(shuffle());
}

