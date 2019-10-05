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

markers["2019-09-10_day"] = [
  {
    displayName: "Points of Interest",
    groupName: "CustomMarkers",
    checked: false,
    createInfoWindow: true,
    icon: "map-marker.png"
  },
];
markers["2019-09-10_night"] = [
  {
    displayName: "Points of Interest",
    groupName: "CustomMarkers",
    checked: false,
    createInfoWindow: true,
    icon: "map-marker.png"
  },
];

markersDB["Signs_annwn"] = {
  "name": "Signs",
  "created": false,
  "raw": [
    {
      "y": 109,
      "x": 140,
      "z": 16,
      "hovertext": "reserve\npar\nclem et \narthur",
      "text": "reserve\npar\nclem et \narthur"
    },
    {
      "y": 69,
      "x": 190,
      "z": 9,
      "hovertext": "Port des\nMarchands\n\n",
      "text": "Port des\nMarchands\n\n"
    },
    {
      "y": 64,
      "x": -196,
      "z": 197,
      "hovertext": "tunnel\nDirection\nfin\ndu monde",
      "text": "tunnel\nDirection\nfin\ndu monde"
    },
    {
      "y": 68,
      "x": -189,
      "z": 174,
      "hovertext": "\n\n\n",
      "text": "\n\n\n"
    },
    {
      "y": 68,
      "x": -180,
      "z": 174,
      "hovertext": "\n\n\n",
      "text": "\n\n\n"
    },
    {
      "y": 68,
      "x": -180,
      "z": 177,
      "hovertext": "\n\n\n",
      "text": "\n\n\n"
    },
    {
      "y": 66,
      "x": -154,
      "z": 196,
      "hovertext": "Merci de ne pas\njeter D'or\ndedans\n",
      "text": "Merci de ne pas\njeter D'or\ndedans\n"
    },
    {
      "y": 64,
      "x": -139,
      "z": 204,
      "hovertext": "\nChenil\n\n",
      "text": "\nChenil\n\n"
    },
    {
      "y": 66,
      "x": -136,
      "z": 240,
      "hovertext": "Zombis\nOO\n\"\n//",
      "text": "Zombis\nOO\n\"\n//"
    },
    {
      "y": 66,
      "x": -138,
      "z": 240,
      "hovertext": "Loups\n\n\n",
      "text": "Loups\n\n\n"
    },
    {
      "y": 66,
      "x": -135,
      "z": 240,
      "hovertext": "Vache\nChampignon\n\n",
      "text": "Vache\nChampignon\n\n"
    },
    {
      "y": 66,
      "x": -140,
      "z": 240,
      "hovertext": "guepar\n\n\n",
      "text": "guepar\n\n\n"
    },
    {
      "y": 66,
      "x": -134,
      "z": 240,
      "hovertext": "Araign\u00e9s\n\n\n",
      "text": "Araign\u00e9s\n\n\n"
    },
    {
      "y": 66,
      "x": -137,
      "z": 240,
      "hovertext": "Zombis \nCochon \nm\u00e9chant !\n",
      "text": "Zombis \nCochon \nm\u00e9chant !\n"
    },
    {
      "y": 36,
      "x": -116,
      "z": 168,
      "hovertext": "Saut de la \nmort\nqui tue\n",
      "text": "Saut de la \nmort\nqui tue\n"
    },
    {
      "y": 66,
      "x": -119,
      "z": 197,
      "hovertext": "Le Peage\n\n\n",
      "text": "Le Peage\n\n\n"
    },
    {
      "y": 64,
      "x": -118,
      "z": 219,
      "hovertext": "gare\n\n\n",
      "text": "gare\n\n\n"
    },
    {
      "y": 64,
      "x": -111,
      "z": 186,
      "hovertext": "Maison\ndu\nCharcutier\n",
      "text": "Maison\ndu\nCharcutier\n"
    },
    {
      "y": 63,
      "x": -109,
      "z": 194,
      "hovertext": "\nPaye\nou\nMeurs",
      "text": "\nPaye\nou\nMeurs"
    },
    {
      "y": 70,
      "x": 159,
      "z": -71,
      "hovertext": "\nSalle de Traite\n\n",
      "text": "\nSalle de Traite\n\n"
    },
    {
      "y": 70,
      "x": 148,
      "z": -67,
      "hovertext": "\nFerme de\nCacao\n",
      "text": "\nFerme de\nCacao\n"
    },
    {
      "y": 72,
      "x": 148,
      "z": -50,
      "hovertext": "\n\n\n",
      "text": "\n\n\n"
    },
    {
      "y": 72,
      "x": 157,
      "z": -40,
      "hovertext": "\n\n\n",
      "text": "\n\n\n"
    },
    {
      "y": 72,
      "x": 148,
      "z": -47,
      "hovertext": "\n\n\n",
      "text": "\n\n\n"
    },
    {
      "y": 72,
      "x": 148,
      "z": -41,
      "hovertext": "\n\n\n",
      "text": "\n\n\n"
    },
    {
      "y": 73,
      "x": 155,
      "z": -40,
      "hovertext": "Vente\nBois\nde Chaufage\n",
      "text": "Vente\nBois\nde Chaufage\n"
    },
    {
      "y": 72,
      "x": 148,
      "z": -44,
      "hovertext": "\n\n\n",
      "text": "\n\n\n"
    },
    {
      "y": 74,
      "x": 146,
      "z": -46,
      "hovertext": "Minist\u00e8re\ndes arm\u00e9s\n\n",
      "text": "Minist\u00e8re\ndes arm\u00e9s\n\n"
    },
    {
      "y": 72,
      "x": 160,
      "z": -40,
      "hovertext": "\n\n\n",
      "text": "\n\n\n"
    },
    {
      "y": 81,
      "x": 169,
      "z": -48,
      "hovertext": "\n\n\n",
      "text": "\n\n\n"
    },
    {
      "y": 81,
      "x": 171,
      "z": -48,
      "hovertext": "\n\n\n",
      "text": "\n\n\n"
    },
    {
      "y": 74,
      "x": 164,
      "z": -42,
      "hovertext": "\nHotel de Ville\n\n",
      "text": "\nHotel de Ville\n\n"
    },
    {
      "y": 82,
      "x": 167,
      "z": -44,
      "hovertext": "\nBureau du\nBourgmestre\n",
      "text": "\nBureau du\nBourgmestre\n"
    },
    {
      "y": 72,
      "x": 164,
      "z": -32,
      "hovertext": "\nBanque Royale\n\n",
      "text": "\nBanque Royale\n\n"
    },
    {
      "y": 72,
      "x": 163,
      "z": -25,
      "hovertext": "minist\u00e8re\nde la culture\n\n",
      "text": "minist\u00e8re\nde la culture\n\n"
    },
    {
      "y": 70,
      "x": 172,
      "z": -25,
      "hovertext": "direction stade\n\n\n",
      "text": "direction stade\n\n\n"
    },
    {
      "y": 78,
      "x": 190,
      "z": -27,
      "hovertext": "SPA\n\n\n",
      "text": "SPA\n\n\n"
    },
    {
      "y": 73,
      "x": 181,
      "z": -19,
      "hovertext": "\n\n\n",
      "text": "\n\n\n"
    },
    {
      "y": 69,
      "x": 180,
      "z": -22,
      "hovertext": "Minist\u00e8re\nde\nL'agriculture\n",
      "text": "Minist\u00e8re\nde\nL'agriculture\n"
    },
    {
      "y": 73,
      "x": 181,
      "z": -23,
      "hovertext": "\n\n\n",
      "text": "\n\n\n"
    },
    {
      "y": 72,
      "x": 183,
      "z": -11,
      "hovertext": "minist\u00e8re\ndu Commerce\n\n",
      "text": "minist\u00e8re\ndu Commerce\n\n"
    },
    {
      "y": 92,
      "x": 203,
      "z": -28,
      "hovertext": "porte\n\n\n",
      "text": "porte\n\n\n"
    },
    {
      "y": 92,
      "x": 205,
      "z": -25,
      "hovertext": "zombie\n\n\n",
      "text": "zombie\n\n\n"
    },
    {
      "y": 90,
      "x": 207,
      "z": -25,
      "hovertext": "squelettes\n\n\n",
      "text": "squelettes\n\n\n"
    },
    {
      "y": 92,
      "x": 214,
      "z": -25,
      "hovertext": "araign\u00e9\n\n\n",
      "text": "araign\u00e9\n\n\n"
    },
    {
      "y": 90,
      "x": 212,
      "z": -25,
      "hovertext": "homme cochon\n\n\n",
      "text": "homme cochon\n\n\n"
    },
    {
      "y": 125,
      "x": 239,
      "z": -79,
      "hovertext": "\n\n\n",
      "text": "\n\n\n"
    },
    {
      "y": 105,
      "x": 228,
      "z": -78,
      "hovertext": "PARLE OU SAUTE\n\n\n",
      "text": "PARLE OU SAUTE\n\n\n"
    },
    {
      "y": 125,
      "x": 241,
      "z": -79,
      "hovertext": "\n\n\n",
      "text": "\n\n\n"
    },
    {
      "y": 111,
      "x": 269,
      "z": -81,
      "hovertext": "LABORATOIRE DE\nRECHERCHE EN\nARMEMENT\n",
      "text": "LABORATOIRE DE\nRECHERCHE EN\nARMEMENT\n"
    }
  ]
};

markersDB["Players_annwn"] = {
  "name": "Players",
  "created": false,
  "raw": [
    {
      "icon": "https://overviewer.org/avatar/Syrozz",
      "y": 40.0,
      "text": "Last known location for Syrozz",
      "x": -243.30000001192093,
      "z": 235.69999998807907,
      "hovertext": "Last known location for Syrozz"
    },
    {
      "icon": "https://overviewer.org/avatar/lecharcutier",
      "y": 67.50606496987315,
      "text": "Last known location for lecharcutier",
      "x": 378.96690177595656,
      "z": -103.77697800084701,
      "hovertext": "Last known location for lecharcutier"
    }
  ]
};

markers["annwn_night"] = [
  {
    "checked": false,
    "groupName": "Players_annwn",
    "displayName": "Players",
    "createInfoWindow": true,
    "icon": "signpost_icon.png"
  },
  {
    "checked": false,
    "groupName": "Signs_annwn",
    "displayName": "Signs",
    "createInfoWindow": true,
    "icon": "signpost_icon.png"
  }
];

markers["annwn_day"] = [
  {
    "checked": false,
    "groupName": "Players_annwn",
    "displayName": "Players",
    "createInfoWindow": true,
    "icon": "signpost_icon.png"
  },
  {
    "checked": false,
    "groupName": "Signs_annwn",
    "displayName": "Signs",
    "createInfoWindow": true,
    "icon": "signpost_icon.png"
  }
];
