var radish = angular.module("radish",['ngRoute']);
radish.config(['$locationProvider', function($locationProvider) {
  	$locationProvider.hashPrefix('');
}]);
radish.config(['$routeProvider',function($routeProvider){
    $routeProvider
    .when('/login',{templateUrl:'html/login.html'})
    .when('/article-list',{temlplateUrl:'html/article-list.html'})
    .when('/article-details',{templateUrl:'html/article-details.html'})
    .otherwise({redirectTo:'/'});
}]);



// radish.controller("myCtroller", function($scope,$http) {
//     $scope.message = "hello"
// });