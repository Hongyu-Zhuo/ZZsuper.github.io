console.log("杀手请睁眼，请选择要要杀的对象");
console.log("选择下方玩家头像，对要杀的玩家进行标记");
var day;//设置变量用于存放游戏进行到第几天，每天包含4个步骤的状态；
var killMark;
var _index;//获取死亡玩家索引号
var defunct=[];//储存被投死玩家
var died;//已经死亡玩家JSON数据
var voteKill=[]; //被投死玩家
var click = 0;//投票按钮点击次数
//玩家身份数据
var part_value = sessionStorage.getItem("deal");
part_value = JSON.parse(part_value);

//存活的玩家
var live;
// 被杀手杀死玩家数据//玩家index 
sessionStorage.getItem("die");
def = JSON.parse(sessionStorage.getItem("die"));

// 被玩家投死玩家数据//玩家index
sessionStorage.getItem("vote");
vot = JSON.parse(sessionStorage.getItem("vote"));


//利用已经取得的玩家index，删除对应在part_value[]中的数据;

// for (var i=0;
//     i < defunct.length;
//     i++) {

// }


//获取已被杀死玩家
$(document).ready(function(){
    for (var i = 0;
        i < def.length;
        i++) {
        $(".character").eq(def[i]).css("background-color","#83b09a");
        $(".character").eq(def[i]).children("img").hide();
    }
    for (var i = 0;
        i < vot.length;
        i++) {
        $(".character").eq(vot[i]).css("background-color","#83b09a");
        $(".character").eq(vot[i]).children("img").hide();
    }
})
//弹出对话框
function alert(content) {
    var _this = $(this);
    $("#hidebg").css("display","block");
    $("#alert").css("display","flex");
    $("#prompt").text(content);

    $(".concel").on("click",function(){
        $("#alert").css("display","none");
        $("#hidebg").css("display","none");
    })
}

//杀手标记玩家
$(".option").children("img").click(function(){
    _index = $(".character").index($(this).parents(".user-operate").children(".character"));
    if(part_value[_index] == 1){
        alert("请选择一个平民")
        $(".confirm").on("click",function(){
            $("#alert").css("display","none");
            $("#hidebg").css("display","none");
        })
    }
    else {
        $(".character").css("box-shadow", "none");
        $(this).parents(".user-operate").children(".character").css("box-shadow", "0 0 100px 10px #83b09a inset");
        killMark = $(this);
        _index = $(".character").index($(this).parents(".user-operate").children(".character"));
        console.log(_index);
    } 
});
//杀死玩家
$("#confirm").on("click",function(){
    var _this = $(this);
    if (!killMark) {
        alert("请选择一个玩家")
        $(".confirm").on("click",function(){
            $("#alert").css("display","none");
            $("#hidebg").css("display","none");
        })
    }
    else {
        alert("您要杀死选中的玩家吗");
        $(".confirm").on("click",function(){
            $("#alert").css("display","none");
            killMark.parents(".user-operate").children(".character").css("background-color","#83b09a");
            setTimeout(function(){
                window.location.href = "JS-TASK4-流程.html";
            }, 500);

            defunct.push(_index);
            var diedPeople = sessionStorage.setItem("die",JSON.stringify(defunct));
            console.log(defunct);
            
        })   
    }
})

//投票页，按钮
$("#vote").on("click",function(){
    var _this = $(this);
    if (!killMark) {
        alert("请选择一个玩家")
        $(".confirm").on("click",function(){
            $("#alert").css("display","none");
            $("#hidebg").css("display","none");
        })
    }
    else {
        alert("玩家将被投票出局");
        $(".confirm").on("click",function(){
            $("#alert").css("display","none");
            killMark.parents(".user-operate").children(".character").css("background-color","#83b09a");
            setTimeout(function(){
                window.location.href = "JS-TASK4-流程.html";
            }, 500)
            voteKill.push(_index);
            sessionStorage.setItem("vote",JSON.stringify(voteKill));
            console.log(voteKill);

            click = click + 1;
            sessionStorage.setItem("c",JSON.stringify(click));
            console.log("点击" + click + "次");

            
        })   
    }
})




