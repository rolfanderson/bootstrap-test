var map;

$(window).resize(function() {
  sizeLayerControl();
});

$(document).on("click", ".feature-row", function(e) {
  $(document).off("mouseout", ".feature-row", clearHighlight);
  sidebarClick(parseInt($(this).attr("id"), 10));
});

$("#sidebar-toggle-btn").click(function() {
  animateSidebar();
  return false;
});

$("#sidebar-hide-btn").click(function() {
  animateSidebar();
  return false;
});

function animateSidebar() {
  $("#sidebar").animate({
    width: "toggle"
  }, 350, function() {
    map.invalidateSize();
  });
}

function sidebarClick(id) {
  /* Hide sidebar and go to the map on small screens */
  if (document.body.clientWidth <= 767) {
    $("#sidebar").hide();
    map.invalidateSize();
  }
}

var disney = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
});

map = L.map("map", {
  zoom: 17,
  center: [28.4187304,-81.581206],
  layers: [disney],
  zoomControl: false,
  scrollWheelZoom: false,
  attributionControl: false
});

var ripIcon = L.icon({
              iconUrl: 'img/marker.png',
              iconSize: [25, 25],
});


var marker =

    L.marker([28.418395, -81.578169], {icon: ripIcon}).addTo(map).bindPopup("<popup>RIP</popup>");

    L.marker([28.419296, -81.580979], {icon: ripIcon}).addTo(map).bindPopup("<popup>RIP</popup>");

    L.marker([28.419192, -81.577707], {icon: ripIcon}).addTo(map).bindPopup("<popup>RIP</popup>");

    L.marker([28.418824, -81.577455], {icon: ripIcon}).addTo(map).bindPopup("<popup>RIP</popup>");

    L.marker([28.418786, -81.577202], {icon: ripIcon}).addTo(map).bindPopup("<popup>RIP</popup>");

    L.marker([28.417909, -81.584142], {icon: ripIcon}).addTo(map).bindPopup("<popup>RIP</popup>");

    L.marker([28.417958, -81.584346], {icon: ripIcon}).addTo(map).bindPopup("<popup>RIP</popup>");

    L.marker([28.418962, -81.577671], {icon: ripIcon}).addTo(map).bindPopup("<popup>RIP</popup>");

    L.marker([28.420159, -81.581194], {icon: ripIcon}).addTo(map).bindPopup("<popup>RIP</popup>");

    L.marker([28.420490, -81.582037], {icon: ripIcon}).addTo(map).bindPopup("<popup>RIP</popup>");

    L.marker([28.419169, -81.585052], {icon: ripIcon}).addTo(map).bindPopup("<popup>RIP</popup>");

    L.marker([28.417928, -81.583496], {icon: ripIcon}).addTo(map).bindPopup("<popup>RIP</popup>");


/* Attribution control */
var attributionControl = L.control({
  position: "bottomright"
});
attributionControl.onAdd = function (map) {
  var div = L.DomUtil.create("div", "leaflet-control-attribution");
  div.innerHTML = "<span class='hidden-xs'>Developed by <a href='#' onclick='$(\"#about\").modal(\"show\"); return false;'>Project Mortimer</a></span>";
  return div;
};
map.addControl(attributionControl);

var zoomControl = L.control.zoom({
  position: "bottomright"
}).addTo(map);

L.easyButton({
  position: 'bottomright',
  leafletClasses: true,
  states:[{
    onClick: function(button, map){
      animateSidebar();
      return false;
    },
    icon: '<i class="mdi mdi-help mdi-18px"></i>'
  }]
}).addTo(map);

/*Larger screens get expanded layer control and visible sidebar*/
if (document.body.clientWidth <= 767) {
  var isCollapsed = true;
} else {
  var isCollapsed = false;
}
