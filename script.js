// variables
var navHamburger = document.getElementsByClassName("navHamburger")[0];
var navLinksContainer = document.getElementsByClassName("navLinksContainer")[0];
var header = document.getElementsByClassName("header")[0];
var navLinksList = document.getElementsByClassName("navLinksList")[0];

// nav open/closed variable
var navOpen = false;

// functions
navHamburger.addEventListener("click", function () {
  if (navOpen == false) {
    navLinksContainer.classList.add("navLinksContainerVisible");
    header.classList.add("fullScreenHeader");
    // navLinksList.classList.add("navLinksListBlock");

    navOpen = true;
  } else {
    navLinksContainer.classList.remove("navLinksContainerVisible");
    header.classList.remove("fullScreenHeader");
    // navLinksList.classList.remove("navLinksListBlock");

    navOpen = false;
  }

  console.log("clicked");
});
