var part_value = sessionStorage.getItem("deal");
part_value = JSON.parse(part_value);
console.log(part_value);
//改变图片
check.addEventListener("click",change);
function change() {
    var iden = document.getElementById("identity");
    for (
        var i = 0;
        i < part_value.length;
        i++) 
        if (part_value[i] == 0) {
            iden.innerText = "平民";
        }
        else {
            iden.innerText = "杀手";
        }
        document.getElementById("wow").style.setProperty("display","block");
        block.style.setProperty("background-image","none");
        check.value = "隐藏并传递给" + i + "号";
}
function img() {
    
    
}
