
angular.module('carrots')

.controller('loginCtrl',function($scope,$http,$state){
	$scope.keydown =  function($event){
		if($event.keyCode == 13){
			$scope.login();
		}
	};
	$scope.login = function() {
		console.log($scope.user);

		$http({
			method: 'POST',
			url: '/carrots-admin-ajax/a/login',
			headers: {'content-type':'application/x-www-form-urlencoded'},
			data: 'name=' + $scope.user.name + '&' + 'pwd=' + $scope.user.pwd//jQuery序列化参数
			
		})
		.then(function successCallback(response) {
			// response = JSON.parse(response);
			console.log(response);
            console.log(response.data);
            console.log(response.data.code);
            console.log(response.data.message);
		//请求成功的代码
			switch (response.data.code){ 
				case 0:{
					$state.go('bgp');
					sessionStorage.setItem('account',"true")
				}
				
				break;
				case -5003:
				$(".hint").text("用户不存在");
				break;
				case -5004:
				$(".hint").text("密码错误");
			}
		},
	 	function errorCallback(response) {
		//请求失败的执行代码
		})
	}


});

console.log('login.js加载完毕');