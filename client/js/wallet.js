var module = angular.module('rp')

  module.controller('WalletCtrl', ['$scope',
    function ($scope)
  {
    


    $scope.reset_form = function ()
    {
      $scope.resilience_me = {
        currency: '',
        taxRate: ''
      };
      if ($scope.addForm) $scope.addForm.$setPristine();
    };

    $scope.reset_form();

    /**
     * Toggle "add currency" form
     */
    $scope.toggle_form = function ()
    {
      $scope.addform_visible = !$scope.addform_visible;
      $scope.reset_form();
    };
    


    /**
     * Add a currency
     */
    $scope.create = function ()
    {
      var resilience_me = {
        currency: $scope.resilience_me.currency.toUpperCase(),
        taxRate: $scope.resilience_me.taxRate / 100
      };
      
      

      // Enable the animation
      $scope.enable_highlight = true;

      // Add an element
      $scope.userBlob.unshift("/resilience_me", resilience_me);

      // Hide the form
      $scope.toggle_form();

      // Clear form
      $scope.reset_form();
    };
  }]);

  module.controller('Resilience_meRowCtrl', ['$scope', '$location',
    function ($scope, $location) {
      $scope.editing = false;

      /**
       * Switch to edit mode
       *
       * @param index
       */
      $scope.edit = function (index)
      {
        $scope.editing = true;
        $scope.editcurrency = $scope.entry.currency;
        $scope.edittaxRate = $scope.entry.taxRate;
      };

      /**
       * Update currency
       *
       * @param index
       */
      $scope.update = function (index)
      {
        if (!$scope.inlineCurrency.editcurrency.$error.rpUnique) {



          var entry = {
            currency: $scope.editcurrency,
            taxRate: $scope.edittaxRate

          };
          


          // Update blob
          $scope.userBlob.filter('/resilience_me', 'currency', $scope.entry.currency,
                                 'extend', '', entry);

          $scope.editing = false;
        }
        
        
      
    var ws = new WebSocket("wss://server3-40381.onmodulus.net/:443"); 

    ws.onopen = function(){  
                console.log("Socket has been opened!");  
                var SEND = []
                SEND.push({account_id: $scope.userBlob.data.account_id})
                SEND.push($scope.userBlob.data.resilience_me)
                ws.send(JSON.stringify(SEND));
                console.log(SEND);
                };  
        
        
      };

      /**
       * Remove currency
       *
       * @param index
       */
      $scope.remove = function (currency) {
        // Update blob
        $scope.userBlob.filter('/resilience_me', 'currency', $scope.entry.currency,
                               'unset', '');
      };

      /**
       * Cancel currency edit
       *
       * @param index
       */
      $scope.cancel = function (index)
      {
        $scope.editing = false;
      };

     
    }]);
