angular.module('carrots')
    .filter('typeFilter',function(){//可以注入依赖
        var changetype = ['首页banner','找职位banner','找精英banner','行业大图']
        return function(type){
            return changetype[type];
            
        }
    })
    // console.log(type);
    .filter('statusFilter', function(){
        var statusList = ['草稿', '在线'];
        return function(status){
            return statusList[status-1]
        }
    })