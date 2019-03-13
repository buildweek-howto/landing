class MobileMenu {
  constructor(element) {
    this.element = element;

    this.button = document.querySelector(".navigation-hamburger-button-img");

    this.links = document.querySelectorAll(".navigation-link-mobile");
    console.log(this.links);

    this.button.addEventListener("click", () => {
      this.toggleMenu();
    });

    this.links.forEach(link =>
      link.addEventListener("click", () => this.toggleMenu())
    );
  }

  toggleMenu() {
    if (!this.element.classList.contains("hidden-mobile-menu")) {
      TweenMax.set(this.element, { opacity: 0 });
      TweenMax.to(this.element, 0.5, {
        className: "+= hidden-mobile-menu",
        opacity: 1
      });
      this.button.src = "./assets/hamburger-menu-icon-close.svg";
    } else {
      this.element.classList.remove("hidden-mobile-menu");
      this.button.src = "./assets/hamburger-menu-icon-open.svg";
    }
  }
}

const mobileMenu = new MobileMenu(
  document.querySelector(".navigation-links-mobile")
);
