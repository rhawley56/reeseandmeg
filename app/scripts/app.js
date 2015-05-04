/* global app:true */
/* exported app */
'use strict';

/**
 * @ngdoc overview
 * @name reeseandmegApp
 * @description
 * # reeseandmegApp
 *
 * Main module of the application.
 */
var app = angular
  .module('reeseandmegApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap',
    'duScroll',
    'uiGmapgoogle-maps',
    'firebase'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .config(function ($locationProvider) {
    $locationProvider.html5Mode(true);
  })
  .config(function(uiGmapGoogleMapApiProvider) {
    uiGmapGoogleMapApiProvider.configure({
        key: 'AIzaSyBIkSZ8FHVZUTysMFS13rlLsm3WAyTc2gs',
        v: '3.17',
        libraries: 'places'
    });
  })
  .constant('FIREBASE_URI', 'https://reeseandmeg.firebaseio.com/rsvps/');


