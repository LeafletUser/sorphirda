ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3057").setExtent([324226.539527, 391433.682726, 328233.425493, 395288.742699]);
var wms_layers = [];

var format_sorphirda_0 = new ol.format.GeoJSON();
var features_sorphirda_0 = format_sorphirda_0.readFeatures(json_sorphirda_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3057'});
var jsonSource_sorphirda_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sorphirda_0.addFeatures(features_sorphirda_0);
var lyr_sorphirda_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_sorphirda_0, 
                style: style_sorphirda_0,
                popuplayertitle: 'sorphirda',
                interactive: true,
                title: '<img src="styles/legend/sorphirda_0.png" /> sorphirda'
            });

lyr_sorphirda_0.setVisible(true);
var layersList = [lyr_sorphirda_0];
lyr_sorphirda_0.set('fieldAliases', {'id': 'id', 'stadur': 'stadur', });
lyr_sorphirda_0.set('fieldImages', {'id': '', 'stadur': '', });
lyr_sorphirda_0.set('fieldLabels', {'id': 'inline label - visible with data', 'stadur': 'inline label - visible with data', });
lyr_sorphirda_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});