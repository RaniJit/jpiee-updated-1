// document.addEventListener("DOMContentLoaded", function () {
//   var menuButton = document.getElementById("menuButton");
//   var mobileMenu = document.querySelector(".mobile-menu");

//   // Open/close mobile menu on button click
//   menuButton.addEventListener("click", function () {
//     mobileMenu.classList.toggle("show");
//   });

//   // Close mobile menu when clicking outside the menu
//   document.addEventListener("click", function (event) {
//     var isClickInsideMobileMenu = mobileMenu.contains(event.target);
//     var isClickOnMenuButton = menuButton.contains(event.target);

//     if (!isClickInsideMobileMenu && !isClickOnMenuButton) {
//       mobileMenu.classList.remove("show");
//     }
//   });
// });

document.addEventListener("DOMContentLoaded", function () {
  var menuButton = document.getElementById("menuButton");
  var mobileMenu = document.querySelector(".mobile-menu");

  // Close mobile menu when clicking outside the menu
  document.addEventListener("click", function (event) {
    var isClickOnMenuButton = menuButton.contains(event.target);
    // Check if the click is outside the menu and not on the menu button
    if (!isClickOnMenuButton) {
      mobileMenu.classList.remove("show");
    }
  });
});
