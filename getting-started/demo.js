// Get the user's API key via prompt
if (!localStorage.getItem('uc_api_key') || localStorage.getItem('uc_api_key') == "null") {
  localStorage.setItem(
    'uc_api_key',
    prompt('What is your UrtheCast API key?')
  );
}

// Get the user's API secret via prompt
if (!localStorage.getItem('uc_api_secret') || localStorage.getItem('uc_api_secret') == "null") {
  localStorage.setItem(
    'uc_api_secret',
    prompt('What is your UrtheCast API secret?')
  );
}

// Prompt user to supply a scene id
// - If you do specify a scene, that single scene will be rendered
// - If you do not specify a scene, all scenes will be rendered
if (!localStorage.getItem('scene_id') || localStorage.getItem('scene_id') == "null") {
  localStorage.setItem(
    'scene_id',
    prompt('Optional: Enter scene id.')
  );
}

// Initialize variables
var apiKey = localStorage.getItem('uc_api_key'),
  apiSecret = localStorage.getItem('uc_api_secret'),
  sceneId = localStorage.getItem('scene_id');

// Create a Leaflet map
var map = L.map('map');

// Append a base map layer
var baseMapTileLayerUrl = `https://{s}.tiles.mapbox.com/v3/urthecast2.k577e221/{z}/{x}/{y}.png`;
var baseTiles = L.tileLayer(baseMapTileLayerUrl).addTo(map);

// Append an UrtheCast tile layer to the map
// - Render a single scene if scene id supplied by user
// - Otherwise, show all scenes
var ucTileLayerUrl = `https://tile-{s}.urthecast.com/v1/rgb/{z}/{x}/{y}?api_key=${apiKey}&api_secret=${apiSecret}`;

if (sceneId) {
  ucTileLayerUrl += `&id=${sceneId}`;
}

var ucTiles = L.tileLayer(url).addTo(map);

// Center the map around downtown San Francisco
map.setView([
  37.78684346730307,
  -122.40559101104735
], 9);
