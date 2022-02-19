// Navbar

let mainNav = document.getElementById("menu");
let navBarToggle = document.getElementById("nav-toggle");
navBarToggle.addEventListener("click", function () {
  mainNav.classList.toggle("active");
});

// Navbar to section link

$("li.listItem").click(function () {
  var section = $(this).children().attr("href");
  console.log("section", section);

  position = $(section).offset().top - $("nav").height() - 50;
  $("html, body").animate({ scrollTop: position });
});

// Show Courses

var showCourses = document.getElementsByClassName("showCourses");
var i;

for (i = 0; i < showCourses.length; i++) {
  showCourses[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}
