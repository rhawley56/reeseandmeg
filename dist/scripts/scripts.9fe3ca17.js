"use strict";angular.module("reeseandmegApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch","ui.bootstrap","duScroll","uiGmapgoogle-maps"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl"}).otherwise({redirectTo:"/"})}]).config(["$locationProvider",function(a){a.html5Mode(!0)}]).config(["uiGmapGoogleMapApiProvider",function(a){a.configure({v:"3.17",libraries:"weather,geometry,visualization"})}]),angular.module("reeseandmegApp").controller("MainCtrl",["$scope","uiGmapGoogleMapApi",function(a,b){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"],b.then(function(b){a.maps=b,a.map={center:{latitude:32.4685616,longitude:-93.7398864},zoom:18}})}]).value("duScrollOffset",50),angular.module("reeseandmegApp").controller("AboutCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("reeseandmegApp").controller("NavCtrl",["$rootScope","$log",function(a){var b=this;b.isCollapsed=!0,b.collapseToggle=function(){b.isCollapsed=!b.isCollapsed},a.$on("duScrollspy:becameActive",function(){b.isCollapsed=!0,a.$apply()})}]);