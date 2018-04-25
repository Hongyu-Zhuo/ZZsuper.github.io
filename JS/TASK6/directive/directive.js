//时间插件
angular.module('carrots')
    .directive('startPicker', function () {
        return {
            restrict: 'AE',
            template: "<input id='BeginTime' type=\"text\" class=\"form-control\" ng-model=\"startAt \" placeholder=\"\">",
            controller:function($scope){
                // console.log($scope);
                $("#BeginTime").datetimepicker({    //时间插件开始时间
                    language: 'zh-CN',
                    format: 'yyyy-mm-dd',
                    weekStart: 1,
                    autoclose: 1,
                    todayHighlight: 1,
                    startView: 2,
                    minView: 2,
                    forceParse: 0,
                    endDate: new Date()
                }).on('changeDate', function (e) {
                    var startTime = e.date;
                    $('#EndTime').datetimepicker('setStartDate', startTime);
                });
            }
        };
    })
    .directive('endPicker', function () {
        return {
            restrict: 'AE',
            template: "<input id='EndTime' type=\"text\" class=\"form-control\" ng-model=\"endAt\" placeholder=\"\">",
            controller:function($scope){
                // console.log($scope);
                $("#EndTime").datetimepicker({    //时间插件结束时间
                    language: 'zh-CN',
                    format: 'yyyy-mm-dd',
                    weekStart: 1,
                    autoclose: 1,
                    todayHighlight: 1,
                    startView: 2,
                    minView: 2,
                    forceParse: 0,
                    endDate: new Date()
                }).on('changeDate', function (e) {
                    var endTime = e.date;
                    $('#BeginTime').datetimepicker('setEndDate', endTime);
                });
            }
        };
    })
    /*传图片============================================================================================================*/
    .directive('upLoader',function (FileUploader) {
        return {
            restrict: 'E',
            templateUrl: '../html/fileUpload.html',
            scope: {
                logoUrl: '=ngModel',//图片上传后地址
                labelName: '@',
                tip:'@'//提示语
            },
            replace: 'true',
            link: function (scope) {

                scope.uploader = new FileUploader({//实例化
                    url: '/carrots-admin-ajax/a/u/img/task',
                    queueLimit: 1
                });
                scope.clearItem = function () {//清空队列
                    scope.uploader.clearQueue()
                };
                scope.remove = function () {
                    var imgSrc = document.getElementById("img");
                    imgSrc.src = "";
                    scope.logoUrl = '';
                };
                scope.getUrl = function (files) {
                    scope.fileList = files;
                    scope.imgURL = window.URL.createObjectURL(scope.fileList[0]);//考虑性能用后清除
                };
                scope.uploader.onSuccessItem = function (item, response) {//上传成功返回地址
                    scope.logoUrl = response.data.url;
                    console.log(response.data.url);
                }
            }
        }
    })
//分页
    .directive('zPage',function(){
    return {
        priority:0,
        restrict:'EA',
        replace:true,//(boolean/string)默认为false
        //template:(string/function)
        templateUrl:'directive/pagination.html',
        scope:{
            pageid:'=',
            totalpages:'=',
            page_num:'=paging',
            size:'=',
            statego:'&'
        },
        link: function(scope,element,attrs){
            //hover时效果
            element.bind('mouseover',function(){
                angular.element('a').css('cursor','pointer')
            });
            //初始加载分页 
            scope.paging = [];
            if(scope.totalpages <= 5 || scope.totalpages){
                let page = [1,2,3,4,5];
                // let n = scope.page_num - 1
                let n = scope.totalpages - 1
                for( i of page[n]){
                    scope.paging.push(i);
                } 
            }else {
                let page = [1,2,3,4,5];
                for (i of page){
                    scope.paging.push(i);
                }
            }
        //start paging logic
            scope.selected = function(pageid,reload,size){ 
                scope.pageid = pageid;
                if ( scope.totalpages > 5){
                    if(pageid > scope.totalpages-3){
                        scope.paging = [
                            scope.totalpages-4,
                            scope.totalpages-3,
                            scope.totalpages-2,
                            scope.totalpages-1,
                            scope.totalpages
                        ]
                    }else if(pageid < 3){
                        scope.paging = [1,2,3,4,5]; 
                    }else {
                        scope.paging = [
                            pageid - 2,
                            pageid - 1,
                            pageid,
                            pageid + 1,
                            pageid + 2
                        ]
                    }   
                }else {
                    for(let i = 0;
                        i < scope.totalpages;
                        i++
                        ){
                        scope.paging[i] = i+1;
                    }
                }
                //向父级函数传参
                scope.statego({pageid:pageid,reload:reload,size:size});
            } 
    //end paging logic

        //first page
        scope.firstPage = function(){
            scope.selected(1,false,scope.size)
        }

        //previous page
        scope.lastPage = function(pageid){
            if(pageid > 0){
                scope.selected(pageid,false,scope.size)
            }
        }

        //next page
        scope.nextPage = function(pageid){

            if(pageid <= scope.totalpages){
                scope.selected(pageid,false,scope.size)
            }
        }
        //last page
        scope.endPage = function(size){
            scope.selected(scope.totalpages,false,scope.size)
        }
        //跳转页码&每页数量
        scope.goPage = function(pageid,size){
            if((pageid <= scope.totalpages && pageid > 0 ) || scope.size){
                scope.selected(pageid,true,size)
            }
        }
        }
    }
})
//侧边栏
    // .directive('sideMenu',finction(){
    //     return{
    //         restrict: 'E',
    //         replace: true,
    //         template: 
    //         link:function(){

    //         }
    //     }
    // })