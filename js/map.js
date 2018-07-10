/****** Map ******/
var map;

var OpenStreetMap = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  minZoom: 15,
  attribution: 'Jason Crider and Kenny Anderson',
});

var magicKingdom = [28.4187304,-81.581206];

var epcot = [28.376543338787936,-81.5493893623352];

var hollywoodStudios = [28.3574015,-81.5606943555329];

var animalKingdom = [28.357567857801694,-81.5905237197876];

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
  attributionControl: true,
  setPrefix: false
});

map.attributionControl.setPrefix(false);

var ripIcon = L.icon({
              iconUrl: 'img/marker.png',
              iconSize: [25, 25],
});

var marker =

// Magic Kingdom
L.marker([28.4184, -81.57835], {
  id: "marker-1",
  icon: ripIcon
}).addTo(map).bindPopup("<a class='popup'><p class='obit'>Raymond Barlow</p><p class='date'>February 14, 1999</p><img class='popup-img' src='img/avatar.png'></img><p class='headline'>Orlando Sentinel: <a href='https://bit.ly/2KBEFcw' target='_blank'>“Worker At Disney Plunges To His Death”</a></p></a>").on('click', clickZoom);

L.marker([28.419311, -81.58104], {
  id: "marker-2",
  icon: ripIcon
}).addTo(map).bindPopup("<a class='popup'><p class='obit'>Joel Goode</p><p class='date'>August 11, 1977</p><img class='popup-img' src='img/avatar.png'></img><p class='headline'>Orlando Sentinel: <a href='https://bit.ly/2yXM84c' target='_blank'>“Disney Loses Appeal Of $1.5 Million In Drowning”</a></p></a>").on('click', clickZoom);

L.marker([28.419192, -81.577707], {
  id: "marker-3",
  icon: ripIcon
}).addTo(map).bindPopup("<a class='popup'><p class='obit'>Maria Cruz Cancino</p><p class='date'>August 12, 1980</p><img class='popup-img' src='img/avatar.png'></img><p class='headline'>St. Petersburg Times (Archive): <a href='https://news.google.com/newspapers?nid=888&dat=19800816&id=tekLAAAAIBAJ&sjid=OFoDAAAAIBAJ&pg=5058,102655&hl=en' target='_blank'>“Death at Disney World still a puzzle”</a></p></a>").on('click', clickZoom);

L.marker([28.418824, -81.577455], {
  id: "marker-4",
  icon: ripIcon
}).addTo(map).bindPopup("<a class='popup'><p class='obit'>Pamela Lynn Haynes</p><p class='date'>July 2015</p><img class='popup-img' src='img/avatar.png'></img><p class='headline'>Orlando Sentinel: <a href='https://bit.ly/1LBF1Ls' target='_blank'>“Woman died after riding Space Mountain at Disney World, state report shows”</a></p></a>").on('click', clickZoom);

L.marker([28.418786, -81.577202], {
  id: "marker-5",
  icon: ripIcon
}).addTo(map).bindPopup("<a class='popup'><p class='obit'>Rame Masarwa</p><p class='date'>August 1, 2006</p><img class='popup-img' src='img/avatar.png'></img><p class='headline'>Orlando Sentinel: <a href='https://bit.ly/2z5KzkT' target='_blank'>“Safety report: Boy died after ride at Disney”</a></p></a>").on('click', clickZoom);

L.marker([28.41814534415844, -81.58425807952881], {
  id: "marker-6",
  icon: ripIcon
}).addTo(map).bindPopup("<a class='popup'><p class='obit'>Gloria Land</p><p class='date'>February 2005</p><img class='popup-img' src='img/avatar.png'></img><p class='headline'>Guardian: <a href='https://www.theguardian.com/uk/2005/jul/13/samjones' target='_blank'>“British girl 'critical' after Disney ride”</a></p></a>").on('click', clickZoom);

L.marker([28.4182, -81.5844], {
  id: "marker-7",
  icon: ripIcon
}).addTo(map).bindPopup("<a class='popup'><p class='obit'>Mark Priest</p><p class='date'>August 2009</p><img class='popup-img' src='img/avatar.png'></img><p class='headline'>Orlando Sentinel: <a href='https://bit.ly/2KzatOU' target='_blank'>“Disney performer dies after falling during pirate show”</a></p></a>").on('click', clickZoom);

L.marker([28.418962, -81.577671], {
  id: "marker-8",
  icon: ripIcon
}).addTo(map).bindPopup("<a class='popup'><p class='obit'>Unknown</p><p class='date'>December 7, 2006</p><img class='popup-img' src='img/avatar.png'></img><p class='headline'>Orlando Sentinel (Archive): <a href='https://bit.ly/2KvT4Ks' target='_blank'>“Quarterly state reports cite ‘natural’ death, injuries”</a></p></a>").on('click', clickZoom);

L.marker([28.4203, -81.5812], {
  id: "marker-9",
  icon: ripIcon
}).addTo(map).bindPopup("<a class='popup'><p class='obit'>Unknown</p><p class='date'>December 12, 2010</p><img class='popup-img' src='img/avatar.png'></img><p class='headline'>Orlando Sentinel: <a href='https://bit.ly/2KjkUub' target='_blank'>“Disney reports guest death on Prince Charming Carousel in December”</a></p></a>").on('click', clickZoom);

L.marker([28.420490, -81.582037], {
  id: "marker-10",
  icon: ripIcon
}).addTo(map).bindPopup("<a class='popup'><p class='obit'>Unknown</p><p class='date'>December 25, 2014</p><img class='popup-img' src='img/avatar.png'></img><p class='headline'>Orlando Sentinel: <a href='https://bit.ly/2KhV1us' target='_blank'>“Disney reports deaths after Small World, Toy Story rides”</a></p></a>").on('click', clickZoom);

L.marker([28.419216323469705, -81.58459067344666], {
  id: "marker-11",
  icon: ripIcon
}).addTo(map).bindPopup("<a class='popup'><p class='obit'>William Pollock</p><p class='date'>November 5, 2000</p><img class='popup-img' src='img/avatar.png'></img><p class='headline'>Sun-Sentinel: <a href='http://articles.sun-sentinel.com/2000-11-07/news/0011060530_1_splash-mountain-flume-drop-hollowed-out-logs' target='_blank'>“Magic Kingdom Ride Fatality Has Investigators Perplexed”</a></p></a>").on('click', clickZoom);

L.marker([28.4181, -81.5834], {
  id: "marker-12",
  icon: ripIcon
}).addTo(map).bindPopup("<a class='popup'><p class='obit'>Katherine Jo-Ann Baliton</p><p class='date'>April 7, 2012</p><img class='popup-img' src='img/baliton.jpg'></img><p class='headline'>Orlando Sentinel: <a href='https://bit.ly/2MB55f0' target='_blank'>“Widower files wrongful death lawsuit against Disney”</a></p></a>").on('click', clickZoom);

L.marker([28.418079292216312, -81.58594787120819], {
  id: "marker-13",
  icon: ripIcon
}).addTo(map).bindPopup("<a class='popup'><p class='obit'>Javier Cruz</p><p class='date'>February 11, 2004</p><img class='popup-img' src='img/javier-cruz.jpg'></img><p class='headline'>Orlando Sentinel: <a href='https://bit.ly/2KnewSr' target='_blank'>“Disney Worker Killed In Parade”</a></p></a>").on('click', clickZoom);

L.marker([28.420197651830208, -81.58431708812714], {
  id: "marker-14",
  icon: ripIcon
}).addTo(map).bindPopup("<a class='popup'><p class='obit'>Unknown</p><p class='date'>February 2017</p><img class='popup-img' src='img/avatar.png'></img><p class='headline'>Orlando Sentinel: <a href='https://bit.ly/2pmSZyB' target='_blank'>“Man dies after riding Disney World's Big Thunder Mountain Railroad”</a></p></a>").on('click', clickZoom);

// Epcot
L.marker([28.374093710002718,-81.54736161231995], {
  id: "marker-15",
  icon: ripIcon
}).addTo(map).bindPopup("<a class='popup'><p class='obit'>Daudi Bamuwamye</p><p class='date'>June 13, 2015</p><img class='popup-img' src='img/avatar.png'></img><p class='headline'>CBS News: <a href='https://www.cbsnews.com/news/heart-issues-caused-disney-deaths/' target='_blank'>“Heart Issues Caused Disney Deaths”</a></p></a>").on('click', clickZoom);

L.marker([28.373966271119055,-81.54736161231995], {
  id: "marker-16",
  icon: ripIcon
}).addTo(map).bindPopup("<a class='popup'><p class='obit'>Hiltrud Bleumel</p><p class='date'>April 12, 2006</p><img class='popup-img' src='img/avatar.png'></img><p class='headline'>NY Times: <a href='https://www.nytimes.com/2006/04/14/us/14cnd-disney.html' target='_blank'>“Woman Who Died on Disney Ride Had High Blood Pressure”</a></p></a>").on('click', clickZoom);

/* Accidental repeat
L.marker([28.37384355204938,-81.54732406139374], {
  id: "marker-17",
  icon: ripIcon
}).addTo(map).bindPopup("<a class='popup'><p class='obit'>Daudi Bamuwamye</p><p class='date'>June 13, 2005</p><img class='popup-img' src='img/avatar.png'></img><p class='headline'>CBS News: <a href='https://www.cbsnews.com/news/heart-issues-caused-disney-deaths/' target='_blank'>“Headline”</a></p></a>").on('click', clickZoom);

L.marker([28.373782192461302,-81.54722750186919], {
  id: "marker-18",
  icon: ripIcon
}).addTo(map).bindPopup("<a class='popup'><p class='obit'>Unknown</p><p class='date'>April 11, 2006</p><img class='popup-img' src='img/avatar.png'></img><p class='headline'>Orlando Sentinel: <a href='#' target='_blank'>“Headline”</a></p></a>").on('click', clickZoom);
*/

L.marker([28.373069474645536,-81.55112206935883], {
  id: "marker-19",
  //Suicide discussed in Inside the Mouse
  icon: ripIcon
}).addTo(map).bindPopup("<a class='popup'><p class='obit'>Allan Ferris</p><p class='date'>September 12, 1992</p><img class='popup-img' src='img/avatar.png'></img><p class='headline'>Orlando Sentinel: <a href='http://articles.orlandosentinel.com/1992-09-14/news/9209140122_1_ferris-shotgun-solomons' target='_blank'>“Painful Split Preceded Epcot Death”</a></p></a>").on('click', clickZoom);

L.marker([28.37393795134636, -81.5513151884079], {
  id: "marker-20",
  //Soarin'
  icon: ripIcon
}).addTo(map).bindPopup("<a class='popup'><p class='obit'>John Parietti</p><p class='date'>January 15, 2007</p><img class='popup-img' src='img/avatar.png'></img><p class='headline'>Orlando Sentinel: <a href='http://www.orlandosentinel.com/business/orl-disneydeaths041807-story.html' target='_blank'>“Disney reports 2 deaths to state”</a></p></a>").on('click', clickZoom);

L.marker([28.374551544729144,-81.54723823070526], {
  id: "marker-21",
  //Body Wars, part of Wonders of Life no longer extant
  icon: ripIcon
}).addTo(map).bindPopup("<a class='popup'><p class='obit'>Linda Elaine Baker</p><p class='date'>May 16, 1995</p><img class='popup-img' src='img/avatar.png'></img><p class='headline'>Orlando Sentinel: <a href='http://articles.orlandosentinel.com/1995-05-17/news/9505170076_1_disney-world-epcot-ride-module' target='_blank'>“Girl Dies After Collapsing On Disney Ride”</a></p></a>").on('click', clickZoom);

L.marker([28.37858229301675,-81.55077338218688], {
  id: "marker-22",
  //parking lot
  icon: ripIcon
}).addTo(map).bindPopup("<a class='popup'><p class='obit'>Dorine Newell</p><p class='date'>November 21, 1984</p><img class='popup-img' src='img/avatar.png'></img><p class='headline'>NY Times: <a href='https://www.nytimes.com/1984/11/22/us/3-killed-in-plane-crash-at-disney-world-lot.html' target='_blank'>“3 Killed in Plane Crash At Disney World Lot”</a></p></a>").on('click', clickZoom);

L.marker([28.380224755418006,-81.54563426971436], {
  id: "marker-23",
  //parking lot
  icon: ripIcon
}).addTo(map).bindPopup("<a class='popup'><p class='obit'>Gary Newell</p><p class='date'>November 21, 1984</p><img class='popup-img' src='img/avatar.png'></img><p class='headline'>NY Times: <a href='https://www.nytimes.com/1984/11/22/us/3-killed-in-plane-crash-at-disney-world-lot.html' target='_blank'>“3 Killed in Plane Crash At Disney World Lot”</a></p></a>").on('click', clickZoom);

L.marker([28.378176393216357,-81.54649257659912], {
  id: "marker-24",
  //parking lot
  icon: ripIcon
}).addTo(map).bindPopup("<a class='popup'><p class='obit'>Stephanie Newell</p><p class='date'>November 21, 1984</p><img class='popup-img' src='img/avatar.png'></img><p class='headline'>NY Times: <a href='https://www.nytimes.com/1984/11/22/us/3-killed-in-plane-crash-at-disney-world-lot.html' target='_blank'>“3 Killed in Plane Crash At Disney World Lot”</a></p></a>").on('click', clickZoom);

L.marker([28.38050793601977,-81.55104160308838], {
  id: "marker-25",
  //parking lot
  icon: ripIcon
}).addTo(map).bindPopup("<a class='popup'><p class='obit'>Unknown</p><p class='date'>January 14, 1986</p><img class='popup-img' src='img/avatar.png'></img><p class='headline'>Orlando Sentinel: <a href='http://articles.orlandosentinel.com/1986-01-15/news/0190180015_1_walt-disney-epcot-pond' target='_blank'>“Tourists Miss Epcot Bridge, Die In Pond”</a></p></a>").on('click', clickZoom);

L.marker([28.380592890052874,-81.54806971549988], {
  id: "marker-26",
  //parking lot
  icon: ripIcon
}).addTo(map).bindPopup("<a class='popup'><p class='obit'>Unknown</p><p class='date'>January 14, 1986</p><img class='popup-img' src='img/avatar.png'></img><p class='headline'>Orlando Sentinel: <a href='http://articles.orlandosentinel.com/1986-01-15/news/0190180015_1_walt-disney-epcot-pond' target='_blank'>“Tourists Miss Epcot Bridge, Die In Pond”</a></p></a>").on('click', clickZoom);

L.marker([28.355627636102188,-81.55909359455107], {
  id: "marker-27",
  //star tours
  icon: ripIcon
}).addTo(map).bindPopup("<a class='popup'><p class='obit'>Ralph Lyles</p><p class='date'>September 2016</p><img class='popup-img' src='img/avatar.png'></img><p class='headline'>Orlando Sentinel: <a href='http://www.orlandosentinel.com/business/tourism/os-cfb-tourism-column-1024-20161020-story.html' target='_blank'>“Visitor dies after Star Tours ride at Disney World”</a></p></a>").on('click', clickZoom);

L.marker([28.356699247118353,-81.5587717294693], {
  id: "marker-28",
  //indiana jones
  icon: ripIcon
}).addTo(map).bindPopup("<a class='popup'><p class='obit'>Anislav Varbanov</p><p class='date'>August 17, 2009</p><img class='popup-img' src='img/avatar.png'></img><p class='headline'>Orlando Sentinel: <a href='http://articles.orlandosentinel.com/2009-08-18/news/disney_1_epic-stunt-spectacular-indiana-jones-cast-member' target='_blank'>“Disney performer dies during rehearsal”</a></p></a>").on('click', clickZoom);

L.marker([28.35818154584766,-81.55896484851837], {
  id: "marker-29",
  //unknown employee/location?
  icon: ripIcon
}).addTo(map).bindPopup("<a class='popup'><p class='obit'>Unknown</p><p class='date'>February 8, 1990</p><img class='popup-img' src='img/avatar.png'></img><p class='headline'>Orlando Sentinel: <a href='http://www.orlandosentinel.com/business/os-disney-deaths-rides-20150121-story.html' target='_blank'>“Timeline: Deaths and accidents at Walt Disney World Resort”</a></p></a>").on('click', clickZoom);

L.marker([28.35938530824809,-81.56059563159943], {
  id: "marker-30",
  //rocknroller coaster
  icon: ripIcon
}).addTo(map).bindPopup("<a class='popup'><p class='obit'>Michael Russell</p><p class='date'>June 29, 2006</p><img class='popup-img' src='img/avatar.png'></img><p class='headline'>Orlando Sentinel: <a href='https://bit.ly/2KXA5IV' target='_blank'>“Boy who died after Disney ride had heart defect, autopsy says”</a></p></a>").on('click', clickZoom);

L.marker([28.356477372597688,-81.56101942062378], {
  id: "marker-31",
  //toy story
  icon: ripIcon
}).addTo(map).bindPopup("<a class='popup'><p class='obit'>Unknown</p><p class='date'>October 2014</p><img class='popup-img' src='img/avatar.png'></img><p class='headline'>Orlando Sentinel: <a href='http://www.orlandosentinel.com/business/os-disney-deaths-rides-20150121-story.html' target='_blank'>“Disney reports deaths after Small World, Toy Story rides”</a></p></a>").on('click', clickZoom);

L.marker([28.35651041776846,-81.58783614635466], {
  id: "marker-32",
  //whirl
  icon: ripIcon
}).addTo(map).bindPopup("<a class='popup'><p class='obit'>Karen Price</p><p class='date'>November 29, 2007</p><img class='popup-img' src='img/avatar.png'></img><p class='headline'>Orlando Sentinel: <a href='http://articles.orlandosentinel.com/2008-05-24/business/osha24_1_primeval-whirl-roller-coaster-disney-animal-kingdom' target='_blank'>“OSHA hits Disney with violations, fine for Animal Kingdom accident”</a></p></a>").on('click', clickZoom);

L.marker([28.356453768897985,-81.58795952796936], {
  id: "marker-33",
  //whirl
  icon: ripIcon
}).addTo(map).bindPopup("<a class='popup'><p class='obit'>Russell Sherry Roscoe</p><p class='date'>March 14, 2011</p><img class='popup-img' src='img/avatar.png'></img><p class='headline'>Orlando Sentinel: <a href='http://articles.orlandosentinel.com/2011-03-14/news/os-disney-worker-dies-20110314_1_primeval-whirl-karen-price-roller-coaster' target='_blank'>“Disney's Animal Kingdom worker dies from injuries”</a></p></a>").on('click', clickZoom);

L.marker([28.355599311435203,-81.58849060535431], {
  id: "marker-34",
  //dinosaur
  icon: ripIcon
}).addTo(map).bindPopup("<a class='popup'><p class='obit'>Ryan Norman</p><p class='date'>April 30, 2005</p><img class='popup-img' src='img/avatar.png'></img><p class='headline'>Gainesville Sun: <a href='http://www.gainesville.com/article/LK/20050723/News/604164996/GS/' target='_blank'>“Records: Man died after ride at Disney”</a></p></a>").on('click', clickZoom);

L.marker([28.358172104519987,-81.58721923828125], {
  id: "marker-35",
  //everest
  icon: ripIcon
}).addTo(map).bindPopup("<a class='popup'><p class='obit'>Jeffery Reeb</p><p class='date'>December 18, 2007</p><img class='popup-img' src='img/avatar.png'></img><p class='headline'>Orlando Sentinel: <a href='http://articles.orlandosentinel.com/2007-12-20/news/everest20_1_defibrillator-cardiac-arrhythmia-everest-ride' target='_blank'>“Disney World death on Everest roller coaster blamed on tourist's heart condition”</a></p></a>").on('click', clickZoom);

L.marker([28.35105782542442,-81.57498300075531], {
  id: "marker-36",
  //downhill double dipper
  icon: ripIcon
}).addTo(map).bindPopup("<a class='popup'><p class='obit'>Oscar Wicker Jr.</p><p class='date'>March 15, 2007</p><img class='popup-img' src='img/avatar.png'></img><p class='headline'>Orlando Sentinel: <a href='http://www.orlandosentinel.com/business/orl-march16121807-story.html' target='_blank'>“Disney visitor collapses on water-park ride, dies”</a></p></a>").on('click', clickZoom);

L.marker([28.366102523850532,-81.53036713600157], {
  id: "marker-37",
  //wave pool
  icon: ripIcon
}).addTo(map).bindPopup("<a class='popup'><p class='obit'>Jerra Kirby</p><p class='date'>August 4, 2005</p><img class='popup-img' src='img/avatar.png'></img><p class='headline'>CBS News: <a href='https://www.cbsnews.com/news/heart-issues-caused-disney-deaths/' target='_blank'>“Heart Issues Caused Disney Deaths”</a></p></a>").on('click', clickZoom);

/* Cannot determine source
L.marker([28.36594675346225,-81.53042078018188], {
  id: "marker-38",
  //wave pool
  icon: ripIcon
}).addTo(map).bindPopup("<a class='popup'><p class='obit'>Unknown</p><p class='date'>August 26, 2012</p><img class='popup-img' src='img/avatar.png'></img><p class='headline'>Orlando Sentinel: <a href='#' target='_blank'>“Headline”</a></p></a>").on('click', clickZoom);
*/

L.marker([28.41149276310289,-81.5646082162857], {
  id: "marker-39",
  //river country
  icon: ripIcon
}).addTo(map).bindPopup("<a class='popup'><p class='obit'>Chase Brubaker</p><p class='date'>April 1, 2010</p><img class='popup-img' src='img/brubaker.jpg'></img><p class='headline'>Orlando Sentinel: <a href='http://articles.orlandosentinel.com/2010-04-02/news/os-child-hit-bus-disney-20100401_1_bus-driver-kim-montes-fort-wilderness' target='_blank'>“Boy killed in Disney bus accident in Fort Wilderness”</a></p></a>").on('click', clickZoom);

L.marker([28.411256848300972,-81.56455993652344], {
  id: "marker-40",
  icon: ripIcon
}).addTo(map).bindPopup("<a class='popup'><p class='obit'>Unknown</p><p class='date'>August 22, 1980</p><img class='popup-img' src='img/avatar.png'></img><p class='headline'>Yesterland (Archive): <a href='https://bit.ly/2L9obIU' target='_blank'>“River Country Closed by Brain-Eating Amoeba?”</a></p></a>").on('click', clickZoom);

L.marker([28.41133234109476,-81.5648227930069], {
  id: "marker-41",
  icon: ripIcon
}).addTo(map).bindPopup("<a class='popup'><p class='obit'>Mary Donnelly</p><p class='date'>April 16, 1982</p><img class='popup-img' src='img/avatar.png'></img><p class='headline'>Ocala Star-Banner (Archive): <a href='https://news.google.com/newspapers?nid=1356&dat=19820418&id=hrRPAAAAIBAJ&sjid=LwYEAAAAIBAJ&pg=4471,933521&hl=en' target='_blank'>“Tourist Dies After Disney World Ride”</a></p></a>").on('click', clickZoom);

L.marker([28.410917130063112,-81.56458139419556], {
  id: "marker-42",
  icon: ripIcon
}).addTo(map).bindPopup("<a class='popup'><p class='obit'>Howard A. Pueppke</p><p class='date'>August 9, 1982</p><img class='popup-img' src='img/avatar.png'></img><p class='headline'>Ocala Star-Banner (Archive): <a href='https://news.google.com/newspapers?nid=1356&dat=19820812&id=W7JPAAAAIBAJ&sjid=2wUEAAAAIBAJ&pg=5034,6275414&hl=en' target='_blank'>“Disney Won't Hire Extra Life Guards”</a></p></a>").on('click', clickZoom);

L.marker([28.4110775527001,-81.56475841999054], {
  id: "marker-43",
  icon: ripIcon
}).addTo(map).bindPopup("<a class='popup'><p class='obit'>Christopher Staff</p><p class='date'>July 10, 1989</p><img class='popup-img' src='img/avatar.png'></img><p class='headline'>Orlando Sentinel: <a href='http://articles.orlandosentinel.com/1989-07-11/news/8907110017_1_christopher-longwood-fifteen-minutes' target='_blank'>“Longwood Boy Drowns At Disney”</a></p></a>").on('click', clickZoom);

L.marker([28.405594735421133,-81.55718386173248], {
  id: "marker-44",
  //fort wilderness pool
  icon: ripIcon
}).addTo(map).bindPopup("<a class='popup'><p class='obit'>Miguel Diaz</p><p class='date'>May 23, 1987</p><img class='popup-img' src='img/avatar.png'></img><p class='headline'>Sun-Sentinel: <a href='http://articles.sun-sentinel.com/1988-06-15/news/8802040970_1_missouri-diaz-campground-lifeguard' target='_blank'>“Parents, Disney Settle Suit $250,000 To Be Paid In Boy's Drowning”</a></p></a>").on('click', clickZoom);

L.marker([28.410435860694257,-81.58691346645355], {
  id: "marker-45",
  //lane graves
  icon: ripIcon
}).addTo(map).bindPopup("<a class='popup'><p class='obit'>Lane Thomas Graves</p><p class='date'>June 14, 2016</p><img class='popup-img' src='img/os-lane-graves.jpg'></img><p class='headline'>CNN: <a href='https://www.cnn.com/2016/06/15/us/alligator-attacks-child-disney-florida/index.html'>“Disney gator attack: 2-year-old boy found dead”</a></p></a>").on('click', clickZoom);

L.marker([28.411606002021156,-81.58354997634888], {
  id: "marker-46",
  //seven seas lagoon
  icon: ripIcon
}).addTo(map).bindPopup("<a class='popup'><p class='obit'>Patricia Schenck</p><p class='date'>October 9, 1989</p><img class='popup-img' src='img/avatar.png'></img><p class='headline'>Orlando Sentinel: <a href='http://articles.orlandosentinel.com/1990-02-25/news/9002253491_1_schenck-walt-disney-napoli' target='_blank'>“Victim's Kin Sue Disney Over Fatal Boat Collision”</a></p></a>").on('click', clickZoom);

L.marker([28.414875723565174,-81.57429099082947], {
  id: "marker-47",
  icon: ripIcon
}).addTo(map).bindPopup("<a class='popup'><p class='obit'>Unknown</p><p class='date'>March 22, 2016</p><img class='popup-img' src='img/avatar.png'></img><p class='headline'>News 13 Florida: <a href='http://www.mynews13.com/fl/orlando/news/2016/3/22/deputies_investigati.html' target='_blank'>“Deputies investigating death at Disney World resort”</a></p></a>").on('click', clickZoom);

L.marker([28.387540011741013,-81.53945446014404], {
  id: "marker-48",
  icon: ripIcon
}).addTo(map).bindPopup("<a class='popup'><p class='obit'>Robert Krueger</p><p class='date'>December 26, 2010</p><img class='popup-img' src='img/avatar.png'></img><p class='headline'>Orlando Sentinel: <a href='http://articles.orlandosentinel.com/2010-12-27/news/os-disney-bus-accident-20101226_1_chase-brubaker-disney-bus-massachusetts-man' target='_blank'>“Massachusetts man dies after walking in front of Disney bus at Port Orleans resort”</a></p></a>").on('click', clickZoom);

L.marker([28.35046770123537,-81.54387474060059], {
  id: "marker-49",
  //pop century pool
  icon: ripIcon
}).addTo(map).bindPopup("<a class='popup'><p class='obit'>Anthony Johnson</p><p class='date'>March 10, 2013</p><img class='popup-img' src='img/avatar.png'></img><p class='headline'>CNN: <a href='https://www.cnn.com/2013/03/13/us/florida-disney-death/index.html' target='_blank'>“Boy pulled from Disney resort pool dies”</a></p></a>").on('click', clickZoom);

L.marker([28.350278860802213,-81.54784440994263], {
  id: "marker-50",
  //art of animation pool
  icon: ripIcon
}).addTo(map).bindPopup("<a class='popup'><p class='obit'>Unknown</p><p class='date'>July 14, 2015</p><img class='popup-img' src='img/avatar.png'></img><p class='headline'>Orlando Sentinel: <a href='http://www.orlandosentinel.com/news/84001498-132.html' target='_blank'>“Boy drowns in pool at Disney's Art of Animation resort”</a></p></a>").on('click', clickZoom);

L.marker([28.337776877200927,-81.55679225921631], {
  id: "marker-51",
  //espn
  icon: ripIcon
}).addTo(map).bindPopup("<a class='popup'><p class='obit'>Steven Snyder</p><p class='date'>July 9, 2010</p><img class='popup-img' src='img/avatar.png'></img><p class='headline'>Orlando Sentinel: <a href='http://articles.orlandosentinel.com/2010-07-09/news/os-disney-death-electrician-dies-20100709_1_celebration-hospital-disney-spokeswoman-andrea-finger-sports-complex' target='_blank'>“Electrician dies after shock at Disney's ESPN Wide World of Sports Complex”</a></p></a>").on('click', clickZoom);

L.marker([28.395675871708576,-81.57624363899231], {
  id: "marker-52",
  //speedway
  icon: ripIcon
}).addTo(map).bindPopup("<a class='popup'><p class='obit'>Gary Terry</p><p class='date'>April 12, 2015</p><img class='popup-img' src='img/avatar.png'></img><p class='headline'>Orlando Sentinel: <a href='http://www.orlandosentinel.com/business/os-disney-crash-instructor-cause-death-20150415-story.html' target='_blank'>“Cause of death in Disney speedway crash released”</a></p></a>").on('click', clickZoom);

L.marker([28.379049547840363,-81.50643110275269], {
  id: "marker-53",
  //doubletree
  icon: ripIcon
}).addTo(map).bindPopup("<a class='popup'><p class='obit'>Unknown</p><p class='date'>June 13, 2010</p><img class='popup-img' src='img/avatar.png'></img><p class='headline'>Orlando Sentinel: <a href='http://articles.orlandosentinel.com/2010-06-14/news/os-disney-death-20100614_1_walt-disney-world-property-hotel-plaza-boulevard-suicide' target='_blank'>“Death at Disney declared suicide”</a></p></a>").on('click', clickZoom);

L.marker([28.405533394207854,-81.58537924289702], {
  id: "marker-54",
  //coral island coffee
  icon: ripIcon
}).addTo(map).bindPopup("<a class='popup'><p class='obit'>Nicole Cotto</p><p class='date'>April 6, 1982</p><img class='popup-img' src='img/avatar.png'></img><p class='headline'>Daytona Beach Morning Journal (Archive): <a href='https://news.google.com/newspapers?nid=1873&dat=19820407&id=PaktAAAAIBAJ&sjid=x58FAAAAIBAJ&pg=3796,3527120&hl=en' target='_blank'>“Toddler Dies At Disney World”</a></p></a>").on('click', clickZoom);

L.marker([28.41577216638465,-81.57565355300903], {
  id: "marker-55",
  //parking lot tram
  icon: ripIcon
}).addTo(map).bindPopup("<a class='popup'><p class='obit'>Cassandra Lusinski</p><p class='date'>June 12, 1982</p><img class='popup-img' src='img/avatar.png'></img><p class='headline'>NY Times: <a href='https://www.nytimes.com/1982/06/15/us/child-killed-in-fall-from-train.html' target='_blank'>“Child Killed in Fall From Train”</a></p></a>").on('click', clickZoom);

L.marker([28.40573629193161,-81.57952129840851], {
  id: "marker-56",
  //monorail
  icon: ripIcon
}).addTo(map).bindPopup("<a class='popup'><p class='obit'>Austin Wuennenberg</p><p class='date'>July 5, 2009</p><img class='popup-img' src='img/avatar.png'></img><p class='headline'>Orlando Sentinel: <a href='http://articles.orlandosentinel.com/2010-03-22/news/os-disney-monorail-lawsuit-20100322_1_monorail-austin-wuennenberg-disney-workers' target='_blank'>“Disney denies fault in monorail crash”</a></p></a>").on('click', clickZoom);


function clickZoom(e) {
	map.setView(e.target.getLatLng(),19);
}

/**** Attribution and Control Buttons ****/

/*L.easyButton({
  position: 'topright',
  id:'about-button',
  leafletClasses: true,
  states:[{
    title: 'Instructions',
    onClick: function(button, map){
      $('#about').modal('show');
    },
    icon: '<i class="mdi mdi-help mdi-18px"></i>'
  }]
}).addTo(map);*/

var magicTab = L.easyButton({
  position: 'topright',
  id:'magic-tab',
  leafletClasses: true,
  states:[{
    title: 'Magic Kingdom',
    onClick: function(button, map){
      map.setView(magicKingdom, 16);
    },
    icon: '<i class="mdi mdi-auto-fix mdi-18px"></i>'
  }]
}).addTo(map);

var epcotTab = L.easyButton({
  position: 'topright',
  id:'epcot-tab',
  leafletClasses: true,
  states:[{
    title: 'Epcot',
    onClick: function(button, map){
      map.setView(epcot, 16);
    },
    icon: '<i class="mdi mdi-web mdi-18px"></i>'
  }]
}).addTo(map);

var hollywoodTab = L.easyButton({
  position: 'topright',
  id:'hollywood-tab',
  leafletClasses: true,
  states:[{
    title: 'Hollywood Studios',
    onClick: function(button, map){
      map.setView(hollywoodStudios, 16);
    },
    icon: '<i class="mdi mdi-movie mdi-18px"></i>'
  }]
}).addTo(map);

var animalTab = L.easyButton({
  position: 'topright',
  id:'animal-tab',
  leafletClasses: true,
  states:[{
    title: 'Animal Kingdom',
    onClick: function(button, map){
      map.setView(animalKingdom, 16);
    },
    icon: '<i class="mdi mdi-paw mdi-18px"></i>'
  }]
}).addTo(map);

var zoomControl = L.control.zoom({
  position: "topright"
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
