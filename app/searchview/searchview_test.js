'use strict';

describe('myApp.searchview module', function() {
  beforeEach(module('myApp.searchview'));

  describe('searchview controller', function() {
    var scope, ctrl;

    beforeEach(inject(function($rootScope, $controller) {
      scope = $rootScope.$new();
      ctrl = $controller('SearchViewCtrl', {$scope: scope});
    }));

    it('should ...', function() {
      expect(ctrl).toBeDefined();
    });

  });
});