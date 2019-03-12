let hamburgerButton = document.querySelector(".navigation-hamburger-button")

hamburgerButton.addEventListener("click", ()=> {
  // console.log("clicked!")
  let mobileMenu = document.querySelector(".navigation-links-mobile")

  mobileMenu.classList.toggle("hidden-mobile-menu")
  // console.log("done!")
})
