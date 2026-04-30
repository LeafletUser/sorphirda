ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3057").setExtent([324226.539527, 391433.682726, 328233.425493, 395288.742699]);
var wms_layers = [];

var colorMap = {
    "Keflavík": 'rgba(144,238,144,1.0)',
    "Innri Njarðvík": 'rgba(231,84,128,1.0)',
    "Skrúðgarður": 'rgba(255,0,0,1.0)',
    "Hringbraut": 'rgba(255,0,0,1.0)',
    "Hafnargata": 'rgba(255,0,0,1.0)',
    "Sjávarsíða": 'rgba(255,0,0,1.0)',
    "Ytri Njarðvík": 'rgba(231,84,128,1.0)',
    "Ásbrú": 'rgba(0,0,139,1.0)',
    "Sólbrekkur": 'rgba(255,255,0,1.0)',
    "Hafnir": 'rgba(255,0,0,1.0)'
};

var dayGroups = {
    "Mánudagur": ["Keflavík", "Hafnir", "Sólbrekkur"],
    "Þriðjudagur": ["Ytri Njarðvík", "Innri Njarðvík"],
    "Miðvikudagur": ["Ásbrú", "Hafnargata", "Hringbraut", "Skrúðgarður", "Sólbrekkur"],
    "Fimmtudagur": ["Ásbrú", "Sjávarsíða"],
    "Föstudagur": ["Sólbrekkur"]
};

var legendHtml = '<div style="font-size:12px;">';
for (var day in dayGroups) {
    legendHtml += '<div style="font-weight:bold; margin-top:8px; margin-bottom:4px;">' + day + '</div>';
    dayGroups[day].forEach(function(stadur) {
        if (!colorMap[stadur]) {
            return;
        }
        legendHtml += '<div style="display:flex; align-items:center; margin-bottom:2px;"><span style="width:15px; height:10px; background-color:' + colorMap[stadur] + '; border:1px solid black; margin-right:5px;"></span><span>' + stadur + '</span></div>';
    });
}
legendHtml += '</div>';

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
                title: legendHtml,
                type: 'base'
            });

var group_sorphirda = new ol.layer.Group({
    title: 'Sorphirða',
    fold: 'close',
    layers: [lyr_sorphirda_0]
});

var jsonSource_ruslafotur_1 = new ol.source.Vector({
    format: new ol.format.GeoJSON(),
    url: function (extent) {
        return `https://uttekt.reykjanesbaer.is/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=Rnb_gogn:ruslafotur&outputFormat=application/json&srsname=EPSG:3057`;
    },
    strategy: ol.loadingstrategy.bbox,
});

var lyr_ruslafotur_1 = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_ruslafotur_1,
    style: style_ruslafotur_1,
    interactive: true,
    title: `
        <span class="text"> Ruslafötur</span>
    `,
    name: 'Rnb_gogn:ruslafotur',
});

lyr_sorphirda_0.setVisible(true);lyr_ruslafotur_1.setVisible(true);
var layersList = [group_sorphirda,lyr_ruslafotur_1];
lyr_sorphirda_0.set('fieldAliases', {'id': 'id', 'stadur': 'stadur', });
lyr_sorphirda_0.set('fieldImages', {'id': '', 'stadur': '', });
lyr_sorphirda_0.set('fieldLabels', {'id': 'inline label - visible with data', 'stadur': 'inline label - visible with data', });
lyr_sorphirda_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
lyr_ruslafotur_1.set('fieldAliases', {'id': 'id', 'geom': 'geom', 'fid': 'fid', 'x': 'x', 'y': 'y', 'tegund': 'Tegund', 'flokkur': 'Flokkur', 'athugasemd': 'Athugasemd', 'sidast_uppfaert': 'Síðast uppfært',});
lyr_ruslafotur_1.set('fieldImages', {'id': '', 'geom': '', 'fid': '', 'x': '', 'y': '', 'tegund': '', 'flokkur': '', 'athugasemd': '', 'sidast_uppfaert': '',});
lyr_ruslafotur_1.set('fieldLabels', {'id': 'inline label - visible with data', 'geom': 'hidden field', 'fid': 'hidden field', 'x': 'inline label - visible with data', 'y': 'inline label - visible with data', 'tegund': 'hidden field', 'flokkur': 'inline label - visible with data', 'athugasemd': 'inline label - visible with data', 'sidast_uppfaert': 'inline label - visible with data', });