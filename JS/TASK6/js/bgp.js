angular.module('carrots')
    .controller('bgpCtrl',function($scope,$http,$state){
    	
    		$scope.list = function(){
            	$state.go('bgp.listpage');
            	// $http({
            	// 	method: 'GET',
            	// 	url: '/carrots-admin-ajax/a/article/search'
            	// })
            	// .then(function(response){
            	// 	console.log(response);
            	// })
        	};

       		$scope.new = function(){
        		$state.go('bgp.new')
        	}
    	
    	$scope.logout = function() {
    		$http({
    			method: 'post',
    			url: '/carrots-admin-ajax/a/logout'
    		})
    		.then(function seccessCallBack(response){
    			console.log(response)
    			if (response.data.code === 0){
    				$state.go('login',{reload:true});
    			}
    		})
    		
    	}
        
    })