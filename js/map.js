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


/*var marker =

    L.marker([28.418395, -81.578169], {icon: ripIcon}).addTo(map).bindPopup("<a class='popup' href='https://tinyurl.com/k9dvj5u' target='_blank'>RIP</a>");
    //skyway, 15 February 1999
    L.marker([28.419296, -81.580979], {icon: ripIcon}).addTo(map).bindPopup("<a class='popup' data-toggle='modal' data-target='#test'>RIP</a>");

    L.marker([28.419192, -81.577707], {icon: ripIcon}).addTo(map).bindPopup("<a class='popup'>RIP</a>");

    L.marker([28.418824, -81.577455], {icon: ripIcon}).addTo(map).bindPopup("<a class='popup'>RIP</a>");

    L.marker([28.418786, -81.577202], {icon: ripIcon}).addTo(map).bindPopup("<a class='popup'>RIP</a>");

    L.marker([28.417909, -81.584142], {icon: ripIcon}).addTo(map).bindPopup("<a class='popup'>RIP</a>");

    L.marker([28.417958, -81.584346], {icon: ripIcon}).addTo(map).bindPopup("<a class='popup'>RIP</a>");

    L.marker([28.418962, -81.577671], {icon: ripIcon}).addTo(map).bindPopup("<a class='popup'>RIP</a>");

    L.marker([28.420159, -81.581194], {icon: ripIcon}).addTo(map).bindPopup("<a class='popup'>RIP</a>");

    L.marker([28.420490, -81.582037], {icon: ripIcon}).addTo(map).bindPopup("<a class='popup'>RIP</a>");

    L.marker([28.419169, -81.585052], {icon: ripIcon}).addTo(map).bindPopup("<a class='popup'>RIP</a>");

    L.marker([28.417928, -81.583496], {icon: ripIcon}).addTo(map).bindPopup("<a class='popup'>RIP</a>");*/

var marker =

L.marker([28.418395, -81.578169], {
  id: "marker-1",
  icon: ripIcon
}).addTo(map).bindPopup("<a class='popup'>RIP</a>").on('click', clickZoom);

L.marker([28.419296, -81.580979], {
  id: "marker-2",
  icon: ripIcon
}).addTo(map).bindPopup("<a class='popup'>RIP</a>").on('click', clickZoom);

L.marker([28.419192, -81.577707], {
  id: "marker-3",
  icon: ripIcon
}).addTo(map).bindPopup("<a class='popup'>RIP</a>").on('click', clickZoom);

L.marker([28.418824, -81.577455], {
  id: "marker-4",
  icon: ripIcon
}).addTo(map).bindPopup("<a class='popup'>RIP</a>").on('click', clickZoom);

L.marker([28.418786, -81.577202], {
  id: "marker-5",
  icon: ripIcon
}).addTo(map).bindPopup("<a class='popup'>RIP</a>").on('click', clickZoom);

L.marker([28.417909, -81.584142], {
  id: "marker-6",
  icon: ripIcon
}).addTo(map).bindPopup("<a class='popup'>RIP</a>").on('click', clickZoom);

L.marker([28.417958, -81.584346], {
  id: "marker-7",
  icon: ripIcon
}).addTo(map).bindPopup("<a class='popup'>RIP</a>").on('click', clickZoom);

L.marker([28.418962, -81.577671], {
  id: "marker-8",
  icon: ripIcon
}).addTo(map).bindPopup("<a class='popup'>RIP</a>").on('click', clickZoom);

L.marker([28.420159, -81.581194], {
  id: "marker-9",
  icon: ripIcon
}).addTo(map).bindPopup("<a class='popup'>RIP</a>").on('click', clickZoom);

L.marker([28.420490, -81.582037], {
  id: "marker-10",
  icon: ripIcon
}).addTo(map).bindPopup("<a class='popup'>RIP</a>").on('click', clickZoom);

L.marker([28.419169, -81.585052], {
  id: "marker-11",
  icon: ripIcon
}).addTo(map).bindPopup("<a class='popup'>RIP</a>").on('click', clickZoom);

L.marker([28.417928, -81.583496], {
  id: "marker-12",
  icon: ripIcon
}).addTo(map).bindPopup("<a class='popup'>RIP</a>").on('click', clickZoom);

L.marker([28.418065138223366, -81.58602833747864], {
  id: "marker-13",
  icon: ripIcon
}).addTo(map).bindPopup("<a class='popup'>RIP</a>").on('click', clickZoom);

L.marker([28.420008935544175,-81.58462285995483], {
  id: "marker-14",
  icon: ripIcon
}).addTo(map).bindPopup("<a class='popup'>RIP</a>").on('click', clickZoom);

function clickZoom(e) {
	map.setView(e.target.getLatLng(),17);
}

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

var jsonStyle = {
    "color": "#333",
    "weight": 2,
    "opacity": 1.0,
    "fill": false
};

L.geoJSON(boundary, {
  style: jsonStyle
}).addTo(map);
