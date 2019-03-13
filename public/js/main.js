// Mobile header menu

let mobileMenu = document.querySelector(".navigation-links-mobile");
let hamburgerButton = document.querySelector(".navigation-hamburger-button");
let hamburgerButtonImg = document.querySelector(
  ".navigation-hamburger-button-img"
);

hamburgerButton.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden-mobile-menu");

  if (mobileMenu.classList.contains("hidden-mobile-menu")) {
    hamburgerButtonImg.setAttribute(
      "src",
      "./assets/hamburger-menu-icon-close.svg"
    );
  } else {
    hamburgerButtonImg.setAttribute(
      "src",
      "./assets/hamburger-menu-icon-open.svg"
    );
  }
});

// Button drop shadows

// const buttons = document.querySelectorAll("button");
// console.log(buttons);
// buttons.forEach(button => {
//   button.addEventListener("mouseover", function(event) {
//     TweenMax.to(button, 0.5, { className: "+= drop-shadow" });
//   });

//   button.addEventListener("mouseleave", function(event) {
//     TweenMax.to(button, 0.5, { className: "-= drop-shadow" });
//   });
// });

// Mobile menu drop-down animation

// let burgerButton = document.querySelector(".navigation-hamburger-button-img");
// console.log(burgerButton);
// let mobileMenu = document.querySelector(".navigation-links-mobile");
// console.log(mobileMenu);
// burgerButton.addEventListener("click", function(event) {
//   TweenMax.to(mobileMenu, 2.5, { className: "+= hidden-mobile-menu" });
// });
