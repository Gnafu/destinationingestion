{
   "geoStoreBase":"http://destination.geo-solutions.it/geostore-ingestion/",
   "defaultLanguage": "it",
   "advancedScaleOverlay": true,
   "tab": true,
   "gsSources":{ 
        "mapquest": {
			"ptype": "gxp_mapquestsource"
		}, 
		"osm": { 
			"ptype": "gxp_osmsource"
		},
		"google": {
			"ptype": "gxp_googlesource" 
		}, 
		"ol": { 
			"ptype": "gxp_olsource" 
        }
    },
    "_gsSources":{
        "staging": {
            "ptype": "gxp_wmssource",
            "title": "DESTINATION Staging",
            "version":"1.1.1",
            "url": "http://destination.geo-solutions.it/geoserver-ingestion/destination_staging/ows",
            "layerBaseParams": {           
                "format": "image/png8"
            },
			"loadingProgress": true
        },
		"prod": {
            "ptype": "gxp_wmssource",
            "title": "DESTINATION Production",
            "version":"1.1.1",
            "url": "http://destination.geo-solutions.it/geoserver-ingestion/destination/ows",
            "layerBaseParams": {           
                "format": "image/png8"
            },
			"loadingProgress": true
        }
	},
	"map": {
		"projection": "EPSG:3857",
        "units": "m",
        "center": [1162101, 5468248],
        "zoom": 9,
        "maxExtent": [
				-20037508.34,-20037508.34,
				20037508.34,20037508.34
        ],
		"layers": [
			{
				"source": "mapquest",
				"title": "MapQuest OpenStreetMap",
				"name": "osm",
				"group": "background"
			},{
				"source": "google",
				"title": "Google Roadmap",
				"name": "ROADMAP",
				"group": "background"
			},{
				"source": "google",
				"title": "Google Terrain",
				"name": "TERRAIN",
				"group": "background"
			},{
				"source": "google",
				"title": "Google Hybrid",
				"name": "HYBRID",
				"group": "background"
			},
			{
				"source": "osm",
				"title": "Open Street Map",
				"name": "mapnik",
				"group": "background"
			}
		]
	},
	"scaleOverlayUnits":{
        "bottomOutUnits":"nmi",    
        "bottomInUnits":"nmi",    
        "topInUnits":"m",    
        "topOutUnits":"km"
    },
	"customTools":[
		{
			"ptype": "gxp_embedmapdialog",
			"actionTarget": {"target": "paneltbar", "index": 2},
			"embeddedTemplateName": "viewer",
			"showDirectURL": true
		}, {
			"ptype": "gxp_categoryinitializer",
            "silentErrors": true
		}, {
		   "ptype": "gxp_mouseposition",
		   "displayProjectionCode":"EPSG:4326",
		   "customCss": "font-weight: bold; text-shadow: 1px 0px 0px #FAFAFA, 1px 1px 0px #FAFAFA, 0px 1px 0px #FAFAFA,-1px 1px 0px #FAFAFA, -1px 0px 0px #FAFAFA, -1px -1px 0px #FAFAFA, 0px -1px 0px #FAFAFA, 1px -1px 0px #FAFAFA, 1px 4px 5px #aeaeae;color:#050505 "
		}, {
			"ptype": "gxp_addlayer",
			"showCapabilitiesGrid": true,
			"useEvents": false,
			"showReport": "never",
			"directAddLayer": false,
			"id": "addlayer"
		}, {
			"actions": ["-"], 
			"actionTarget": "paneltbar"
		}, {
			"ptype": "gxp_geolocationmenu",
			"actionTarget": {"target": "paneltbar", "index": 23},
			"toggleGroup": "toolGroup"
		}, {
			"actions": ["->"], 
			"actionTarget": "paneltbar"
		}, {
			"ptype": "gxp_help",
			"actionTarget": "paneltbar",
			"text": "Help",
			"tooltip":"MapStore Guide",
			"index": 24,
			"showOnStartup": false,
			"fileDocURL": "MapStore-Help.pdf"
        }, {
			"ptype": "gxp_about",
			"poweredbyURL": "http://www.geo-solutions.it/about/contacts/",
			"actionTarget": {"target": "panelbbar", "index": 1}
		}, {
			"ptype": "gxp_languageselector",
			"actionTarget": {"target": "panelbbar", "index": 3}
		}
	]
}
