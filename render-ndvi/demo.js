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
  41.3,
  -117.40559101104735
], 8);

/*
Create a UC map tile layer with:

* Only Theia imagery
* Max cloud coverage of 30%
* NDVI renderer

sensor_platform=theia
cloud_coverage_lte=30

The above two parameters are appended the the URL, whereas, the NDVI renderer is specified within the URL path, after the "v1".
*/
var url = `https://tile-{s}.urthecast.com/v1/ndvi/{z}/{x}/{y}?api_key=${apiKey}&api_secret=${apiSecret}&sensor_platform=theia&cloud_coverage_lte=30`;

// Append it to the map
var ucTiles = L.tileLayer(url).addTo(map);
