// Get the current page URL
let url = window.location.href;

// Get all the navigation links
let navLinks = document.querySelectorAll('.nav a');

// Loop through all the navigation links
for (let i = 0; i < navLinks.length; i++) {

  // Check if the URL of the link matches the current page URL
  if (navLinks[i].href === url) {

    // Add the "current" class to the link
    navLinks[i].classList.add('current');
  }
}
