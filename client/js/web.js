var app = angular.module('rp', ['ng', 'ngRoute', 'angularSpinner']);


app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {templateUrl: 'login.html', controller: 'AppCtrl'
      }).
      when('/wallet', {templateUrl: 'wallet.html', controller: 'BlobCtrl'}).
      otherwise({redirectTo: '/'
      });
  }]);



app.controller('AppCtrl', ['$scope',
    function ($scope) {
  






    }]);
    
    
    
    