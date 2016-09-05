/**
 * Created by Administrator on 2016/8/31.
 */
var app = angular.module('Tiny',['ionic','ng']);
app.run(function($rootScope,$state,$stateParams){
  $rootScope.$state = $state;
  $rootScope.$stateParams = $stateParams;
});
app.config(['$stateProvider','$urlRouterProvider',function($stateProvider,urlRouterProvider){

}]);
app.controller('resh',function($scope){
  $scope.items = [];
  var base = 1;
  $scope.doRefresh = function(){
    for(var i=0;i<5;i++,base++){
      $scope.items.unshift(['items',base].join(""));
    }
    //将要刷新的动态告诉控制器
    $scope.$broadcast('scroll.refreshComplete');
  };
});
app.controller('tab',function($scope) {
  $scope.dosomething = function () {
    //alert('我被切换了');
  };
});
app.controller('radio',function($scope){
  $scope.items=["HTML5","ES6","CSS3"];
  $scope.ret = {choice:"CSS3"};
});