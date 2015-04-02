'use strict';

angular.module('myApp.searchview', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/searchview', {
    templateUrl: 'searchview/searchview.html',
    controller: 'SearchViewCtrl'
  });
}])

.controller('SearchViewCtrl', function($scope) {
  $scope.stocks = [
    {
      name: 'Hennes & Mauritz B',
      shortname: 'HM B',
      change: 0.40
    },
    {
      name: 'Vardia Insurance Group',
      shortname: 'VARDIA',
      change: -3.40
    },
    {
      name: 'Investor A',
      shortname: 'INVE A',
      change: 2.34
    }
  ];
});