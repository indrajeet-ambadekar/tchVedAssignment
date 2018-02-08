'use strict';

/**
 * @ngdoc function
 * @name techvedApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the techvedApp
 */
 angular.module('techvedApp')
 .controller('MainCtrl', function ($scope, $rootScope) {

 	$scope.number = 5;
 	$scope.getNumber = function(num) {
 		return new Array(num);   
 	}
 	$scope.posts=[
 	{
 		id:1,
 		comments:5,
 		views:10,
 		text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
 	},
 	{
 		id:2,
 		comments:3,
 		views:2,
 		text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
 	}
 	];
 }).filter('views', function() {
 	return function(count) {
 		if(count==1){
 			return count+" view";
 		}
 		else{
 			return count+" views";
 		}
 	}
 }).filter('comments', function() {
 	return function(count) {
 		if(count==1){
 			return count+" comment";
 		}
 		else{
 			return count+" comments";
 		}
 	}
 });
