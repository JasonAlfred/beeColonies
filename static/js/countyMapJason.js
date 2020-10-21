function cloroplethMap() {

// Need to check if map is already initialized since we are
// not reloading pages.
  var container = L.DomUtil.get('map');
      if(container != null){
        container._leaflet_id = null;
      }

  // Creating map object
  let mapYear = 2012
  let myMap = L.map("map", {
    center: [39.8283, -98.5795],
    zoom: 4.5
  });

  // Adding tile layer
  L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
    tileSize: 512,
    maxZoom: 18,
    zoomOffset: -1,
    id: "mapbox/light-v10",
    accessToken: API_KEY
  }).addTo(myMap);

  // Load in geojson data 
  // Three years available and make 3 calls for layers 2002, 2007, 2012
  let geoData = `/data_CountyData${mapYear}`;

  d3.json(geoData).then(function (countyData) {
    L.geoJson(countyData).addTo(myMap);
    let geojson = L.choropleth(countyData, {

      // Define what  property in the features to use
      valueProperty: "Density",

      // Set color scale
      scale: ["#9E1A1A", "#22BC22"],

      // Number of breaks in step range
      steps: 20,

      // q for quartile, e for equidistant, k for k-means
      mode: "q",
      style: {
        // Border color
        color: "#fff",
        weight: 1,
        fillOpacity: 0.8
      },

      // Binding a pop-up to each layer
      onEachFeature: function (feature, layer) {
        layer.bindPopup("<h2>" + feature.properties.AreaName + "</h2><hr>County Land Area (sq. mi): " +
          feature.properties.LandArea + "<br>Colonies in County: " + feature.properties.Value +
          "<br>Colony Density (colonies per sq. mi): " + feature.properties.Density);
        layer.on('mouseover', function () { layer.openPopup(); });
        layer.on('mouseout', function () { layer.closePopup(); });
      }
    }).addTo(myMap);


    // Set up the legend
    let legend = L.control({ position: "bottomright" });

    legend.onAdd = function () {
      let div = L.DomUtil.create("div", "info legend");
      let limits = geojson.options.limits;
      let colors = geojson.options.colors;
      let labels = [];

      // Add min & max
      let legendInfo = `<h1>${mapYear} Bee Colony Density</h1><h4>Colonies per sq. mile</h4>` +
        "<div class=\"labels\">" +
        "<div class=\"min\">" + limits[0] + "</div>" +
        "<div class=\"max\">" + limits[limits.length - 1] + "</div>" +
        "</div>";

      div.innerHTML = legendInfo;

      limits.forEach(function (limit, index) {
        labels.push("<li style=\"background-color: " + colors[index] + "\"></li>");
      });

      div.innerHTML += "<ul>" + labels.join("") + "</ul>";
      return div;
    };

    // Adding legend to the map
    legend.addTo(myMap);

  });
}