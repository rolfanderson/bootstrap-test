/***** Snackbar *****/
$(document).ready(function() {
    $("#hide").click(function(){
        $("#snackbar").hide();
    });
});

setTimeout(function() {
  $("#snackbar").hide().empty();
}, 9000);

/***** Sidebar *****/
$("#sidebar-toggle-btn").click(function() {
  sidebarOpen();
  return false;
});

function sidebarOpen() {
    document.getElementById("sidebar").style.width = "250px";
    document.getElementById("sidebar-backdrop").style.display = "block";
    return false;
}

$("#sidebar-backdrop").click(function() {
  sidebarClose();
  return false;
});

function sidebarClose() {
    document.getElementById("sidebar").style.width = "0";
    document.getElementById("sidebar-backdrop").style.display = "none";
    return false;
}

var cards = $(".random-section");
for(var i = 0; i < cards.length; i++){
    var target = Math.floor(Math.random() * cards.length -1) + 1;
    var target2 = Math.floor(Math.random() * cards.length -1) +1;
    cards.eq(target).before(cards.eq(target2));
}
