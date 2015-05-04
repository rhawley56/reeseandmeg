'use strict';

/**
 * @ngdoc function
 * @name reeseandmegApp.controller:RsvpCtrl
 * @description
 * # RsvpCtrl
 * Controller of the reeseandmegApp
 */
app.controller('RsvpCtrl', ['$scope', 'Rsvp', 
	function ($scope, Rsvp) {

		var vm = this;

		vm.rsvpObj = null;
		vm.alerts = [];
		vm.updateSuccess = false;

		vm.awesomeThings = [
			'HTML5 Boilerplate',
			'AngularJS',
			'Karma'
		];

		vm.checkCode = function() {

			var rsvpObj = null;

			if(vm.rsvpCode.length === 6 ) {

				rsvpObj = new Rsvp(vm.rsvpCode);

				rsvpObj.$loaded(function() {
   					vm.dataExists = rsvpObj.$value !== null;
				});

				if(vm.dataExists) {
					vm.hasSuccess = 'has-success';
					vm.glyphiconOk = 'glyphicon-ok';
				}

			} else {
				vm.hasSuccess = '';
				vm.glyphiconOk = '';
				vm.rsvpObj = null;
			}

		};

		vm.getData = function() {

			var rsvpObj = new Rsvp(vm.rsvpCode);

			if(rsvpObj.$id === vm.rsvpCode) {
				vm.hasSuccess = 'has-success';
				vm.glyphiconOk = 'glyphicon-ok';

				vm.rsvpObj = rsvpObj;
				vm.updateSuccess = false;
				vm.alerts = [];
			} else {
				vm.hasSuccess = '';
				vm.glyphiconOk = '';
			}

		};

		vm.saveData = function() {
			vm.rsvpObj.$save();

			vm.updateSuccess = true;

			vm.addAlert({
				type: 'success',
				msg: 'Thank you! You have successfully submitted your RSVP.'
			});
		};


		vm.addAlert = function(alert) {
			vm.alerts.push(alert);
		};

		vm.closeAlert = function(index) {
			vm.alerts.splice(index, 1);
		};
	}

]);