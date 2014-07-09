'use strict';

/**
 * @ngdoc function
 * @name yoDemoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yoDemoApp
 */
angular.module('yoDemoApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
