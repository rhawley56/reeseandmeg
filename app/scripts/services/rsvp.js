'use strict';

app.factory('Rsvp', ['$firebaseObject', 'FIREBASE_URI', 
	function ($firebaseObject, FIREBASE_URI) {
		return function(rsvpCode) {
		
			var ref = new Firebase(FIREBASE_URI);
  			var rsvpRef = ref.child(rsvpCode);

  			return $firebaseObject(rsvpRef);
		}
	}
]);