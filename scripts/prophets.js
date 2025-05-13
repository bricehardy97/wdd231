const url = 'https://byui-cse.github.io/cse-ww-program/data/latter-day-prophets.json';
const cards = document.querySelector('#cards');
async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    displayProphets(data.prophets)
  }
  
  getProphetData();

  const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {
     
      const card = document.createElement('section');
      const fullName = document.createElement('h2');
      const portrait = document.createElement('img');
  
    
      fullName.textContent = `${prophet.name} ${prophet.lastname}`;
      
      portrait.setAttribute('src', prophet.imageurl);
      portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname} - ${prophet.order} Latter-day Prophet`);
      portrait.setAttribute('loading', 'lazy');
      portrait.setAttribute('width', '340');
      portrait.setAttribute('height', '440');
  
     
      card.appendChild(fullName);
      card.appendChild(portrait);
  

      cards.appendChild(card);
    });
  };