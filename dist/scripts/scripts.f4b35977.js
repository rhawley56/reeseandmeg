"use strict";angular.module("reeseandmegApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch","ui.bootstrap","duScroll","uiGmapgoogle-maps"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl"}).otherwise({redirectTo:"/"})}]).config(["$locationProvider",function(a){a.html5Mode(!0)}]).config(["uiGmapGoogleMapApiProvider",function(a){a.configure({key:"AIzaSyBIkSZ8FHVZUTysMFS13rlLsm3WAyTc2gs",v:"3.17",libraries:"places"})}]),angular.module("reeseandmegApp").controller("MainCtrl",["$scope","uiGmapGoogleMapApi",function(a,b){var c=this;c.hide=!0,a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"],b.then(function(a){a.visualRefresh=!0,c.maps=a,c.map={center:{latitude:32.4685616,longitude:-93.7398864},zoom:18},c.marker={id:0,coords:{latitude:32.468866,longitude:-93.739868},options:{place:{location:{lat:32.468866,lng:-93.739868},placeId:"ChIJBem33U0tMYYRinQiv96IDpI"}}},c.map.options={maptype:google.maps.MapTypeId.ROADMAP,zoom:14,markers:[{latitude:32.4685616,longitude:-93.7398864,html:"<strong>First Baptist Church</strong>",popup:!0},{latitude:-33.905485,longitude:151.169131,html:"<strong>Comfort Inn</strong>",popup:!0}],panControl:!0,zoomControl:!0,mapTypeControl:!0,scaleControl:!0,streetViewControl:!0,scrollwheel:!1,styles:[{stylers:[{hue:"#00c0b6"},{gamma:1},{saturation:-50}]}],onComplete:function(){var a=$("#location_map").data("gmap").gmap;window.onresize=function(){google.maps.event.trigger(a,"resize"),$("#location_map").gMap("fixAfterResize")}}}})}]).value("duScrollOffset",50).value("duScrollDuration",2e3),angular.module("reeseandmegApp").controller("AboutCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("reeseandmegApp").controller("NavCtrl",["$rootScope","$log",function(a){var b=this;b.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"],b.isCollapsed=!0,b.collapseToggle=function(){b.isCollapsed=!b.isCollapsed},a.$on("duScrollspy:becameActive",function(){b.isCollapsed=!0,a.$apply()})}]),function(){function a(){return jQuery(window).height()}function b(){return jQuery("#nav").outerHeight()}function c(){return a()-b()}function d(){jQuery("#top").height(c())}jQuery(window).ready(function(){var e,f,g;e=a(),f=c(),g=b(),jQuery(window).on("resize",function(){d()}),d();var h=new ScrollMagic;new ScrollScene({triggerElement:"#nav",triggerHook:"0"}).setPin("#nav").setClassToggle(".navbar","top-nav-collapse navbar-fixed-top").addTo(h);var i=new ScrollMagic;new ScrollScene({triggerElement:".parallax-bg-1",duration:$(window).height()+$(".parallax").height(),offset:0}).triggerHook("onEnter").setTween(TweenMax.fromTo(".parallax-bg-1",1,{"background-position-y":"-400px",ease:Linear.easeNone},{"background-position-y":"-200px",ease:Linear.easeNone})).addTo(i);var j=new ScrollMagic;new ScrollScene({triggerElement:".parallax-bg-2",duration:$(window).height()+$(".parallax").height(),offset:0}).triggerHook("onEnter").setTween(TweenMax.fromTo(".parallax-bg-2",1,{"background-position-y":"-400px",ease:Linear.easeNone},{"background-position-y":"-200px",ease:Linear.easeNone})).addTo(j)})}();