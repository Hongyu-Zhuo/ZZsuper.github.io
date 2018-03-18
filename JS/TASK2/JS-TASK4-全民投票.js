var click = 0;//投票按钮点击次数

var die = sessionStorage.getItem("die");
die = JSON.parse(die);
var judgeBtn = die;
console.log(die);

click = sessionStorage.getItem("c");

for(var i =0;
    i < die.length;
    i++
    ) {
    $(".character").eq(die[i]*1).css("background-color","#83b09a");
    $(".character").eq(die[i]*1).parent().find("img").hide();
}


$("#confirm").click(function(){
    click += 1; 
    sessionStorage.setItem("c",click);
    console.log("点击" + click + "次");
})