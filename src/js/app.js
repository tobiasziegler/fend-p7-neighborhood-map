// Create a map variable
var map,
	infoWindow;

// Initialize the map
function initMap() {
	// Use a constructor to create a new map JS object.
	map = new google.maps.Map(document.getElementById('map'), {
		center: {lat: -33.283333, lng: 149.1},
		zoom: 13
	});

	// Create an InfoWindow object that will be used for whichever marker is selected.
	infoWindow = new google.maps.InfoWindow();

	// Display markers and configure/retrieve information for each location
	vm.locations().forEach(function(location) {
		var marker = new google.maps.Marker({
			position: location.position,
			map: map,
			title: location.name
		});

		marker.addListener('click', function() {
			// Start the marker animation
			marker.setAnimation(google.maps.Animation.BOUNCE);
			// Set a timeout to stop the animation
			setTimeout(function() {
				marker.setAnimation(null)
			}, 2000);
			// Configure and display the InfoWindow for the marker
			infoWindow.marker = marker;
			infoWindow.setContent(getInfoWindowContent(location));
			infoWindow.open(map, marker);
		});

		location.marker = marker;
	});

	ko.applyBindings(vm);
}

// Assemble the content to display in the InfoWindow
function getInfoWindowContent(location) {
	var nameDiv = '<div>' + location.name + '<div>';
	var addressDiv = '<div>' + location.address + '</div>';

	return nameDiv + addressDiv;
}

// Locations array provides the model component of the app
var Locations = [
	{
		name: 'The Hotel Canobolas',
		address: '248 Summer St',
		position: { lat: -33.2844163, lng: 149.1018213 }
	},
	{
		name: 'Parkview Hotel Orange',
		address: '281 Summer St',
		position: { lat: -33.2836838, lng: 149.1020493 }
	},
	{
		name: 'Eighteen 70',
		address: '85 March St',
		position: { lat: -33.2783207 , lng: 149.0922561 }
	},
	{
		name: 'Sweet Sour Salt',
		address: '116 Summer St',
		position: { lat: -33.283295, lng: 149.0936483 }
	},
	{
		name: 'Bills Beans East Orange',
		address: '148 McLachlan St',
		position: { lat: -33.2849981, lng: 149.1060653 }
	},
	{
		name: 'Byng Street Cafe & Local Store',
		address: '47 Byng St',
		position: { lat: -33.2800973, lng: 149.0893966 }
	}
];

var ViewModel = function() {
	var self = this;

	self.locations = ko.observableArray(Locations);

	// Initialise the search query string, which is updated on user text input
	self.search = ko.observable('');

	// Filter the locations based on search query
	self.filteredLocations = ko.computed(function() {
		if (self.search() === '') {
			self.locations().forEach(function(loc) {
				if (loc.marker) {
					loc.marker.setVisible(true);
				}
			});
			return self.locations();
		} else {
			var query = self.search().toLowerCase();
			return ko.utils.arrayFilter(self.locations(), function(loc) {
				// Test whether the query matches the location name
				var match = loc.name.toLowerCase().indexOf(query) !== -1;
				if (loc.marker) {
					loc.marker.setVisible(match);
				}
				return match;
			});
		}
	});

	// Trigger a marker's click event when the location is selected from the list
	self.clickLocation = function(location) {
		google.maps.event.trigger(location.marker, 'click');
	};
};

var vm = new ViewModel();
