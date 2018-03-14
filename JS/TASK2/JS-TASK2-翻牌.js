var part_value = sessionStorage.getItem("deal");
part_value = JSON.parse(part_value);
console.log(part_value);

//改变图片
// check.addEventListener("click",change);
// function change() {
//     var iden = document.getElementById("identity");
    
//     var i = 0;
//     var n = 2;
//     if (part_value[i] == 0) {
//         iden.innerText = "平民";
//     }
//     else {
//         iden.innerText = "杀手";
//     }
//     document.getElementById("wow").style.setProperty("display","block");
//     block.style.setProperty("background-image","none");
//     check.value = "隐藏并传递给" + n + "号";
    
//     i += 1;
//     n += 1;
// }
$(document).ready($("#transmit").hide());
$(document).ready($("#judge").hide());
var i = 0;
var n = 1;


    $("#check").click(function numberOfClick(){
        i += 1;
        n += 1;
        if (part_value[i] == 0) {
            $("#identity").html("平民");
        }
        else {
            $("#identity").text("杀手");
        }
        $("#wow").show();
        $("#block").css("background-size","0");
        $("#check").hide();
        
        if(i < part_value.length) {
            $("#transmit").show();
            $("#transmit").val("隐藏并传递给" + n + "号");
        }
        else {
            $("#transmit").hide();
            $("#judge").show();
        }
        return i;
    });

    $("#transmit").click(function(){
        $("#identifier").val(n);
        $("#block").css("background-size","50%");
        $("#wow").hide();
        $("#check").show();
        $("#transmit").hide();
        $("#check").val("查看" + n + "号身份");
        return n;
    });

$("#judge").click(function(){
    window.location.href="JS-TASK2-投票.html"
})


