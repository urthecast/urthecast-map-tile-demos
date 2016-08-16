// Create a Leaflet map
var map = L.map('map').setView([
  37.78684346730307,
  -122.40559101104735
], 9);

/*
Copy the URL from the "Map Tiles URL" modal and paste it into the string below.

Then, click "Run" to see the same map tiles as what you see in Tools.

Need a URL?
 - Open Tools: https://developers.urthecast.com/tools
 - Adjust Filters to configure what imagery is visible
 - Click "Map Tiles URL" to display a modal showing the MTS URL
 - Click "Copy to Clipboard" to copy the URL
*/
var url = '';

// Append it to the map, if a url is specified
if (url !== '') {
  var ucTiles = L.tileLayer(url).addTo(map);
}
