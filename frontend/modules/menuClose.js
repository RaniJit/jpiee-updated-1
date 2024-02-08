document.addEventListener("DOMContentLoaded", function () {
  var menuButton = document.getElementById("menuButton");
  var mobileMenu = document.querySelector(".mobile-menu");

  // Open/close mobile menu on button click
  menuButton.addEventListener("click", function () {
    mobileMenu.classList.toggle("show");
  });

  // Close mobile menu when clicking outside the menu
  document.addEventListener("click", function (event) {
    var isClickInsideMobileMenu = mobileMenu.contains(event.target);
    var isClickOnMenuButton = menuButton.contains(event.target);

    if (!isClickInsideMobileMenu && !isClickOnMenuButton) {
      mobileMenu.classList.remove("show");
    }
  });
});
