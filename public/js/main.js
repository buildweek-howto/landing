let hamburgerButton = document.querySelector(".navigation-hamburger-button")

hamburgerButton.addEventListener("click", ()=> {
  // console.log("clicked!")
  let mobileMenu = document.querySelector(".navigation-links-mobile")
  let open = document.querySelector(".open")
  let close = document.querySelector(".close")

  mobileMenu.classList.toggle("hidden-mobile-menu")
  // console.log("done!")
  
})
