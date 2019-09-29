var overviewerConfig = {
    "CONST": {
        "image": {
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "spawnMarker": "icons/marker_home.png",
            "bedMarker": "bed.png",
            "signMarker": "signpost_icon.png",
            "defaultMarker": "signpost.png",
            "queryMarker": "icons/marker_location.png",
            "queryMarker2x": "icons/marker_location_2x.png",
            "spawnMarker2x": "icons/marker_home_2x.png"
        },
        "mapDivId": "mcmap",
        "LOWERRIGHT": 2,
        "tileSize": 384,
        "LOWERLEFT": 3,
        "UPPERLEFT": 0,
        "UPPERRIGHT": 1
    },
    "worlds": [
        "overworld_2019-09-03",
        "minecraft - nether"
    ],
    "tilesets": [
        {
            "north_direction": 0,
            "world": "overworld_2019-09-03",
            "poititle": "Markers",
            "imgextension": "png",
            "maxZoom": 10,
            "last_rendertime": 1567444452,
            "minZoom": 0,
            "zoomLevels": 10,
            "spawn": [
                -128,
                80,
                176
            ],
            "name": "Day",
            "base": "https://flexas.s3.amazonaws.com/",
            "defaultZoom": 1,
            "bgcolor": "#1a1a1a",
            "isOverlay": false,
            "showlocationmarker": true,
            "center": [
                -128,
                80,
                176
            ],
            "path": "2019-09-03_day"
        },
        {
            "north_direction": 0,
            "world": "overworld_2019-09-03",
            "poititle": "Markers",
            "imgextension": "png",
            "maxZoom": 10,
            "last_rendertime": 1567444452,
            "minZoom": 0,
            "zoomLevels": 10,
            "spawn": [
                -128,
                80,
                176
            ],
            "name": "Night",
            "base": "https://flexas.s3.amazonaws.com/",
            "defaultZoom": 1,
            "bgcolor": "#1a1a1a",
            "isOverlay": false,
            "showlocationmarker": true,
            "center": [
                -128,
                80,
                176
            ],
            "path": "2019-09-03_night"
        },
        {
            "north_direction": 0,
            "world": "minecraft - nether",
            "poititle": "Markers",
            "imgextension": "png",
            "maxZoom": 7,
            "last_rendertime": 1567376740,
            "minZoom": 0,
            "zoomLevels": 7,
            "spawn": false,
            "name": "Nether",
            "base": "",
            "defaultZoom": 1,
            "bgcolor": "#1a1a1a",
            "isOverlay": false,
            "showlocationmarker": true,
            "center": [
                -128,
                80,
                176
            ],
            "path": "nether"
        },
        {
            "north_direction": 0,
            "world": "overworld_2019-09-03",
            "poititle": "Markers",
            "imgextension": "png",
            "maxZoom": 10,
            "last_rendertime": 1567444452,
            "minZoom": 0,
            "zoomLevels": 10,
            "spawn": [
                -128,
                80,
                176
            ],
            "name": "Biome Coloring Overlay",
            "base": "",
            "defaultZoom": 1,
            "tilesets": [
                "day"
            ],
            "bgcolor": "#1a1a1a",
            "isOverlay": [
                "day"
            ],
            "showlocationmarker": true,
            "center": [
                -128,
                80,
                176
            ],
            "path": "overlay_biome"
        },
        {
            "north_direction": 0,
            "world": "overworld_2019-09-03",
            "poititle": "Markers",
            "imgextension": "png",
            "maxZoom": 10,
            "last_rendertime": 1567444452,
            "minZoom": 0,
            "zoomLevels": 10,
            "spawn": [
                -128,
                80,
                176
            ],
            "name": "Mob Spawnable Areas Overlay",
            "base": "",
            "defaultZoom": 1,
            "tilesets": [
                "day"
            ],
            "bgcolor": "#1a1a1a",
            "isOverlay": [
                "day"
            ],
            "showlocationmarker": true,
            "center": [
                -128,
                80,
                176
            ],
            "path": "overlay_mobs"
        },
        {
            "north_direction": 0,
            "world": "overworld_2019-09-03",
            "poititle": "Markers",
            "imgextension": "png",
            "maxZoom": 10,
            "last_rendertime": 1567444452,
            "minZoom": 0,
            "zoomLevels": 10,
            "spawn": [
                -128,
                80,
                176
            ],
            "name": "Slime Chunk Overlay",
            "base": "",
            "defaultZoom": 1,
            "tilesets": [
                "day"
            ],
            "bgcolor": "#1a1a1a",
            "isOverlay": [
                "day"
            ],
            "showlocationmarker": true,
            "center": [
                -128,
                80,
                176
            ],
            "path": "overlay_slime"
        }
    ],
    "map": {
        "north_direction": "lower-left",
        "cacheTag": "1567505472",
        "debug": true,
        "controls": {
            "compass": true,
            "spawn": true,
            "pan": true,
            "coordsBox": true,
            "overlays": true,
            "mapType": true,
            "zoom": true
        }
    }
};
