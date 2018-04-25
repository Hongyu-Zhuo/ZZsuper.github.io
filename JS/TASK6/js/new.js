angular.module('carrots')
    .controller('newCtrl',function($scope,$http,$state,$httpParamSerializerJQLike,select_types,select_industry){
        var upload = document.getElementById('upload');
        var preview = document.getElementById('preview');
//文本编辑器···············································································
        var E = window.wangEditor;
        var editor = new E('#editor')
        // var editor = new E(document.getElementById('editor'));
        // 或者 var editor = new E( document.getElementById('editor') )
        editor.create()
//·························································································
        $scope.select_types = select_types;//constant
        $scope.select_industry = select_industry;
//编辑article··············································································
//接受get到的单条article数据
        if ($state.params.id) {
            console.log($state.params);
            $scope.article = {};
            // $scope.article = $state.params;

            $scope.article.type = parseInt($state.params.type);
            $scope.article.createAt = parseInt($state.params.createAt);
            $scope.article.title = $state.params.title;
            $scope.article.img = $state.params.img;
            $scope.article.url = $state.params.url;
            $scope.article.industry = $state.params.industry;

            // $scope.article.industry = parseInt($state.params.industry);
            editor.txt.html($state.params.content);
            $scope.src = $state.params.img
            console.info($scope.article);
        }
//PUT详细

        
        
        $scope.form = new FormData();

        if(typeof (FileReader) === 'undefined'){
            upload.setAttribute('disabled','disabled');
        }else{
            // upload.addEventListener('change',$scope.getimg())
        }

        $scope.getimg = function(files){
            $scope.success = false;
            $scope.failed = false;
            
                //限定上传文件的类型，判断是否是图片类型
                // if (!/image\/\w+/.test(file.type)) {
                //     alert("只能选择图片");
                //     return false;
                // }
            // $scope.file = files[0];
            $scope.$apply(function($event){
                $scope.file = files[0];
                $scope.size = Math.round($scope.file.size/1024/1024 * 100)*0.01 + "Mb";//四舍六入五取偶
                console.log($scope.file)
                if($scope.file){    
                    $scope.info_show = true;
                }else{
                    $scope.info_show = false;
                }
            })
            let fr = new FileReader();
            // let pro = angular.element('#img_pro');
            $scope.max = $scope.file.size;//文件大小
            fr.readAsDataURL($scope.file);
            fr.onprogress = function($event){
                $scope.value = $event.loaded;
            }
                
            fr.onload = function ($event){//预览图片
                preview.src = $event.target.result; 
            }       
        }
//·························上传图片·························································
        $scope.up = function(){//$http
            $scope.imgSrc = "";

            let form = new FormData();
            let file = upload.files[0];
            form.append('file',file);
            $http({
                method: 'POST',
                url:'/carrots-admin-ajax/a/u/img/task',
                data:form,
                // content-type:multipart/form-data;
                headers:{'content-type': undefined},
                // transformRequest: angular.identify//序列化
            })
            .then(function successCallback(response){
                console.log(response);
                $scope.success = true;
                $scope.article.img = response.data.data.url;
            },function errorCallback(){
                $scope.failed = true;
            })
        }
//······························删除图片······················································
        $scope.del = function(){
            $scope.info_show = false;
            upload.files = "";
            preview.src = "";
            console.log($scope.file);        
        }

//上线新的article·············································································
        $scope.upload_article = function(state) {
            if($state.params.id){
                $scope.update(state);
            }else {
                $scope.article.status = state;
                $scope.article.content = editor.txt.html();
                console.info($scope.article)
                $http({
                    method: 'POST',
                    url: '/carrots-admin-ajax/a/u/article',
                    headers: {"Content-Type" : "application/x-www-form-urlencoded"},
                    data: $httpParamSerializerJQLike($scope.article), //$httpParamSerializerJQLike()
                    // transformRequest: angular.identify
                }).then(function successCallback(response){
                    console.log(response); 
                    if (response.data.code === 0){
                        $state.go('bgp.listpage.table',{},{reload:true});
                    }else {
                        console.log($.param($scope.article))
                        alert(response.data.message);
                    }
                },function errorCallback(response){
                    console.error(response);
                })
            }   
        }
//编辑后更新article····························································································
        $scope.update = function(state){
            $scope.article.status = state;
            $scope.article.content = editor.txt.html();
            $http({
                method: 'PUT',
                url: '/carrots-admin-ajax/a/u/article/' + $state.params.id,
                headers: {"Content-Type": "application/x-www-form-urlencoded"},
                data: $.param($scope.article)
            }).then(function successCallback(response){
                if (response.data.code === 0){
                    $state.go('bgp.listpage.table',{},{reload:true});
                }else {
                    console.log($.param($scope.article))
                    alert(response.data.message);
                }
                console.log($scope.article);
                console.info(response);
            },function errorCallback(response){
                console.error(response);
            })
        }
//取消新增或编辑·················································································
        $scope.cancle = function(){
            $state.go('bgp.listpage',{},{reload:true})
        }
//····························································································
        // $scope.up = function(){//XMLHttpRequest
        //     let xhr = new XMLHttpRequest();
        //     let form = new FormData();
        //     let file = upload.files[0];
        //     xhr.open('POST','/carrots-admin-ajax/a/u/img/task',true);
        //     xhr.onreadystatechange = function(){
        //         console.log(xhr.response)
        //         if(xhr.readystate === 4){
        //             console.log(xhr.status);
        //         }
        //     }
        //     form.append('file',file);
        //     console.log(form);
        //     // xhr.setRequestHeader('Content-type','Application/json')
        //     xhr.send(form);
        // }
//·····································上线·····················································        
    })
        

console.log('new.js加载完毕');