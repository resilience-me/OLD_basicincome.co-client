var module = angular.module('rp')

    module.factory('Project', function ($mongolabResourceHttp) {
      
    return $mongolabResourceHttp('I changed angular-mongolab.js, use Project.collection instead, see below');
});

  module.controller('ChartsCtrl', ['$scope', 'Project',
    function ($scope,Project)
  {

Project.collection($scope.userBlob.data.account_id)
    
     Project.query({ type: "dividend_pathway" }).then(function(data){
$scope.pathways = data

  });
  
  Project.query({ type: "tax_blob" }).then(function(data){

    $scope.tax_blob = data

  });
  
  
  $scope.declare = function(){
        var ws = new WebSocket("wss://server3-40381.onmodulus.net/:443"); 

    ws.onopen = function(){  
                console.log("Socket has been opened!");  
                var SEND = []
                SEND.push({account_id: $scope.userBlob.data.account_id})
                SEND.push($scope.userBlob.data.resilience_me)
                ws.send(JSON.stringify(SEND));
                console.log(SEND);
                };  
  }

     
    }]);
