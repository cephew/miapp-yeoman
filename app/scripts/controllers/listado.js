'use strict';

/**
 * @ngdoc function
 * @name miappApp.controller:ListadoCtrl
 * @description
 * # ListadoCtrl
 * Controller of the miappApp
 */
angular.module('miappApp')
  .controller('ListadoCtrl', 
  	function ($scope, User) {

  		user.listado()
  			.then(function(response){
  				$scope.usuarios = response.data.data
  			})
   
  });
