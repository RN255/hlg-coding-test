// variables
var navHamburger = document.getElementsByClassName("navHamburger")[0];
var navLinksContainer = document.getElementsByClassName("navLinksContainer")[0];
var header = document.getElementsByClassName("header")[0];
var navLinksList = document.getElementsByClassName("navLinksList")[0];
var upperBurgerBar = document.getElementsByClassName("burgerBar")[0];
var lowerBurgerBar = document.getElementsByClassName("burgerBar")[2];
var middleBurgerBar = document.getElementsByClassName("burgerBar")[1];

// nav open/closed variable
var navOpen = false;

// functions
navHamburger.addEventListener("click", function () {
  if (navOpen == false) {
    navLinksContainer.classList.add("navLinksContainerVisible");
    header.classList.add("fullScreenHeader");
    upperBurgerBar.classList.add("rotateDown");
    lowerBurgerBar.classList.add("rotateUp");
    middleBurgerBar.classList.add("hideBurgerBar");
    document.body.style.overflow = "hidden";
    // navLinksList.classList.add("navLinksListBlock");

    navOpen = true;
  } else {
    navLinksContainer.classList.remove("navLinksContainerVisible");
    header.classList.remove("fullScreenHeader");
    upperBurgerBar.classList.remove("rotateDown");
    lowerBurgerBar.classList.remove("rotateUp");
    middleBurgerBar.classList.remove("hideBurgerBar");
    document.body.style.overflow = "visible";

    // navLinksList.classList.remove("navLinksListBlock");

    navOpen = false;
  }

  console.log("clicked");
});
