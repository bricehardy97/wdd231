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

const placesSection = document.getElementById('places');

function createCard(place) {
  return `
    <article class="places-card" tabindex="0">
      <img src="${place.image}" alt="${place.title}">
      <h2>${place.title}</h2>
      <address>${place.address}</address>
      <p>${place.description}</p>
      <button type="button" aria-label="Learn more about ${place.title}">Learn More</button>
    </article>
  `;
}

function createListItem(place) {
  return `
    <article class="place-list-item" tabindex="0">
      <h2>${place.title}</h2>
      <address>${place.address}</address>
      <p>${place.description}</p>
    </article>
  `;
}

function assignCardClasses() {
  const cards = document.querySelectorAll('.places-card');
  cards.forEach((card, index) => {
    card.classList.forEach(cls => {
      if (/^card\d+$/.test(cls)) {
        card.classList.remove(cls);
      }
    });
    card.classList.add(`card${index + 1}`);
  });
}

function renderCardView() {
  placesSection.classList.remove('list-view');
  placesSection.classList.add('card-view');
  placesSection.innerHTML = places.map(createCard).join('');
  assignCardClasses();
}

function renderListView() {
  placesSection.classList.remove('card-view');
  placesSection.classList.add('list-view');
  placesSection.innerHTML = places.map(createListItem).join('');
}

const cardViewBtn = document.getElementById('cardView');
const listViewBtn = document.getElementById('listView');

cardViewBtn.addEventListener('click', () => {
  renderCardView();
  cardViewBtn.classList.add('active');
  listViewBtn.classList.remove('active');
});

listViewBtn.addEventListener('click', () => {
  renderListView();
  listViewBtn.classList.add('active');
  cardViewBtn.classList.remove('active');
});

// Initial render
renderCardView();

// Footer date scripts
const copyrightSpan = document.getElementById('copyright');
const lastModifiedSpan = document.getElementById('lastModified');

const year = new Date().getFullYear();
copyrightSpan.textContent = `© ${year} Spanish Fork Chamber of Commerce`;
lastModifiedSpan.textContent = `Last Updated: ${document.lastModified}`;
