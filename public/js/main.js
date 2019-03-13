let mobileMenu = document.querySelector(".navigation-links-mobile")
let hamburgerButton = document.querySelector(".navigation-hamburger-button")
let hamburgerButtonImg = document.querySelector(".navigation-hamburger-button-img")

hamburgerButton.addEventListener("click", ()=> {
  mobileMenu.classList.toggle("hidden-mobile-menu")

  if (mobileMenu.classList.contains("hidden-mobile-menu")) {
    hamburgerButtonImg.setAttribute("src", "./assets/hamburger-menu-icon-close.svg")
  } else {
    hamburgerButtonImg.setAttribute("src", "./assets/hamburger-menu-icon-open.svg")
  }
})