/**
 * NETWORK
 *
 * The network service is used to communicate with the Ripple network.
 *
 * It encapsulates a ripple.Remote instance.
 */

var module = angular.module('network', []);

module.factory('rpNetwork', ['$rootScope', function($scope)
{
  /**
   * Manage network state.
   *
   * This class is intended to manage the connection status to the
   * Ripple network.
   *
   * Note that code in other places *is allowed* to call the Ripple
   * library directly. This is not to be intended to be an abstraction
   * layer on top of an abstraction layer.
   */
  var Network = function ()
  {
    this.remote = new ripple.Remote({servers:[ 'wss://s1.ripple.com:443' ]}, true);

  };

  Network.prototype.init = function ()
  {
    this.remote.connect();
  };


  return new Network();
}]);

