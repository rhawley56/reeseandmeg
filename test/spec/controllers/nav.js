'use strict';

describe('Controller: NavCtrl', function () {

  // load the controller's module
  beforeEach(module('reeseandmegApp'));

  var scope,
      controller;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    controller = $controller;
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    var vm = controller('NavCtrl', {$scope: scope});
    expect(vm.awesomeThings.length).toBe(3);
  });
});