// Navbar scroll effect
// const navbar = document.querySelector('.navbar');
// const mobileMenuButton = document.querySelector('.mobile-menu-button');
// const menuIcon = document.querySelector('.menu-icon');
// const closeIcon = document.querySelector('.close-icon');
// const mobileMenu = document.querySelector('.mobile-menu');

// Handle scroll events
// window.addEventListener('scroll', () => {
//   if (window.scrollY > 20) {
//     navbar.classList.add('scrolled');
//   } else {
//     navbar.classList.remove('scrolled');
//   }
// });

// Mobile menu toggle
// let isMobileMenuOpen = false;

// function toggleMobileMenu() {
//   isMobileMenuOpen = !isMobileMenuOpen;
  
//   if (isMobileMenuOpen) {
//     mobileMenu.classList.remove('hidden');
//     menuIcon.classList.add('hidden');
//     closeIcon.classList.remove('hidden');
//   } else {
//     mobileMenu.classList.add('hidden');
//     menuIcon.classList.remove('hidden');
//     closeIcon.classList.add('hidden');
//   }
// }

// mobileMenuButton.addEventListener('click', toggleMobileMenu);

// Close mobile menu when clicking a link
// const mobileMenuLinks = document.querySelectorAll('.mobile-nav-link');
// mobileMenuLinks.forEach(link => {
//   link.addEventListener('click', () => {
//     if (isMobileMenuOpen) {
//       toggleMobileMenu();
//     }
//   });
// });


// Navbar scroll effect
const navbar = document.querySelector('.navbar');
const mobileMenuButton = document.querySelector('.mobile-menu-button');
const menuIcon = document.querySelector('.menu-icon');
const closeIcon = document.querySelector('.close-icon');
const mobileMenu = document.querySelector('.mobile-menu');

// Handle scroll events
window.addEventListener('scroll', () => {
  if (window.scrollY > 20) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Mobile menu toggle
let isMobileMenuOpen = false;

function toggleMobileMenu() {
  isMobileMenuOpen = !isMobileMenuOpen;
  
  if (isMobileMenuOpen) {
    mobileMenu.classList.remove('hidden');
    menuIcon.classList.add('hidden');
    closeIcon.classList.remove('hidden');
  } else {
    mobileMenu.classList.add('hidden');
    menuIcon.classList.remove('hidden');
    closeIcon.classList.add('hidden');
  }
}

mobileMenuButton.addEventListener('click', toggleMobileMenu);

// Close mobile menu when clicking a link
const mobileMenuLinks = document.querySelectorAll('.mobile-nav-link');
mobileMenuLinks.forEach(link => {
  link.addEventListener('click', () => {
    if (isMobileMenuOpen) {
      toggleMobileMenu();
    }
  });
});

// Handle contact form submission
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  // Get form data
  const formData = new FormData(contactForm);
  const data = Object.fromEntries(formData);
  
  // Here you would typically send the data to a server
  console.log('Form submitted:', data);
  
  // Clear form
  contactForm.reset();
  
  // Show success message (you can enhance this)
  alert('Message sent successfully!');
});
