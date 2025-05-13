
// Function to handle search form submission
function handleSearch(event) {
  event.preventDefault();
  const searchInput = document.getElementById('searchInput').value.toLowerCase();

  // Simple search logic to match content
  if (searchInput.includes('service') || searchInput.includes('product')) {
    showServices();
  } else if (searchInput.includes('about') || searchInput.includes('contact')) {
    showAbout();
  } else {
    alert('No matching results found!');
  }
}

// Function to show about page
function showAbout() {
  document.getElementById('about_us').style.display = 'block';
  document.getElementById('services').style.display = 'none';
  document.getElementById('home').style.display = 'none';
}

// Function to show services page
function showServices() {
  document.getElementById('about_us').style.display = 'none';
  document.getElementById('services').style.display = 'block';
  document.getElementById('home').style.display = 'none';
}

// Function to show home page
function homePage() {
  document.getElementById('home').style.display = 'block';
  document.getElementById('services').style.display = 'none';
  document.getElementById('about_us').style.display = 'none';
}

// Initialize accordion functionality
document.addEventListener('DOMContentLoaded', function () {
  const accordions = document.getElementsByClassName('accordion');

  for (let accordion of accordions) {
    accordion.addEventListener('click', function () {
      this.classList.toggle('active');
      const panel = this.nextElementSibling;

      if (panel.style.display === 'block') {
        panel.style.display = 'none';
      } else {
        panel.style.display = 'block';
      }
    });
  }
});