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

angular.module("carrots",['ui.router','ngMessages'])
.config(function($stateProvider,$urlRouterProvider,$urlMatcherFactoryProvider,$locationProvider){
//html5 mode······················································································
    // $provide.decorator('$sniffer', function($delegate) {
    //     $delegate.history = false;
    //     return $delegate;
    // });
    // $locationProvider.html5Mode(true).hashPrefix('!');
    // $urlRouterProvider.otherwise('/login');
    // $urlMatcherFactoryProvider.caseInsensitive(true);
//······································································································
    $urlRouterProvider.when('','/login');
    
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
        controller: 'pageCtrl'
    })
    .state('bgp.listpage.table',{
        url:'/tablepage?status&type&startAt&endAt&page&size',
        templateUrl: 'html/tablepage.html',
        controller: 'pageCtrl'
    })
    .state('bgp.new',{
        url: '/new?id&title&status&img&content&url&type&industry&createAt',
        templateUrl: 'html/new.html',
        controller: 'newCtrl'
    })
    
})


console.log('app.js加载完毕');