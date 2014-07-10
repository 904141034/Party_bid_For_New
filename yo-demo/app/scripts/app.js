'use strict';

/**
 * @ngdoc overview
 * @name yoDemoApp
 * @description
 * # yoDemoApp
 *
 * Main module of the application.
 */
angular
  .module('yoDemoApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'


  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/activity_create.html',
        controller: 'activity_createCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/activity_create',{
        templateUrl: 'views/activity_create.html',
        controller: 'activity_createCtrl'
       })
        .when('/activity_list',{
         templateUrl: 'views/activity_list.html',
         controller: 'activity_listCtrl'
        })
      .otherwise({
        redirectTo: '/'
      });
  });
