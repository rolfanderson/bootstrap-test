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
    var x = document.getElementById("sidebar")
    x.className = "show";
    document.getElementById("sidebar-backdrop").style.display = "block";
    return false;
}

$("#sidebar-backdrop").click(function() {
  sidebarClose();
  return false;
});

function sidebarClose() {
    var x = document.getElementById("sidebar")
    x.className = "close";
    //x.className = x.className.replace("show", "");
    document.getElementById("sidebar-backdrop").style.display = "none";
    return false;
}
