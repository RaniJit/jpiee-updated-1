document.addEventListener("DOMContentLoaded", function () {
  const menuButton = document.getElementById("menuButton");
  const mobileMenu = document.querySelector(".mobile-menu");


  // Close mobile menu when clicking outside the menu
  document.addEventListener("click", function (event) {
    const isClickInsideMobileMenu = mobileMenu.contains(event.target);
    const isClickOnMenuButton = menuButton.contains(event.target);

    if (!isClickInsideMobileMenu && !isClickOnMenuButton) {
      mobileMenu.classList.remove("show");
    }
  });
});
