// scripts/hunts.js

export async function displayHunts() {
    const container = document.getElementById('hunts-list');
    container.innerHTML = '';
  
    // Modal element references
    const modal = document.getElementById('hunt-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalImage = document.getElementById('modal-image');
    const modalDescription = document.getElementById('modal-description');
    const modalPrice = document.getElementById('modal-price');
    const modalClose = document.getElementById('modal-close');
  
    // Modal open/close functions
    const openModal = (hunt) => {
      modalTitle.textContent = hunt.title;
      modalImage.src = hunt.image;
      modalImage.alt = hunt.title;
      modalDescription.textContent = hunt.description;
      modalPrice.textContent = hunt.price;
      modal.classList.add('show');
    };
  
    const closeModal = () => {
      modal.classList.remove('show');
    };
  
    // Modal event listeners
    modalClose.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });
  
    try {
      const response = await fetch('data/hunts.json');
      if (!response.ok) throw new Error('Failed to load hunts.json');
  
      const huntsData = await response.json();
  
      huntsData.forEach(hunt => {
        const card = document.createElement('article');
        card.className = 'hunt-card';
  
        card.innerHTML = `
          <img src="${hunt.image}" alt="${hunt.title}" loading="lazy" />
          <h3>${hunt.title}</h3>
          <p>${hunt.description}</p>
          <div class="price">${hunt.price}</div>
          <button class="details-btn" aria-label="View details for ${hunt.title}">Details</button>
        `;
  
        card.querySelector('.details-btn').addEventListener('click', () => {
          openModal(hunt);
        });
  
        container.appendChild(card);
      });
    } catch (error) {
      container.innerHTML = '<p class="error-message">Sorry, failed to load hunt packages.</p>';
      console.error(error);
    }
  }
  