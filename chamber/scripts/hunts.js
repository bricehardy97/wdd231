export async function displayHunts() {
    const container = document.getElementById('hunts-list');
    container.innerHTML = '';
  
    try {
      const response = await fetch('./scripts/hunts.json'); // Adjust path as needed
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
          alert(`Details for ${hunt.title} coming soon!`);
        });
  
        container.appendChild(card);
      });
    } catch (error) {
      container.innerHTML = '<p class="error-message">Sorry, failed to load hunt packages.</p>';
      console.error(error);
    }
  }
  