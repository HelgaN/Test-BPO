/*
const toggle = document.querySelector(".animated-icon");
toggle.onclick = () => {
  toggle.classList.toggle("open");
};*/

$(document).ready(function () {
  $(".navbar-toggler").on("click", function () {
    $(".animated-icon").toggleClass("open");
  });
});
