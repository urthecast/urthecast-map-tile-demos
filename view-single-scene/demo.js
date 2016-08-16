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
], 9);

/*
Create a UC map tile layer with:

* Only 1 Theia scene

To achieve this, we will use the "id" parameter with a valid scene ID we found previously using the Archive API:

id=I3-z5GkhQjOZWCmp5BYqVQ

This parameter is appended to the URL to view the single scene:
*/
var url = `https://tile-{s}.urthecast.com/v1/rgb/{z}/{x}/{y}?api_key=${apiKey}&api_secret=${apiSecret}&id=I3-z5GkhQjOZWCmp5BYqVQ`;

// Append it to the map
var ucTiles = L.tileLayer(url).addTo(map);
