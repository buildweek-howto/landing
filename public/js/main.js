// Mobile menu component

// RUBRIC: JAVASCRIPT FUNDAMENTALS
class MobileMenu {
  constructor(element) {
    this.element = element;

    this.button = document.querySelector(".navigation-hamburger-button-img");

    this.links = document.querySelectorAll(".navigation-link-mobile");

    this.button.addEventListener("click", () => {
      this.toggleMenu();
    });

    this.links.forEach(link =>
      link.addEventListener("click", () => this.toggleMenu())
    );
  }

  toggleMenu() {
    if (!this.element.classList.contains("hidden-mobile-menu")) {
      TweenLite.set(this.element, { opacity: 0 });
      TweenLite.to(this.element, 0.5, {
        className: "+= hidden-mobile-menu",
        opacity: 1,
        // Need this to keep from hiding in mobile view
        zIndex: 1
      });
      this.button.src = "./assets/hamburger-menu-icon-close.svg";
    } else {
      this.element.classList.remove("hidden-mobile-menu");
      this.button.src = "./assets/hamburger-menu-icon-open.svg";
    }
  }
}

// Mobile menu component instantiation

const mobileMenu = new MobileMenu(
  document.querySelector(".navigation-links-mobile")
);

// Header animations
const headerText = document.getElementsByClassName("header-description")[0];
const headerImg = document.getElementsByClassName("header-image")[0];

TweenLite.fromTo(headerText, 1.5, { x: -500 }, { ease: Expo.easeOut, x: 0 });

TweenLite.fromTo(headerImg, 1.5, { x: 500 }, { ease: Expo.easeOut, x: 0 });

// Header animations with individual elements; button does not work
// const headerText = document.querySelector(".header-description h1");
// const headerPara = document.querySelector(".header-description p");
// const headerBtn = document.querySelector(".header-description button");

// const headerImg = document.getElementsByClassName("header-image")[0];

// TweenLite.fromTo(headerText, 2, { x: -500 }, { ease: Expo.easeOut, x: 0 });
// TweenLite.fromTo(
//   headerPara,
//   1.5,
//   { x: -500 },
//   { ease: Expo.easeOut, x: 0 }
// ).delay(0.5);
// TweenLite.fromTo(headerBtn, 2, { x: -500 }, { ease: Expo.easeOut, x: 0 });

// TweenLite.fromTo(headerImg, 2, { x: 500 }, { ease: Expo.easeOut, x: 0 });

// Working on fixed logo
const logo = document.getElementsByClassName("navigation-logo")[0];
const logoFixed = document.getElementsByClassName("navigation-logo-fixed")[0];
// console.log(logo, logoFixed);

window.addEventListener("scroll", function() {
  if (window.innerWidth > 768) {
    displayLogoFixed();
    window.addEventListener("resize", () => {
      if (window.innerWidth > 768) {
        displayLogoFixed();
      } else {
        dontDisplayLogoFixed();
      }
    });
  } else {
    dontDisplayLogoFixed();
  }
});

function displayLogoFixed() {
  logoFixed.style.display = "block";
  logoFixed.classList.add("navigation-logo-scroll");
  logo.style.visibility = "hidden";
}

function dontDisplayLogoFixed() {
  logoFixed.style.display = "none";
  logoFixed.classList.remove("navigation-logo-scroll");
  logo.style.visibility = "visible";
}

// console.log(window.innerWidth);

// FEATURES SAMPLE DATA:

// let featuresData = [
//   {
//     "feature": "like and review",
//     "imgSrc" : "https://i.imgur.com/qRIoZNu.jpg",
//     "title": "Like and Review Posts",
//     "description":
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia asperiores corporis odit voluptatum rem esse quaerat veritatis ratione impedit eius placeat, similique ad a possimus ab voluptatem tenetur! Magnam, provident velit praesentium veniam assumenda repellendus id dolore perferendis illo quidem et, quasi pariatur labore unde alias eveniet a minus! Quaerat."
//   },
//   {
//     "feature": "share",
//     "imgSrc" : "https://i.imgur.com/qRIoZNu.jpg",
//     "title": "Share Post test title",
//     "description":
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia asperiores corporis odit voluptatum rem esse quaerat veritatis ratione impedit eius placeat, similique ad a possimus ab voluptatem tenetur! Magnam, provident velit praesentium veniam assumenda repellendus id dolore perferendis illo quidem et, quasi pariatur labore unde alias eveniet a minus! Quaerat."
//   },
//   {
//     "feature": "another feature test 123",
//     "imgSrc" : "https://i.imgur.com/qRIoZNu.jpg",
//     "title": "Another Feature Test 123",
//     "description":
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia asperiores corporis odit voluptatum rem esse quaerat veritatis ratione impedit eius placeat, similique ad a possimus ab voluptatem tenetur! Magnam, provident velit praesentium veniam assumenda repellendus id dolore perferendis illo quidem et, quasi pariatur labore unde alias eveniet a minus! Quaerat."
//   },
// ];

// RUBRIC: APPLIED JAVASCRIPT

class Features {
  constructor(feature, index) {
    this.section = document.createElement("section")
    this.section.className = "content-panel"

    if (index % 2 === 0) {
      this.section.classList.add("reverse")
    }

    this.contentImage = document.createElement("div")
    this.contentImage.className = "content-image"

    this.contentImageImg = document.createElement("img")
    this.contentImageImg.className = "content-image-img"
    this.contentImageImg.setAttribute("src",feature.imgSrc)

    if (index % 2 === 0) {
      this.contentImageImg.classList.add("image-reverse")
    } else {
      this.contentImageImg.classList.add("image-straight")
    }

    this.contentText = document.createElement("div")
    this.contentText.className = "content-text"

    this.contentTextH2 = document.createElement("h2")
    this.contentTextH2.textContent = feature.title

    this.contentTextP = document.createElement("p")
    this.contentTextP.textContent = feature.description

    // append to .container
    this.container = document.querySelector(".container")
    this.container.appendChild(this.section)
    this.section.appendChild(this.contentImage)
    this.contentImage.appendChild(this.contentImageImg)
    this.section.appendChild(this.contentText)
    this.contentText.appendChild(this.contentTextH2)
    this.contentText.appendChild(this.contentTextP)
  }
}

// if there is a feature in data array
if (featuresData[0].title) {

  featuresData.forEach((feature,index)=>{
    return new Features(feature,index)
  })

}