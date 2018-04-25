
angular.module('carrots')
    .controller('pageCtrl' ,function($http,$scope,$state,$stateParams,select_types,select_status){
        $scope.select_types = select_types;
        $scope.select_status = select_status;
        //下拉框--ng——option写法，已改为constant
        // $scope.select_status = [
        //     {text:'全部'},
        //     {value:1,text:'草稿'},
        //     {value:2,text:'上线'}
        // ]
        // $scope.select_types = [
        //     {text:'全部'},
        //     {value:0,text:'首页'},
        //     {value:1,text:'找职位'},
        //     {value:2,text:'找精英'},
        //     {value:3,text:'行业大图'}
        // ]

//从url获取参数·············································································
        $scope.seek = $state.params
        if (!$state.params.startAt){
            $scope.seek.startAt = "";
            $scope.seek.endAt = "";
        }else if(typeof($state.params.startAt) == 'number') {
            $scope.seek.startAt = $state.params.startAt
            $scope.seek.endAt = $state.params.endAt
        }
        else{
            $scope.seek.startAt = Date.parse($state.params.startAt)
            $scope.seek.endAt = Date.parse($state.params.endAt) + (24 * 60 * 60 * 1000 - 1)
        }
        
//页面初始加载数据··································································································
        $http({//发送请求，
            method: 'GET',
            url: '/carrots-admin-ajax/a/article/search',
            params: $scope.seek    
        })
        .then(function successCallback(response){//获取数据
            console.log(response);
            $scope.article = response.data.data.articleList;
            //搜索后下拉框选项值
            $scope.seek.status = $state.params.status;
            $scope.seek.type = $state.params.type;

            $scope.pageid = response.data.data.page;
            $scope.total = response.data.data.total;
            $scope.size = response.data.data.size;
            $scope.totalPages = Math.ceil($scope.total/$scope.size);
            // console.log($scope.totalPages)

        },function errorCallback(response){
            alert('request failed!')
        });

        //clear
        $scope.clear = function(){
            $state.go('bgp.listpage',{},{reload:true});  
        }
        //search
         $scope.search = function(status,type,startAt,endAt){
            $state.go(
                'bgp.listpage.table',
                {
                    status:$scope.lookfor.status,
                    type:$scope.lookfor.type,
                    startAt:$scope.lookfor.start,
                    endAt:$scope.lookfor.end,
                    size:$scope.size
                },
                // {reload:true}
            )

        }
//上线·····················································································
        $scope.upLine = function(id){
            $http({
                method: 'PUT', 
                url: '/carrots-admin-ajax/a/u/article/status',
                headers: {'content-type':'application/x-www-form-urlencoded'},
                data: 'id=' + id + '&status=' + 2
            })
            .then(function successCallback(){
                $state.go('bgp.listpage.table',{},{reload:true})
            })
        }
//删除·····················································································
        $scope.delete = function(id){
            $http({
                method: 'DELETE',
                url: '/carrots-admin-ajax/a/u/article/' + id
            })
            .then(function successCallback(response){
                console.info(response)
                $state.go('bgp.listpage.table',{},{reload:true})
            })
        }
//编辑article,
        $scope.edit = function(id){
            let edit = {};
            $http({
                method: 'GET',
                url: '/carrots-admin-ajax/a/article/' + id,
            })
            .then(function successCallback(response){
                edit = response.data.data.article;
                console.log(edit)
                $state.go(
                    'bgp.new',
                    {   
                        id: id,
                        title: edit.title,
                        status: edit.status,
                        img: edit.img,
                        content: edit.content,
                        url: edit.url,
                        type: edit.type,
                        industry: edit.industry,
                        createAt: edit.createAt
                    }
                )
            },function errorCallback(response){
                console.error('get单条article失败');
                console.error(response);
            })
        }
//分页···········································································
        $scope.selectPage = function(pageid,reload,size){
            $state.go(
                'bgp.listpage.table',
                {
                    page:pageid,
                    size:size
                },{reload:reload}
            );
        }
    })
console.log('pagelist.js加载完毕');



