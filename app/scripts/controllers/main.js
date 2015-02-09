'use strict';

/**
 * @ngdoc function
 * @name reeseandmegApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the reeseandmegApp
 */
angular.module('reeseandmegApp')
  .controller('MainCtrl', function ($scope, uiGmapGoogleMapApi) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.isCollapsed = 1;

    uiGmapGoogleMapApi.then(function(maps) {
    	$scope.maps = maps;
		$scope.map = { center: { latitude: 32.4685616, longitude: -93.7398864}, zoom: 18 };
    });

  })
  .value('duScrollOffset', 50);
