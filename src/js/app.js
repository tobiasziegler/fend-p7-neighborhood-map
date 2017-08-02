// Create a map variable
var map;

// Initialize the map
function initMap() {
	// Use a constructor to create a new map JS object.
	map = new google.maps.Map(document.getElementById('map'), {
		center: {lat: -33.283333, lng: 149.1},
		zoom: 13
	});
}

// Locations array provides the model component of the app
var Locations = [
	{
		name: 'The Hotel Canobolas',
		address: '248 Summer St',
		location: { lat: -33.2844163, lng: 149.1018213 }
	},
	{
		name: 'Parkview Hotel Orange',
		address: '281 Summer St',
		location: { lat: -33.2836838, lng: 149.1020493 }
	},
	{
		name: 'Eighteen 70',
		address: '85 March St',
		location: { lat: -33.2783207 , lng: 149.0922561 }
	},
	{
		name: 'Sweet Sour Salt',
		address: '116 Summer St',
		location: { lat: -33.283295, lng: 149.0936483 }
	},
	{
		name: 'Bills Beans East Orange',
		address: '148 McLachlan St',
		location: { lat: -33.2849981, lng: 149.1060653 }
	},
	{
		name: 'Byng Street Cafe & Local Store',
		address: '47 Byng St',
		location: { lat: -33.2800973, lng: 149.0893966 }
	}
];
