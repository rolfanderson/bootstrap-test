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

var magicKingdom = [28.4187304,-81.581206];

var epcot = [28.373711392892478,-81.5493893623352];

var hollywoodStudios = [28.3574015,-81.5606943555329];

var animalKingdom = [28.36076735,-81.5914841136809];

map = L.map("map", {
  zoom: 17,
  maxBounds: [
        //south west
        [28.321004534362544, -81.63185119628905],
        //north east
        [28.441223256828355, -81.49246215820312]
        ],
  center: magicKingdom,
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

// Magic Kingdom
L.marker([28.4184, -81.57835], {
  title: "marker-1",
  icon: ripIcon
}).addTo(map).bindPopup("<a class='popup'>RIP</a>").on('click', clickZoom);

L.marker([28.419311, -81.58104], {
  title: "marker-2",
  icon: ripIcon
}).addTo(map).bindPopup("<a class='popup'>RIP</a>").on('click', clickZoom);

L.marker([28.419192, -81.577707], {
  title: "marker-3",
  icon: ripIcon
}).addTo(map).bindPopup("<a class='popup'>RIP</a>").on('click', clickZoom);

L.marker([28.418824, -81.577455], {
  title: "marker-4",
  icon: ripIcon
}).addTo(map).bindPopup("<a class='popup'>RIP</a>").on('click', clickZoom);

L.marker([28.418786, -81.577202], {
  title: "marker-5",
  icon: ripIcon
}).addTo(map).bindPopup("<a class='popup'>RIP</a>").on('click', clickZoom);

L.marker([28.41814534415844, -81.58425807952881], {
  title: "marker-6",
  icon: ripIcon
}).addTo(map).bindPopup("<a class='popup'>RIP</a>").on('click', clickZoom);

L.marker([28.4182, -81.5844], {
  title: "marker-7",
  icon: ripIcon
}).addTo(map).bindPopup("<a class='popup'>RIP</a>").on('click', clickZoom);

L.marker([28.418962, -81.577671], {
  title: "marker-8",
  icon: ripIcon
}).addTo(map).bindPopup("<a class='popup'>RIP</a>").on('click', clickZoom);

L.marker([28.4203, -81.5812], {
  title: "marker-9",
  icon: ripIcon
}).addTo(map).bindPopup("<a class='popup'>RIP</a>").on('click', clickZoom);

L.marker([28.420490, -81.582037], {
  title: "marker-10",
  icon: ripIcon
}).addTo(map).bindPopup("<a class='popup'>RIP</a>").on('click', clickZoom);

L.marker([28.419216323469705, -81.58459067344666], {
  title: "marker-11",
  icon: ripIcon
}).addTo(map).bindPopup("<a class='popup'>RIP</a>").on('click', clickZoom);

L.marker([28.4181, -81.5834], {
  title: "marker-12",
  icon: ripIcon
}).addTo(map).bindPopup("<a class='popup'>RIP</a>").on('click', clickZoom);

L.marker([28.418079292216312, -81.58594787120819], {
  title: "marker-13",
  icon: ripIcon
}).addTo(map).bindPopup("<a class='popup'>RIP</a>").on('click', clickZoom);

L.marker([28.420197651830208, -81.58431708812714], {
  title: "marker-14",
  icon: ripIcon
}).addTo(map).bindPopup("<a class='popup'>RIP</a>").on('click', clickZoom);

// Epcot
L.marker([28.373867151881498,-81.54710412025452], {
  title: "marker-15",
  icon: ripIcon
}).addTo(map).bindPopup("<a class='popup'>RIP</a>").on('click', clickZoom);

L.marker([28.373978071022137,-81.54701828956604], {
  title: "marker-16",
  icon: ripIcon
}).addTo(map).bindPopup("<a class='popup'>RIP</a>").on('click', clickZoom);

L.marker([28.373845912032813,-81.54692977666855], {
  title: "marker-17",
  icon: ripIcon
}).addTo(map).bindPopup("<a class='popup'>RIP</a>").on('click', clickZoom);

L.marker([28.37377039253644,-81.547010242939], {
  title: "marker-18",
  icon: ripIcon
}).addTo(map).bindPopup("<a class='popup'>RIP</a>").on('click', clickZoom);

/*L.marker([], {
  id: "marker-19",
  icon: ripIcon
}).addTo(map).bindPopup("<a class='popup'>RIP</a>").on('click', clickZoom);

L.marker([], {
  id: "marker-20",
  icon: ripIcon
}).addTo(map).bindPopup("<a class='popup'>RIP</a>").on('click', clickZoom);

L.marker([], {
  id: "marker-21",
  icon: ripIcon
}).addTo(map).bindPopup("<a class='popup'>RIP</a>").on('click', clickZoom);

L.marker([], {
  id: "marker-22",
  icon: ripIcon
}).addTo(map).bindPopup("<a class='popup'>RIP</a>").on('click', clickZoom);

L.marker([], {
  id: "marker-23",
  icon: ripIcon
}).addTo(map).bindPopup("<a class='popup'>RIP</a>").on('click', clickZoom);

L.marker([], {
  id: "marker-24",
  icon: ripIcon
}).addTo(map).bindPopup("<a class='popup'>RIP</a>").on('click', clickZoom);

L.marker([], {
  id: "marker-25",
  icon: ripIcon
}).addTo(map).bindPopup("<a class='popup'>RIP</a>").on('click', clickZoom);

L.marker([], {
  id: "marker-26",
  icon: ripIcon
}).addTo(map).bindPopup("<a class='popup'>RIP</a>").on('click', clickZoom);

L.marker([], {
  id: "marker-27",
  icon: ripIcon
}).addTo(map).bindPopup("<a class='popup'>RIP</a>").on('click', clickZoom);

L.marker([], {
  id: "marker-28",
  icon: ripIcon
}).addTo(map).bindPopup("<a class='popup'>RIP</a>").on('click', clickZoom);

L.marker([], {
  id: "marker-29",
  icon: ripIcon
}).addTo(map).bindPopup("<a class='popup'>RIP</a>").on('click', clickZoom);

L.marker([], {
  id: "marker-30",
  icon: ripIcon
}).addTo(map).bindPopup("<a class='popup'>RIP</a>").on('click', clickZoom);

L.marker([], {
  id: "marker-31",
  icon: ripIcon
}).addTo(map).bindPopup("<a class='popup'>RIP</a>").on('click', clickZoom);

L.marker([], {
  id: "marker-32",
  icon: ripIcon
}).addTo(map).bindPopup("<a class='popup'>RIP</a>").on('click', clickZoom);

L.marker([], {
  id: "marker-33",
  icon: ripIcon
}).addTo(map).bindPopup("<a class='popup'>RIP</a>").on('click', clickZoom);

L.marker([], {
  id: "marker-34",
  icon: ripIcon
}).addTo(map).bindPopup("<a class='popup'>RIP</a>").on('click', clickZoom);

L.marker([], {
  id: "marker-35",
  icon: ripIcon
}).addTo(map).bindPopup("<a class='popup'>RIP</a>").on('click', clickZoom);

L.marker([], {
  id: "marker-36",
  icon: ripIcon
}).addTo(map).bindPopup("<a class='popup'>RIP</a>").on('click', clickZoom);

L.marker([], {
  id: "marker-37",
  icon: ripIcon
}).addTo(map).bindPopup("<a class='popup'>RIP</a>").on('click', clickZoom);

L.marker([], {
  id: "marker-38",
  icon: ripIcon
}).addTo(map).bindPopup("<a class='popup'>RIP</a>").on('click', clickZoom);

L.marker([], {
  id: "marker-39",
  icon: ripIcon
}).addTo(map).bindPopup("<a class='popup'>RIP</a>").on('click', clickZoom);

L.marker([], {
  id: "marker-40",
  icon: ripIcon
}).addTo(map).bindPopup("<a class='popup'>RIP</a>").on('click', clickZoom);

L.marker([], {
  id: "marker-41",
  icon: ripIcon
}).addTo(map).bindPopup("<a class='popup'>RIP</a>").on('click', clickZoom);

L.marker([], {
  id: "marker-42",
  icon: ripIcon
}).addTo(map).bindPopup("<a class='popup'>RIP</a>").on('click', clickZoom);

L.marker([], {
  id: "marker-43",
  icon: ripIcon
}).addTo(map).bindPopup("<a class='popup'>RIP</a>").on('click', clickZoom);

L.marker([], {
  id: "marker-44",
  icon: ripIcon
}).addTo(map).bindPopup("<a class='popup'>RIP</a>").on('click', clickZoom);

L.marker([], {
  id: "marker-45",
  icon: ripIcon
}).addTo(map).bindPopup("<a class='popup'>RIP</a>").on('click', clickZoom);

L.marker([], {
  id: "marker-46",
  icon: ripIcon
}).addTo(map).bindPopup("<a class='popup'>RIP</a>").on('click', clickZoom);

L.marker([], {
  id: "marker-47",
  icon: ripIcon
}).addTo(map).bindPopup("<a class='popup'>RIP</a>").on('click', clickZoom);

L.marker([], {
  id: "marker-48",
  icon: ripIcon
}).addTo(map).bindPopup("<a class='popup'>RIP</a>").on('click', clickZoom);

L.marker([], {
  id: "marker-49",
  icon: ripIcon
}).addTo(map).bindPopup("<a class='popup'>RIP</a>").on('click', clickZoom);

L.marker([], {
  id: "marker-50",
  icon: ripIcon
}).addTo(map).bindPopup("<a class='popup'>RIP</a>").on('click', clickZoom);

L.marker([], {
  id: "marker-51",
  icon: ripIcon
}).addTo(map).bindPopup("<a class='popup'>RIP</a>").on('click', clickZoom);

L.marker([], {
  id: "marker-52",
  icon: ripIcon
}).addTo(map).bindPopup("<a class='popup'>RIP</a>").on('click', clickZoom);

L.marker([], {
  id: "marker-53",
  icon: ripIcon
}).addTo(map).bindPopup("<a class='popup'>RIP</a>").on('click', clickZoom);

L.marker([], {
  id: "marker-54",
  icon: ripIcon
}).addTo(map).bindPopup("<a class='popup'>RIP</a>").on('click', clickZoom);

L.marker([], {
  id: "marker-55",
  icon: ripIcon
}).addTo(map).bindPopup("<a class='popup'>RIP</a>").on('click', clickZoom);*/


function clickZoom(e) {
	map.setView(e.target.getLatLng(),19);
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
    "weight": 0,
    "opacity": 1.0,
    "fill": true,
    "fillColor": "#333",
    "fillOpacity": 0.7
};

L.geoJSON(florida, {
  style: jsonStyle
}).addTo(map);

L.easyButton({
  position: 'bottomleft',
  id:'deathtour-tab',
  leafletClasses: true,
  states:[{
    onClick: function(button, map){
      map.setView(animalKingdom, 16);
    },
    icon: '<i class="mdi mdi-evernote mdi-18px" id="info-btn"></i>'
  }]
}).addTo(map);

L.easyButton({
  position: 'bottomleft',
  id:'pizzaparlor-tab',
  leafletClasses: true,
  states:[{
    onClick: function(button, map){
      map.setView(hollywoodStudios, 16);
    },
    icon: '<i class="mdi mdi-movie mdi-18px" id="info-btn"></i>'
  }]
}).addTo(map);

L.easyButton({
  position: 'bottomleft',
  id:'postcard-tab',
  leafletClasses: true,
  states:[{
    onClick: function(button, map){
      map.setView(epcot, 16);
    },
    icon: '<i class="mdi mdi-web mdi-18px" id="info-btn"></i>'
  }]
}).addTo(map);

L.easyButton({
  position: 'bottomleft',
  id:'fourcorners-tab',
  leafletClasses: true,
  states:[{
    onClick: function(button, map){
      map.setView(magicKingdom, 16);
    },
    icon: '<i class="mdi mdi-auto-fix mdi-18px" id="info-btn"></i>'
  }]
}).addTo(map);
