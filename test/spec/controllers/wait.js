'use strict';

describe('Controller: WaitCtrl', function () {

  // load the controller's module
  beforeEach(module('hitchARideApp'));

  var WaitCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller) {
    scope = {};
    WaitCtrl = $controller('WaitCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
