document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("burger-menu").addEventListener("click", function () {
    const menu = document.getElementById("nav-menu");
    menu.classList.toggle("active");
  });
});
