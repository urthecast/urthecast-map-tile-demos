// Get the user's API key via prompt
if (!localStorage.getItem('uc_api_key') || localStorage.getItem('uc_api_key') == "null") {
  localStorage.setItem(
    'uc_api_key',
    prompt('What is your UC API key?')
  );
}

// Get the user's API secret via prompt
if (!localStorage.getItem('uc_api_secret') || localStorage.getItem('uc_api_secret') == "null") {
  localStorage.setItem(
    'uc_api_secret',
    prompt('What is your UC API secret?')
  );
}

var apiKey = localStorage.getItem('uc_api_key'),
  apiSecret = localStorage.getItem('uc_api_secret');

// Create a Leaflet map
var map = L.map('map').setView([
  37.78684346730307,
  -122.40559101104735
], 9);

/*
Create a UC map tile layer with:

* Only Landsat8 imagery
* Cloud coverage no more than 20%
* Acquired between June 1st and June 30th 2015

These filters look like the following:

sensor_platform=landsat-8
cloud_coverage_lte=20
acquired_gte=2015-06-01
acquired_lte=2015-06-30

"_lte" is the "less than or equal to" filter
"_gte" is the "greater than or equal to" filter

These parameters can be appended to the URL to view the map:
*/
var url = `https://tile-{s}.urthecast.com/v1/rgb/{z}/{x}/{y}?api_key=${apiKey}&api_secret=${apiSecret}&sensor_platform=landsat-8&cloud_coverage_lte=20&acquired_gte=2015-06-01&acquired_lte=2015-06-30`;

// Append it to the map
var ucTiles = L.tileLayer(url).addTo(map);
