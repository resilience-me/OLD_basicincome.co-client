var app = angular.module('rp', ['ng', 'ngRoute', 'angularSpinner', 'mongolabResourceHttp']);


app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {templateUrl: 'login.html', controller: 'AppCtrl'}).
      when('/wallet', {templateUrl: 'wallet.html', controller: 'WalletCtrl'}).
      when('/charts', {templateUrl: 'charts.html', controller: 'ChartsCtrl'}).
      when('/account', {templateUrl: 'account.html', controller: 'AppCtrl'}).
      otherwise({redirectTo: '/'
      });
  }]);

// a factory for MongoLabs API

app.constant('MONGOLAB_CONFIG',{API_KEY:'_5sK-6UJIaR72iqjdI0lHAo7l90nA9yp', DB_NAME:'awesome_box'});



app.controller('AppCtrl', ['$scope',
    function ($scope) {
    

$scope.logout = function(){
  window.location.assign("http://basicincome.co")
}
      


    }]);
    
    
    
    