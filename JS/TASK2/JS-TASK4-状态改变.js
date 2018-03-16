console.log("杀手请睁眼，请选择要要杀的对象");
console.log("选择下方玩家头像，对要杀的玩家进行标记");

var day;//设置变量用于存放游戏进行到第几天，每天包含4个步骤的状态；
var killMark;
var defunct;
// function die() {
//     this.css("background-color", "#83b09a");
    
// }
// function die() {
//     $(this).parents(".user-operate").children().eq(0).css("box-shadow", "0 0 100px 10px #83b09a inset");
//     killMark = 1;
//     console.log(killMark);
// }

$(".option").children("img").click(function(){
    $(".character").css("box-shadow", "none");
    $(this).parents(".user-operate").children(".character").css("box-shadow", "0 0 100px 10px #83b09a inset");
    killMark = $(this);
});

$("#confirm").click(function(){
    if (!killMark) {
        alert("请选择一个玩家")
    }
    else {
        confirm("您要杀死选中的玩家吗");
        killMark.parents(".user-operate").children(".character").css("background-color","#83b09a");
        setTimeout(function(){
            window.location.href = "JS-TASK4-流程.html";
        }, 500)
    }
    
})

