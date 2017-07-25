/**** Initial ****/

/*$(window).resize(function() {
  sizeLayerControl();
});*/

/*function sidebarClick(id) {
  // Hide sidebar and go to the map on small screens
  if (document.body.clientWidth <= 767) {
    $("#sidebar").hide();
   // map.invalidateSize();
  }
}

if (document.body.clientWidth <= 767) {
  var isCollapsed = true;
} else {
  var isCollapsed = false;
}*/

$(document).ready(function() {
    $("#sidebar").hide();
});

$(document).ready(function() {
    $("#hide").click(function(){
        $("#snackbar").hide();
    });
});

/**** Sidebar ****/


$("#sidebar-toggle-btn").click(function() {
  animateSidebar();
  document.getElementById("myOverlay").style.display = "block";
  return false;
});

/*$("#sidebar-toggle-btn").click(function(e) {
  e.preventDefault();
  $("#sidebar").toggleClass("toggled");
});*/

function sidebar_close() {
    animateSidebar();
    document.getElementById("myOverlay").style.display = "none";
}

function animateSidebar() {
  $("#sidebar").animate({
    width: "toggle"
  }, 350, function() {
   // map.invalidateSize();
  });
}

/*$("#map").click(function(event) {
  if(!$(event.target).closest('#sidebar').length) {
    if($('#sidebar').is(":visible")) { $('#sidebar').animate({
      width: "toggle" }
); } } })*/

/****** Map ******/
var map;

var disney = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  minZoom: 15,
  attribution: '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap</a> contributors'
});

map = L.map("map", {
  zoom: 17,
  center: [28.4187304,-81.581206],
  layers: [disney],
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
