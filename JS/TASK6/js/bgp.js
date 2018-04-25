
angular.module('carrots')
    .controller('bgpCtrl',function($scope,$http,$state,menu){
        $scope.menu = menu;
    	$scope.show = false;
    	$scope.list_show = function(_this){
    		// _this.show = !$scope.show;
            $scope.menuId = _this;
    	}
        $scope.active = function(itemId){
            $scope.itemId = itemId;
        }
    		$scope.list = function(){
            	$state.go('bgp.listpage.table');
        	};

       		$scope.new = function(){
        		$state.go('bgp.new',{},{reload:true})
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


console.log('bgp.js');