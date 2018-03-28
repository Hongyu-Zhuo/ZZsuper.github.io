
// var user;
// var passWord;
// var request = new XMLHttpRequest();
// $("#signIn").click(function(){
// 	var request = new XMLHttpRequest();
// 	var user = $("#user").val();
//     var passWord = $("#password").val();

// 	var data = {}; 
// 	data.name = $("#user").val();
// 	data.pwd = $("#password").val();
// 	// data = JSON.parse("data");
//     console.log(data);

    
//     //接收
//     request.responseType = "json";
//     var response = JSON.parse(request.responseText); 
//     console.log(response)

//     request.onreadystatechange=function(){
//   		if (request.readyState==4 && request.status==200){
//     		document.getElementById("myDiv").innerHTML='444';
//     		console.log(request.status);
//    		}
//    	}
    
//     request.open('GET','/carrots-admin-ajax/a/login','true');
//     request.setRequestHeader("Content-type","application/x-www-form-urlencoded");
//     request.send($.param(data));
// })

$(document).ready(function() {
	$("#signIn").click(function(){
		var data = {}; 
		data.name = $("#user").val();
		data.pwd = $("#password").val();

		var request = $.post(
			'/carrots-admin-ajax/a/login',
			{'name': data.name, 'pwd': data.pwd},
			function(){
				if (request.readyState ==4 && request.status==200) {
					var text = JSON.parse(request.responseText);
					if (data.name == "" || data.pwd == "") {
						$(".hint").text("用户名或密码不能为空")
					}
					switch (text.code){ 
						case 0:
						window.location.href="http://dev.admin.carrots.ptteng.com/#/dashboard";
						break;
						case -5003:
						$(".hint").text("用户不存在");
						break;
						case -5004:
						$(".hint").text("密码错误");
					}
				}
			//error: funvtion(){};
			}
		)
	})
})


