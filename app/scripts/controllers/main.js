'use strict';

/**
 * @ngdoc function
 * @name reeseandmegApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the reeseandmegApp
 */
angular.module('reeseandmegApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  })
  .value('duScrollOffset', 50);
