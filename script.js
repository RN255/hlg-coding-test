// variables
var navHamburger = document.getElementsByClassName("navHamburger")[0];
var navLinksContainer = document.getElementsByClassName("navLinksContainer")[0];
var upperBurgerBar = document.getElementsByClassName("burgerBar")[0];
var lowerBurgerBar = document.getElementsByClassName("burgerBar")[2];
var middleBurgerBar = document.getElementsByClassName("burgerBar")[1];

// nav open/closed variable
var navOpen = false;

// open and close nav links
navHamburger.addEventListener("click", function () {
  if (navOpen == false) {
    // show nav links
    navLinksContainer.classList.add("navLinksContainerVisible");
    // animate burger icon
    upperBurgerBar.classList.add("rotateDown");
    lowerBurgerBar.classList.add("rotateUp");
    middleBurgerBar.classList.add("hideBurgerBar");
    // prevent scrolling
    document.body.style.overflow = "hidden";
    // change nav open/close variable
    navOpen = true;
  } else {
    // hide nav links
    navLinksContainer.classList.remove("navLinksContainerVisible");
    // animate burger icon
    upperBurgerBar.classList.remove("rotateDown");
    lowerBurgerBar.classList.remove("rotateUp");
    middleBurgerBar.classList.remove("hideBurgerBar");
    // allow scrolling
    document.body.style.overflow = "visible";
    // change nav open/close variable
    navOpen = false;
  }
});
