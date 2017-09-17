# Orange Eats & Drinks

## Your interactive guide to Orange's restaurants, pubs & cafés

This web project provides an interactive, searchable map of some places to eat
and drink in Orange. I've built it as part of [Udacity's Front-End Web Developer
Nanodegree](https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001).

## Running the Application

You have two options for viewing and testing the site:

1. You can [visit the deployed site on GitHub Pages.](https://tobiasziegler.github.io/fend-p7-neighborhood-map/)

1. For testing and development on a local server:

	1. Clone or download the master branch.

	1. The repository's `master` branch doesn't include the Google Maps and
	Foursquare API keys that you'll need for the map to work. Obtain your own
	API keys by following the links to the APIs below, then ensure the `js`
	directory includes a `config.js` file that defines a JavaScript object with
	variables `GOOGLE_MAPS_KEY`, `FOURSQUARE_CLIENT_ID` and
	`FOURSQUARE_CLIENT_SECRET` set to the respective values. To help you, there
	is a `config-example.js` file that you can rename or copy and then edit to
	paste your key into the appropriate place.

	1. Run `npm install` to install dev dependencies.

	1. After changing any of the source files, run `gulp build` to update the site.

	1. Use `gulp serve` to open the site in your browser. Alternatively, you can use `gulp serve:src` to open the site from the development directory, which can be useful for debugging and testing with unminified code. Note that you'll be shown an ngrok URL in the terminal that can be used for access from other devices.

## Data Sources and APIs Used

- [Google Maps APIs](https://developers.google.com/maps/)
- [Foursquare API](https://developer.foursquare.com/)
