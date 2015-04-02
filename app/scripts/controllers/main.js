'use strict';

/**
 * @ngdoc function
 * @name reeseandmegApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the reeseandmegApp
 */
angular.module('reeseandmegApp')
  .controller('MainCtrl', function ($scope, uiGmapGoogleMapApi) {

    var vm = this;

    vm.hide = true;

    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    uiGmapGoogleMapApi.then(function(maps) {

      maps.visualRefresh = true;

    	vm.maps = maps;
		  
      vm.map = { center: { latitude: 32.4685616, longitude: -93.7398864}, zoom: 18 };

      vm.marker = {
        id: 0,
        coords: {latitude: 32.468866, longitude: -93.739868},
        options: {
          place: {
            location: {"lat" : 32.468866, "lng" : -93.739868},
            placeId: 'ChIJBem33U0tMYYRinQiv96IDpI'
          }
        }
      }

      //Place ID: ChIJBem33U0tMYYRinQiv96IDpI
      



      vm.map.options = {
        maptype: google.maps.MapTypeId.ROADMAP, 
        zoom: 14, 
        markers: [
          {
            latitude: 32.4685616, 
            longitude: -93.7398864, 
            html: "<strong>First Baptist Church</strong>", 
            popup: true,               
          }, {
            latitude: -33.905485, 
            longitude: 151.169131, 
            html: "<strong>Comfort Inn</strong>", 
            popup: true,               
          } 
        ], 
        panControl: true, 
        zoomControl: true, 
        mapTypeControl: true, 
        scaleControl: true, 
        streetViewControl: true, 
        scrollwheel: false, 
        styles: [ { "stylers": [ { "hue": "#00c0b6" }, { "gamma": 1 }, { "saturation": -50 } ] } ], 
          onComplete: function() {
            // Resize and re-center the map on window resize event
            var gmap = $("#location_map").data('gmap').gmap;
            window.onresize = function(){
              google.maps.event.trigger(gmap, 'resize');
              $("#location_map").gMap('fixAfterResize');
          };
        }
      };
    });

  })
  .value('duScrollOffset', 50)
  .value('duScrollDuration', 1000);
