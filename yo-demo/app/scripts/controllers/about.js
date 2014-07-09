'use strict';

/**
 * @ngdoc function
 * @name yoDemoApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the yoDemoApp
 */
angular.module('yoDemoApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
