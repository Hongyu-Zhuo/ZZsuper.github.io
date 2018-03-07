console.log("JS成功执行进来;")
console.log("JS是否存在逻辑问题、变量问题、参数问题等等")
console.log("JS符号是否存在问题")


function toSimple () {
	window.location.href="https://ZZsuper.github.io/JS/TASK2/JS-TASK2-分配/JS-TASK2-分配.html";
}
function people() {
    var num = document.getElementById('number').value;
}

function distribute() {
    var num = document.getElementById('number').value;
    document.getElementById('killer_num').value = player();
    document.getElementById('civilian_num').value = num - player();
}
function voluation() {
    var num = document.getElementById('number').value;
    var killerNum = new Array(player());
    var civilianNum = new Array(num - player());
    var i;
    for (
        var i = 0;
        i < killerNum.length;
        i++
        ) {
        killerNum[i] = "杀手";
    console.log(killerNum)
    }
    for (
        var a = 0;
        a < civilianNum.length;
        a++
        ) {
        civilianNum[a] = "平民";
    console.log(civilianNum)
    }  
    civilianNum.push.apply(civilianNum,killerNum);
    console.log(civilianNum);

}
// var num = document.getElementById('number').value;
function player() {
    var killer_num1 = 1;
    var killer_num2 = 2;
    var killer_num3 = 3;
    var killer_num4 = 4;
    var num = document.getElementById('number').value;
        if (3 < num && num<=8) {
            return killer_num1;
        }
        else if (8 < num && num <=11) {
            return killer_num2;
        }
        else if (11 < num && num <=15) {
            return killer_num3;
        }
        else if (15 < num && num <=18) {
            return killer_num4;
        }
    else {
        alert("请输入正确的玩家数量(4 ~ 18)");
    }

}

 

