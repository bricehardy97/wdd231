const places = [
  {
    "title": "Red Ledges",
    "address": "Diamond Fork Rd, Springville, UT 84663",
    "description": "Kid-friendly canyon area offering hiking, rock climbing, and rappelling, plus picnic tables.",
    "image": "images/ledges.webp"
  },
  {
    "title": "Spanish Fork River Trail",
    "address": "1000 S Main St, Spanish Fork, UT 84660",
    "description": "Enjoy this 12.1-mile out-and-back trail.",
    "image": "images/rivertrail.webp"
  },
  {
    "title": "Spanish Oaks Reservoir",
    "address": "2931 South Spanish Oaks Drive, Spanish Fork, Utah 84660",
    "description": "A popular location for recreation, including swimming, fishing, and kayaking.",
    "image": "images/reservior.webp"
  },
  {
    "title": "Adventure Heights All - Abilities Park",
    "address": "1321 E Canyon Rd, Spanish Fork, UT 84660",
    "description": "All-abilities park with accessible playground equipment, a splash pad, pavilions, and picnic tables.",
    "image": "images/park.webp"
  },
  {
    "title": "Shri Shri Radha Krishna Temple",
    "address": "311 W 8500 S, Spanish Fork, UT 84660",
    "description": "Built in 1998, this Krishna temple features an amphitheater, a gift shop & a vegetarian buffet.",
    "image": "images/temple.webp"
  },
  {
    "title": "Gateway Parks Spanish Fork",
    "address": "2300 E Powerhouse Rd, Spanish Fork, UT 84660",
    "description": "Recreational area offering snow tubing and skiing, plus kid-friendly activities.",
    "image": "images/gateway.webp"
  },
  {
    "title": "Spanish Fork Library",
    "address": "80 S Main St, Spanish Fork, UT 84660",
    "description": "Public library offering a large selection of books and media, along with activities and programs.",
    "image": "images/library.webp"
  },
  {
    "title": "Spanish Fork Fairgrounds",
    "address": "475 S Main St, Spanish Fork, UT 84660",
    "description": "Fairground hosting rodeos, demolition derbies, and other large events.",
    "image": "images/rodeo.webp"
  }
];

const placesContainer = document.getElementById('places');
fetch('data/discover.json')
  .then(response => response.json())
  .then(data => {
    data.forEach(place => {
      const card = document.createElement('section');
      card.classList.add('place-card');

      const title = document.createElement('h2');
      title.textContent = place.title;

      const figure = document.createElement('figure');
      const img = document.createElement('img');
      img.src = place.image;
      img.alt = `Image of ${place.title}`;
      img.loading = 'lazy';
      figure.appendChild(img);

      const address = document.createElement('address');
      address.textContent = place.address;

      const desc = document.createElement('p');
      desc.textContent = place.description;

      const button = document.createElement('button');
      button.textContent = 'Learn More';

      card.append(title, figure, address, desc, button);
      placesContainer.appendChild(card);
    });
  });

// LocalStorage for visit message
const messageContainer = document.getElementById('visit-message');
const lastVisit = localStorage.getItem('lastVisit');
const now = Date.now();

if (!lastVisit) {
  messageContainer.textContent = "Welcome! Let us know if you have any questions.";
} else {
  const daysPassed = Math.floor((now - Number(lastVisit)) / (1000 * 60 * 60 * 24));
  if (daysPassed < 1) {
    messageContainer.textContent = "Back so soon! Awesome!";
  } else if (daysPassed === 1) {
    messageContainer.textContent = "You last visited 1 day ago.";
  } else {
    messageContainer.textContent = `You last visited ${daysPassed} days ago.`;
  }
}

localStorage.setItem('lastVisit', now);

// View toggle
const cardViewBtn = document.getElementById('cardView');
const listViewBtn = document.getElementById('listView');

cardViewBtn.addEventListener('click', () => {
  placesContainer.classList.add('places-grid');
  placesContainer.classList.remove('places-list');
  cardViewBtn.classList.add('active');
  listViewBtn.classList.remove('active');
});

listViewBtn.addEventListener('click', () => {
  placesContainer.classList.add('places-list');
  placesContainer.classList.remove('places-grid');
  listViewBtn.classList.add('active');
  cardViewBtn.classList.remove('active');
});
