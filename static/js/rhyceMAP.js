//Show number of beekeepers over time

//loss of beekeepers correlated with loss of colonies

//graph number of beekeepers over time with number of colonies over time



//load geojson data



var beeMap = L.map("ourmap", {
  center: [34.0522, -118.2437],
  zoom: 8, 
});

L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
  tileSize: 512,
  maxZoom: 18,
  zoomOffset: -1,
  id: "mapbox/streets-v11",
  accessToken: API_KEY
  // "pk.eyJ1IjoiYW5kZTM2NzQiLCJhIjoiY2pzNWIxNGw2MDBzdjQzbWwycnJrNGZ3diJ9.Pi_anC-VpjB3HnLhzyVRzQ"
}).addTo(beeMap);

console.log("21 bees") ;