/*

// place custom markers with
const marker4latlng = overviewer.util.fromWorldToLatLng(0,0,0, overviewerConfig.tilesets[0])

const marker4 = new L.marker(marker4latlng, {draggable: 'true'})
marker4.addTo(overviewer.map);

marker4.on('dragend', function(event) {
  var position = marker4.getLatLng();
  console.log(position, overviewer.util.fromLatLngToWorld(
    position.lat,
    position.lng,
    overviewerConfig.tilesets[0]
  ))

  console.log(`
{
  "x": ,
  "y": 65.0,
  "z": 201,
  "hovertext": "Ceci est un endroit",
  "text": "Ceci est un endroit",

},
  `)
});

*/



markersDB["CustomMarkers"] = {
  "name": "Players",
  "created": false,
  "raw": [
    {
      "x": -464,
      "hovertext": "Ceci est un endroit",
      "z": 201,
      "text": "Ceci est un endroit",
      "y": 65.0
    },
    {
      "x": -2665,
      "y": 864,
      "z": 64,
      "hovertext": "Terra incognita",
      "text": "Personne ne s'est encore aventuré jusqu'ici",
    },
    {
      "x": -6913,
      "y": 3413,
      "z": 65,
      "hovertext": "Terres rouges",
      "text": "Terres rouges",
    },
    // with marker4 tool
    {
      "x": -494,
      "y": 64,
      "z": 563,
      "hovertext": "Maison de Jean",
      "text": "Maison de Jean",
    },
    {
      "x": -456,
      "y": 64,
      "z": 400,
      "hovertext": "Verrière",
      "text": "Verrière",
    },
    {
      "x": -1651,
      "y": 64,
      "z": 428,
      "hovertext": "Moulin",
      "text": "Moulin",
    },
    {
      "x": -34,
      "y": 64,
      "z": -144,
      "hovertext": "Rift",
      "text": "Rift",
    },
    {
      "x": 114,
      "y": 64,
      "z": -150,
      "hovertext": "Refuge",
      "text": "Refuge",
    },
  ]
}

markers["2019-09-03_day"] = [
  {
    displayName: "Points of Interest",
    groupName: "CustomMarkers",
    checked: true,
    createInfoWindow: true,
    icon: "map-marker.png"
  },
];
markers["2019-09-03_night"] = [
  {
    displayName: "Points of Interest",
    groupName: "CustomMarkers",
    checked: true,
    createInfoWindow: true,
    icon: "map-marker.png"
  },
];
