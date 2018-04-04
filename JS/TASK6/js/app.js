 // angular.module("carrots",['ui.router'])

// 解决angularJS 1.6.x 路由跳转问题(ngRouter)
// .config(['$locationProvider', function($locationProvider) {
//   	$locationProvider.hashPrefix('');
// }])

// .config(['$routeProvider',function($routeProvider){
//     $routeProvider
//     .when('/',{
//     	templateUrl: 'html/login.html',
//     	// controller: 'loginCtrl'
//     })//默认页
//     .when('/article-list',{
//     	temlplateUrl:'html/article-list.html'
//     })
//     .when('/arricle-details',{
//     	templateUrl:'html/article-details.html'
//     })
//     .otherwise({redirectTo:'/'});

// }])
 angular.module("carrots",['ui.router'])
.config(['$stateProvider','$urlRouterProvider', function($stateProvider,$urlRouterProvider){
    $urlRouterProvider.when('','/login');
    // $urlRouterProvider.otherwise('html/login.html');
    $stateProvider
    .state('login',{
    	url: '/login',
        templateUrl: 'html/login.html',
        controller: 'loginCtrl'
    })
    .state('bgp',{//这里是父页面的状态名
        url: '/bgp',
        templateUrl: 'html/bgp.html',
        controller: 'bgpCtrl'
    })
    .state('bgp.listpage',{//父页面.子页面
        url:'/listpage',
        templateUrl: 'html/listpage.html',
        controller: 'bgpCtrl'
    })
    .state('bgp.new',{
        url: '/new',
        templateUrl: 'html/new.html'
    })
    
}])


