const hamburger = document.querySelector(".hamburger-container");
const mobMenu = document.querySelector(".nav-menu-container");
function showMobileMenu() {
    mobMenu.classList.toggle("showNavMobCss");
    const img = document.querySelector('.hamburger-container img')
    if (flag == true) {
      flag = false;
      img.setAttribute('src', './assets/images/icons/cross.svg')
    } else if (flag == false) {
      flag = true;
      img.setAttribute('src', './assets/images/icons/hamburger.svg')
    }
  }