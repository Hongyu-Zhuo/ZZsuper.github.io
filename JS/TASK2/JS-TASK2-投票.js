//玩家分配数据
var part_value = sessionStorage.getItem("deal");
part_value = JSON.parse(part_value);
console.log(part_value);

var userNumber = document.getElementsByClassName("user-operate");
var i;
var a;
for (i = 18;
    i > part_value.length - 1;
    i--) {
    $(".user-operate").eq(i).remove();
}

for (a = 0;
    a < 6;
    a++) {
    var x = document.getElementsByClassName("form");
    if ($(".form")[a].childNodes.length == 4) {
        x[a].style.height = "0";
    }
}

for (var n = 0;
    n < part_value.length;
    n++){
    var x = document.getElementsByClassName("character");
    if (part_value[n] == 0) {
        x[n].firstChild.innerText = "平民";
    }
    else {
        x[n].firstChild.innerText = "杀手";
    }
}