var style_ruslafotur_1 = function(feature, resolution){
  var radius;
    if (String(feature.get("flokkur"))=='Ruslafata') {
        var style = [ new ol.style.Style({
            image: new ol.style.Icon({src: './images/ruslafotur.svg?v=0.0.1',
            scale: 0.1,
            opacity: 0.9,
          }),
        })];
    }
        else if (String(feature.get("flokkur"))=='Flokkunartunna') {
            var style = [ new ol.style.Style({
                image: new ol.style.Icon({src: './images/flokkunartunna.svg?v=0.0.2',
                scale: 0.13,
                opacity: 0.9,
              }),
            })];
       }
        else if (String(feature.get("flokkur"))=='Stauratunna') {
            var style = [ new ol.style.Style({
                image: new ol.style.Icon({src: './images/stauratunna.svg?v=0.0.1',
                scale: 0.13,
                opacity: 0.9,
              }),
            })];
       }
        else if (String(feature.get("flokkur"))=='Stór tunna') {
            var style = [ new ol.style.Style({
                image: new ol.style.Icon({src: './images/stortunna.svg?v=0.0.1',
                scale: 0.1,
                opacity: 0.7,
              }),
            })];
       }
    return style;
};