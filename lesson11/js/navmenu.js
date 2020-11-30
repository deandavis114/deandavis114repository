function toggleMenu() {
    
  document.getElementById("primarynav").classList.toggle("hide");
}

/* IIFE to avoid collisions with global namespace */
(function () {

  /* Hamburger Menu */
  const menu = document.querySelectorAll(".navigation")[0];
  document.getElementById("menu-button").addEventListener("click", () => {
    menu.classList.toggle("responsive");
  });


});