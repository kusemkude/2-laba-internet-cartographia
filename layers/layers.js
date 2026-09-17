var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OSMStandard_1 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_lab1_2 = new ol.format.GeoJSON();
var features_lab1_2 = format_lab1_2.readFeatures(json_lab1_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_lab1_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_lab1_2.addFeatures(features_lab1_2);
var lyr_lab1_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_lab1_2, 
                style: style_lab1_2,
                popuplayertitle: 'lab1',
                interactive: true,
                title: '<img src="styles/legend/lab1_2.png" /> lab1'
            });
var format_highway_secondary_3 = new ol.format.GeoJSON();
var features_highway_secondary_3 = format_highway_secondary_3.readFeatures(json_highway_secondary_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_highway_secondary_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_highway_secondary_3.addFeatures(features_highway_secondary_3);
var lyr_highway_secondary_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_highway_secondary_3, 
                style: style_highway_secondary_3,
                popuplayertitle: 'highway_secondary',
                interactive: true,
                title: '<img src="styles/legend/highway_secondary_3.png" /> highway_secondary'
            });
var format_highway_residential_4 = new ol.format.GeoJSON();
var features_highway_residential_4 = format_highway_residential_4.readFeatures(json_highway_residential_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_highway_residential_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_highway_residential_4.addFeatures(features_highway_residential_4);
var lyr_highway_residential_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_highway_residential_4, 
                style: style_highway_residential_4,
                popuplayertitle: 'highway_residential',
                interactive: true,
                title: '<img src="styles/legend/highway_residential_4.png" /> highway_residential'
            });
var format_highway_tertiary_5 = new ol.format.GeoJSON();
var features_highway_tertiary_5 = format_highway_tertiary_5.readFeatures(json_highway_tertiary_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_highway_tertiary_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_highway_tertiary_5.addFeatures(features_highway_tertiary_5);
var lyr_highway_tertiary_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_highway_tertiary_5, 
                style: style_highway_tertiary_5,
                popuplayertitle: 'highway_tertiary',
                interactive: true,
                title: '<img src="styles/legend/highway_tertiary_5.png" /> highway_tertiary'
            });
var format_building_apartments_6 = new ol.format.GeoJSON();
var features_building_apartments_6 = format_building_apartments_6.readFeatures(json_building_apartments_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_building_apartments_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_building_apartments_6.addFeatures(features_building_apartments_6);
var lyr_building_apartments_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_building_apartments_6, 
                style: style_building_apartments_6,
                popuplayertitle: 'building_apartments',
                interactive: true,
                title: '<img src="styles/legend/building_apartments_6.png" /> building_apartments'
            });
var format_building_house_7 = new ol.format.GeoJSON();
var features_building_house_7 = format_building_house_7.readFeatures(json_building_house_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_building_house_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_building_house_7.addFeatures(features_building_house_7);
var lyr_building_house_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_building_house_7, 
                style: style_building_house_7,
                popuplayertitle: 'building_house',
                interactive: true,
                title: '<img src="styles/legend/building_house_7.png" /> building_house'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_OSMStandard_1.setVisible(false);lyr_lab1_2.setVisible(true);lyr_highway_secondary_3.setVisible(true);lyr_highway_residential_4.setVisible(true);lyr_highway_tertiary_5.setVisible(true);lyr_building_apartments_6.setVisible(true);lyr_building_house_7.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_OSMStandard_1,lyr_lab1_2,lyr_highway_secondary_3,lyr_highway_residential_4,lyr_highway_tertiary_5,lyr_building_apartments_6,lyr_building_house_7];
lyr_lab1_2.set('fieldAliases', {'fid': 'fid', });
lyr_highway_secondary_3.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'turn:lanes:forward': 'turn:lanes:forward', 'lanes:forward': 'lanes:forward', 'lanes:backward': 'lanes:backward', 'maxheight': 'maxheight', 'name:ru': 'name:ru', 'maxspeed': 'maxspeed', 'lit': 'lit', 'layer': 'layer', 'bridge': 'bridge', 'junction': 'junction', 'oneway': 'oneway', 'name:etymology:wikidata': 'name:etymology:wikidata', 'name': 'name', 'surface': 'surface', 'ref': 'ref', 'lanes': 'lanes', });
lyr_highway_residential_4.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'width': 'width', 'smoothness': 'smoothness', 'maxspeed': 'maxspeed', 'tracktype': 'tracktype', 'layer': 'layer', 'bridge': 'bridge', 'name:ru': 'name:ru', 'surface': 'surface', 'lanes': 'lanes', 'oneway': 'oneway', 'ref': 'ref', 'name:etymology:wikidata': 'name:etymology:wikidata', 'name': 'name', });
lyr_highway_tertiary_5.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'waterway': 'waterway', 'priority': 'priority', 'horse': 'horse', 'foot': 'foot', 'bicycle': 'bicycle', 'maxspeed': 'maxspeed', 'junction': 'junction', 'oneway': 'oneway', 'layer': 'layer', 'bridge': 'bridge', 'lanes': 'lanes', 'ref': 'ref', 'name:etymology:wikidata': 'name:etymology:wikidata', 'surface': 'surface', 'name': 'name', });
lyr_building_apartments_6.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'source:addr': 'source:addr', 'height': 'height', 'building:levels:underground': 'building:levels:underground', 'start_date': 'start_date', 'energy_class': 'energy_class', 'building:flats': 'building:flats', 'roof:shape': 'roof:shape', 'addr:postcode': 'addr:postcode', 'addr:country': 'addr:country', 'addr:place': 'addr:place', 'type': 'type', 'building:levels': 'building:levels', 'addr:street': 'addr:street', 'addr:housenumber': 'addr:housenumber', 'addr:city': 'addr:city', });
lyr_building_house_7.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'name': 'name', 'addr:subdistrict': 'addr:subdistrict', 'start_date': 'start_date', 'source:addr': 'source:addr', 'addr:postcode': 'addr:postcode', 'building:levels': 'building:levels', 'addr:place': 'addr:place', 'addr:street': 'addr:street', 'addr:housenumber': 'addr:housenumber', 'addr:country': 'addr:country', 'addr:city': 'addr:city', 'address': 'address', });
lyr_lab1_2.set('fieldImages', {'fid': 'TextEdit', });
lyr_highway_secondary_3.set('fieldImages', {'fid': '', 'full_id': '', 'osm_id': '', 'osm_type': '', 'highway': '', 'turn:lanes:forward': '', 'lanes:forward': '', 'lanes:backward': '', 'maxheight': '', 'name:ru': '', 'maxspeed': '', 'lit': '', 'layer': '', 'bridge': '', 'junction': '', 'oneway': '', 'name:etymology:wikidata': '', 'name': '', 'surface': '', 'ref': '', 'lanes': '', });
lyr_highway_residential_4.set('fieldImages', {'fid': '', 'full_id': '', 'osm_id': '', 'osm_type': '', 'highway': '', 'width': '', 'smoothness': '', 'maxspeed': '', 'tracktype': '', 'layer': '', 'bridge': '', 'name:ru': '', 'surface': '', 'lanes': '', 'oneway': '', 'ref': '', 'name:etymology:wikidata': '', 'name': '', });
lyr_highway_tertiary_5.set('fieldImages', {'fid': '', 'full_id': '', 'osm_id': '', 'osm_type': '', 'highway': '', 'waterway': '', 'priority': '', 'horse': '', 'foot': '', 'bicycle': '', 'maxspeed': '', 'junction': '', 'oneway': '', 'layer': '', 'bridge': '', 'lanes': '', 'ref': '', 'name:etymology:wikidata': '', 'surface': '', 'name': '', });
lyr_building_apartments_6.set('fieldImages', {'fid': '', 'full_id': '', 'osm_id': '', 'osm_type': '', 'building': '', 'source:addr': '', 'height': '', 'building:levels:underground': '', 'start_date': '', 'energy_class': '', 'building:flats': '', 'roof:shape': '', 'addr:postcode': '', 'addr:country': '', 'addr:place': '', 'type': '', 'building:levels': '', 'addr:street': '', 'addr:housenumber': '', 'addr:city': '', });
lyr_building_house_7.set('fieldImages', {'fid': 'TextEdit', 'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'building': 'TextEdit', 'name': 'TextEdit', 'addr:subdistrict': 'TextEdit', 'start_date': 'TextEdit', 'source:addr': 'TextEdit', 'addr:postcode': 'TextEdit', 'building:levels': 'TextEdit', 'addr:place': 'TextEdit', 'addr:street': 'TextEdit', 'addr:housenumber': 'TextEdit', 'addr:country': 'TextEdit', 'addr:city': 'TextEdit', 'address': 'TextEdit', });
lyr_lab1_2.set('fieldLabels', {'fid': 'no label', });
lyr_highway_secondary_3.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'highway': 'no label', 'turn:lanes:forward': 'no label', 'lanes:forward': 'no label', 'lanes:backward': 'no label', 'maxheight': 'no label', 'name:ru': 'no label', 'maxspeed': 'no label', 'lit': 'no label', 'layer': 'no label', 'bridge': 'no label', 'junction': 'no label', 'oneway': 'no label', 'name:etymology:wikidata': 'no label', 'name': 'no label', 'surface': 'no label', 'ref': 'no label', 'lanes': 'no label', });
lyr_highway_residential_4.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'highway': 'no label', 'width': 'no label', 'smoothness': 'no label', 'maxspeed': 'no label', 'tracktype': 'no label', 'layer': 'no label', 'bridge': 'no label', 'name:ru': 'no label', 'surface': 'no label', 'lanes': 'no label', 'oneway': 'no label', 'ref': 'no label', 'name:etymology:wikidata': 'no label', 'name': 'no label', });
lyr_highway_tertiary_5.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'highway': 'no label', 'waterway': 'no label', 'priority': 'no label', 'horse': 'no label', 'foot': 'no label', 'bicycle': 'no label', 'maxspeed': 'no label', 'junction': 'no label', 'oneway': 'no label', 'layer': 'no label', 'bridge': 'no label', 'lanes': 'no label', 'ref': 'no label', 'name:etymology:wikidata': 'no label', 'surface': 'no label', 'name': 'no label', });
lyr_building_apartments_6.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', 'source:addr': 'no label', 'height': 'no label', 'building:levels:underground': 'no label', 'start_date': 'no label', 'energy_class': 'no label', 'building:flats': 'no label', 'roof:shape': 'no label', 'addr:postcode': 'no label', 'addr:country': 'no label', 'addr:place': 'no label', 'type': 'no label', 'building:levels': 'no label', 'addr:street': 'no label', 'addr:housenumber': 'no label', 'addr:city': 'no label', });
lyr_building_house_7.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', 'name': 'no label', 'addr:subdistrict': 'no label', 'start_date': 'no label', 'source:addr': 'no label', 'addr:postcode': 'no label', 'building:levels': 'no label', 'addr:place': 'no label', 'addr:street': 'no label', 'addr:housenumber': 'no label', 'addr:country': 'no label', 'addr:city': 'no label', 'address': 'no label', });
lyr_building_house_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});