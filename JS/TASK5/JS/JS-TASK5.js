// var user;
// var passWord;
var request = new XMLHttpRequest();
$("#signIn").click(function(){
	var user = $("#user").val();
    var passWord = $("#password").val();

	var data = {}; 
	data.name = $("#user").val();
	data.pwd = $("#password").val();
	
    console.log(data);
    var request = new XMLHttpRequest();
    
    request.onreadystatechange=function(){
  		if (request.readyState==4 && request.status==200){
    		document.getElementById("myDiv").innerHTML='444';
    		console.log(request.status)
   		}
	}
    request.open('POST','/carrots-admin-ajax/a/login','true');
    request.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    request.send($.param(data));
})
