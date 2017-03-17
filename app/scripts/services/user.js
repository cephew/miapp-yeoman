'use strict';

/**
 * @ngdoc service
 * @name miappApp.User
 * @description
 * # User
 * Factory in the miappApp.
 */
angular.module('miappApp')
  .factory('User', function (Config, $q, $http, $cookies) {
    // Service logic
    // ...
    function listado(){
    var deferred = $q.defer();

    var token = $cookies.get('token');
    var config = {
        headers:{
          'Authorization':'JWT' + token,
        }
    }
  }
    var meaningOfLife = 42;

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      }
    };
  });

  
