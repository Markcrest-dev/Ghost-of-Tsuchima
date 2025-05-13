
function showAbout(){
    var display_page = document.getElementById("about_us").style.display="block";
    var display_page = document.getElementById("services").style.display="none";
    var display_page = document.getElementById("home").style.display="none";
}

function showServices(){
    var display_page = document.getElementById("about_us").style.display="none";
    var display_page = document.getElementById("services").style.display="block";
    var display_page = document.getElementById("home").style.display="none";
}

function homePage(){
    var display_page = document.getElementById("home").style.display="block";
    var display_page = document.getElementById("services").style.display="none";
    var display_page = document.getElementById("about_us").style.display="none";
}

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");

    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}