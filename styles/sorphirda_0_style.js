var size = 0;
var placement = 'point';

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

var style_sorphirda_0 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("");
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    var stadur = feature.get("stadur");
    var strokeColor = colorMap[stadur] || 'rgba(35,35,35,1.0)';
    var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: strokeColor, lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(255,255,255,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];

    return style;
};
