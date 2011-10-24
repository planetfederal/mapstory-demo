var app;
Ext.onReady(function() {
    app = new gxp.Viewer({
        portalItems: [
            "map-panel", 
            {
                 id: "timeline-container",
                 xtype: "container",
                 layout: "fit",
                 region: "south",
                 height: 250
             }, {
                 id: "tree-container",
                 xtype: "panel",
                 layout: "fit",
                 region: "west",
                 border: false,
                 width: 200
            }
        ],
        
        // configuration of all tool plugins for this application
        tools: [{
            ptype: "gxp_layertree",
            outputConfig: {
                id: "tree",
                border: true,
                tbar: [] // we will add buttons to "tree.bbar" later
            },
            outputTarget: "tree-container"
        }, {
            ptype: "gxp_timeline",
            outputTarget: "timeline-container",
            playbackTool: "playback-tool"
        }, {
            ptype: "gxp_playback",
            id: "playback-tool",
            outputConfig: {
                dynamicRange: false
            }
        }, {
            ptype: "gxp_addlayers",
            actionTarget: "tree.tbar"
        }, {
            ptype: "gxp_removelayer",
            actionTarget: ["tree.tbar", "tree.contextMenu"]
        }, {
            ptype: "gxp_zoomtoextent"
        }, {
            ptype: "gxp_zoom"
        }, {
            ptype: "gxp_navigationhistory"
        }],
        
        // layer sources
        defaultSourceType: "gxp_wmssource",
        sources: {
            osm: {
                ptype: "gxp_osmsource"
            },
            local: {
                url: "/geoserver/wms",
                version: "1.1.1"
            }
        },
        
        // map and layers
        map: {
            id: "map-panel",
            region: "center",
            title: "Map",
            projection: "EPSG:900913",
            units: "m",
            maxResolution: 156543.0339,
            maxExtent: [-20037508, -20037508, 20037508, 20037508],
            center: [0, 0],
            zoom: 2,
            layers: [{
                source: "osm",
                name: "mapnik",
                group: "background"                
            }, {
            //     source: "local",
            //     name: "geonode:mexmurder"
            // }, {
                source: "local",
                name: "geonode:conflicts"
            }],
            items: [{
                xtype: "gx_zoomslider",
                vertical: true,
                height: 100
            }]
        }
    });
});
