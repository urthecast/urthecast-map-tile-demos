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
Create a UC map tile layer with a cloud coverage restriction

We will be using the "cloud_coverage" parameter and applying the "lte" or "less than or equal to" filter to restrict the valid values. This looks like:

cloud_coverage_lte

Valid values for the cloud_coverage parameter are between 0 and 100.

So, for this example, let's set a maximum cloud coverage of 20%:

cloud_coverage_lte=20

This parameter is appended to the URL:
*/
var url = `https://tile-{s}.urthecast.com/v1/rgb/{z}/{x}/{y}?api_key=${apiKey}&api_secret=${apiSecret}&cloud_coverage_lte=20`;

// Append it to the map
var ucTiles = L.tileLayer(url).addTo(map);
