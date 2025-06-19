// scripts/navigation.js

document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.getElementById("menu-button");
    const navPanel = document.getElementById("nav-panel");
    const overlay = document.getElementById("overlay");
  
    function toggleMenu() {
      navPanel.classList.toggle("open");
      overlay.classList.toggle("active");
    }
  
    menuBtn.addEventListener("click", toggleMenu);
    overlay.addEventListener("click", toggleMenu);
  });
  