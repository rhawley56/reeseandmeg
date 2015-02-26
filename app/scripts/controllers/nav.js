'use strict';

/**
 * @ngdoc function
 * @name reeseandmegApp.controller:NavCtrl
 * @description
 * # NavCtrl
 * Controller of the reeseandmegApp
 */
angular.module('reeseandmegApp')
  .controller('NavCtrl', function ($rootScope, $log) {

  		var vm = this;

      vm.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
      ];

    	vm.isCollapsed = true;

    	vm.collapseToggle = function() {
    		vm.isCollapsed = !vm.isCollapsed;
    	}

    	$rootScope.$on('duScrollspy:becameActive', function (event, data) {

    		//setTimeout(function() {

				vm.isCollapsed = true;

				$rootScope.$apply();

  			//}, 500);
    	
    	});
  	});