'use strict';

/**
 * @ngdoc function
 * @name miappApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the miappApp
 */
angular.module('miappApp')
  .controller('MainCtrl', function ($scope, User, $cookies) {

          $scope.onSubmit=function(){
              if($scope.loginForm.$valid){
              	user.login(scope.usuario)
              		.then(function(response){
              			console.log(response);
              			scopeList.put('token', response.data.token)
              			var token = $cookies.get('token');
              			console.log('token');
              		})

              }
          }
      });

 
