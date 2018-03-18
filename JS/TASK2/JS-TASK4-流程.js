var die = sessionStorage.getItem("die");
die = JSON.parse(die);
var judgeBtn = die;
console.log(die);

//玩家身份数据
var part_value = sessionStorage.getItem("deal");
part_value = JSON.parse(part_value);

//投票按钮点击次数
click = sessionStorage.getItem("c");
click = JSON.parse(click);

    for (
        var i = 0;
        i < click;
        i++){
        $("main").eq(i - 1).before(
            '<main>\n' +
                '<p class="day">'+'第'+ i + '天' + '</p>\n' +
                '<img class="arrow_down" src="https://ZZsuper.github.io/JS/TASK2/icon/arrow_down.png">\n' +
                '<div class="diary_wrap">\n' + 
                    '<span class="moon"></span>' +
                    '<span class="sun"></span>' +
                    '<button class="kill">\n' + 
                    '<p>杀手杀人</p>\n' +
                    '<p class="diary_1">' + "夜晚：" + die + "号玩家被杀手杀死，真实身份是平民" + '</p>\n' +
                    '</button>\n'+
                    '<button class="step">\n' +
                    '<p>亡灵发表遗言</p>\n' +
                    '</button>\n' +
                    '<button class="step">\n' +
                    '<p>玩家依次发言</p>\n' +
                    '</button>\n' +
                    '<button class="step">\n' +
                    '<p>投票</p>\n' +
                    '</button>\n' +
                '</div>' +
            '</main>'
            )

    };
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


//x号玩家被杀手杀死，真实身份是x
$(document).ready(function() {
    die = die[0] + 1;
    $(".diary_1").text("夜晚：" + die + "号玩家被杀手杀死，真实身份是平民");
});

//隐藏显示天数详情
$(".arrow_down").click(function(){
    $(this).parents("main").children(".diary_wrap").slideToggle();
})

$(document).ready(
    function(){
        if (judgeBtn) {
            $("#kill").attr("disabled","disabled");

            $("#kill").css({
                color:"#999",
                background:"#b5b3b3"
            });
            $("#kill").children(".triangle").css("border-top-color","#b5b3b3");
            $("#kill").attr("disabled","disabled");
        }
    }
);
$("#kill").click(function(){
    window.location.href="JS-TASK4-状态改变.html";
})

function alertConfirm(here) {
    $(".confirm").on("click",function(){
        $("#alert").css("display","none");
        here.attr("disabled","disabled");
        here.css({
            color:"#999",
            background:"#b5b3b3"
        });
        here.children(".triangle").css("border-top-color","#b5b3b3");
        $("#hidebg").css("display","none");
    })
}

$("#last_words").on("click",function(){
    var _this = $(this);
    alert("请死者亮明身份并发表遗言");
    alertConfirm($(this));
});

$("#speak").on("click", function(){
    var _this = $(this);
    alert("玩家依次讨论发言");
    alertConfirm($(this));
})

$("#vote").on("click",function(){
    window.location.href="JS-TASK4-全民投票.html";
})

