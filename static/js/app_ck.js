// Create map object
var myMap = L.map("map", {
    center: [37.0902, -95.7129],
    zoom: 4,
    // layers: [grayscalemap]
});

// Define layer
L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
    maxZoom: 18,
    id: "outdoors-v11",
    accessToken: API_KEY
}).addTo(myMap);

var link = "data/geoJsonCounty.json";

// Added GeoJSON state data to map
d3.json(link).then(function(stateData) {
    L.geoJson(stateData).addTo(myMap);
})
