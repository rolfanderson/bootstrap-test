/****** Map ******/
var map;

var OpenStreetMap = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  minZoom: 15,
  attribution: '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap</a> contributors'
});

var OpenStreetMap_BlackAndWhite = L.tileLayer('http://{s}.tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png', {
	maxZoom: 18,
	attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
});

var OpenTopoMap = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
	maxZoom: 17,
	attribution: 'Map data: &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
});

var Stamen_Watercolor = L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.{ext}', {
	attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
	subdomains: 'abcd',
	minZoom: 1,
	maxZoom: 19,
	ext: 'png'
});

map = L.map("map", {
  zoom: 17,
  center: [28.4187304,-81.581206],
  layers: [OpenStreetMap],
  zoomControl: false,
  scrollWheelZoom: true,
  attributionControl: false
});

var ripIcon = L.icon({
              iconUrl: 'img/marker.png',
              iconSize: [25, 25],
});


var marker =

    L.marker([28.418395, -81.578169], {icon: ripIcon}).addTo(map).bindPopup("<a class='popup' href='https://tinyurl.com/k9dvj5u' target='_blank'>RIP</a>");
    //skyway, 15 February 1999
    L.marker([28.419296, -81.580979], {icon: ripIcon}).addTo(map).bindPopup("<a class='popup' href='https://tinyurl.com/mycq7sv' target='_blank'>RIP</a>");

    L.marker([28.419192, -81.577707], {icon: ripIcon}).addTo(map).bindPopup("<a class='popup'>RIP</a>");

    L.marker([28.418824, -81.577455], {icon: ripIcon}).addTo(map).bindPopup("<a class='popup'>RIP</a>");

    L.marker([28.418786, -81.577202], {icon: ripIcon}).addTo(map).bindPopup("<a class='popup'>RIP</a>");

    L.marker([28.417909, -81.584142], {icon: ripIcon}).addTo(map).bindPopup("<a class='popup'>RIP</a>");

    L.marker([28.417958, -81.584346], {icon: ripIcon}).addTo(map).bindPopup("<a class='popup'>RIP</a>");

    L.marker([28.418962, -81.577671], {icon: ripIcon}).addTo(map).bindPopup("<a class='popup'>RIP</a>");

    L.marker([28.420159, -81.581194], {icon: ripIcon}).addTo(map).bindPopup("<a class='popup'>RIP</a>");

    L.marker([28.420490, -81.582037], {icon: ripIcon}).addTo(map).bindPopup("<a class='popup'>RIP</a>");

    L.marker([28.419169, -81.585052], {icon: ripIcon}).addTo(map).bindPopup("<a class='popup'>RIP</a>");

    L.marker([28.417928, -81.583496], {icon: ripIcon}).addTo(map).bindPopup("<a class='popup'>RIP</a>");


/**** Attribution and Control Buttons ****/
var attributionControl = L.control({
  position: "bottomright"
});
attributionControl.onAdd = function (map) {
  var div = L.DomUtil.create("div", "leaflet-control-attribution");
  div.innerHTML = "<span class='hidden-xs'><a href='#' onclick='$(\"#about\").modal(\"show\"); return false;'></a></span>";
  return div;
};
map.addControl(attributionControl);

var zoomControl = L.control.zoom({
  position: "bottomright"
}).addTo(map);

L.easyButton({
  position: 'bottomright',
  id:'about-button',
  leafletClasses: true,
  states:[{
    onClick: function(button, map){
      $('#about').modal('show');
    },
    icon: '<i class="mdi mdi-help mdi-18px" id="info-btn"></i>'
  }]
}).addTo(map);
