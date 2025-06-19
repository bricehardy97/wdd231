const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

menuToggle.addEventListener('click', () => {
  menu.classList.toggle('hidden');
});

// Close menu when clicking outside
window.addEventListener('click', (e) => {
  if (!menu.contains(e.target) && e.target !== menuToggle) {
    menu.classList.add('hidden');
  }
});

// Close menu on resize to desktop
window.addEventListener('resize', () => {
  if (window.innerWidth > 767) {
    menu.classList.add('hidden');
  }
});