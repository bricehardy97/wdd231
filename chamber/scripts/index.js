// ✅ Weather API Configuration
const weatherApiKey = '1318284b07e32852c5b324c83aac4645'; // <-- Replace with your actual OpenWeatherMap API key
const city = 'Spanish Fork';
const weatherURL = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${weatherApiKey}&units=imperial`;

async function getWeather() {
  try {
    const response = await fetch(weatherURL);
    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
    
    const data = await response.json();
    if (!data.list || data.list.length === 0) {
      throw new Error("Weather data not available or list is empty");
    }

    // ✅ Current Weather
    const current = data.list[0];
    document.getElementById('current-weather').innerHTML = `
      <p><strong>${Math.round(current.main.temp)}°F</strong> - ${current.weather[0].description}</p>
      <p>Humidity: ${current.main.humidity}%</p>
    `;

    // ✅ Forecast for next 3 days (12:00:00)
    const forecastList = data.list.filter(item => item.dt_txt.includes('12:00:00')).slice(0, 3);
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    document.getElementById('forecast').innerHTML = forecastList.map(day => {
      const date = new Date(day.dt_txt);
      return `<p>${days[date.getDay()]}: <strong>${Math.round(day.main.temp)}°F</strong></p>`;
    }).join('');

  } catch (error) {
    console.error('Weather fetch error:', error);
    document.getElementById('current-weather').innerHTML = `<p>Unable to load weather data.</p>`;
    document.getElementById('forecast').innerHTML = '';
  }
}

// Call the function when the page loads
document.addEventListener('DOMContentLoaded', () => {
    getWeather();
    loadSpotlights();
  });

  async function loadSpotlights() {
    try {
      const response = await fetch('data/members.json'); // adjust path if needed
      if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
  
      const members = await response.json();
  
      // Filter Gold (1) and Silver (2) members by number
      const spotlightMembers = members.filter(member =>
        member.membership === 1 || member.membership === 2
      );
  
      // Pick up to 3 random spotlight members
      const selected = spotlightMembers
        .sort(() => 0.5 - Math.random())
        .slice(0, 3);
  
      // Render them to the HTML
      const container = document.getElementById('spotlight-container');
      container.innerHTML = selected.map(member => `
        <div class="spotlight-card">
          <h3>${member.name}</h3>
          <img src="images/${member.image}" alt="${member.name}">
          <p>${member.description}</p>
          <a href="${member.website}" target="_blank" rel="noopener">Visit Website</a>
        </div>
      `).join('');
  
    } catch (error) {
      console.error('Spotlight fetch error:', error);
      document.getElementById('spotlight-container').innerHTML = `<p>Unable to load spotlights.</p>`;
    }
  }
  
  console.log(members); // after fetching
console.log(spotlightMembers); // after filtering
