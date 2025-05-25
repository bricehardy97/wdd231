// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

// Replace with your own API key from OpenWeatherMap
const apiKey = '1318284b07e32852c5b324c83aac4645';
const lat = 49.70;
const lon = 6.64;
const url = 'https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}'

// asynchronous function to fetch data
async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      console.log(data); // check the full data object
      displayResults(data);
    } else {
      throw new Error(await response.text());
    }
  } catch (error) {
    console.error('Fetch error:', error);
  }
}

// function to display results in the HTML
function displayResults(weatherData) {
  const temp = weatherData.main.temp.toFixed(1);
  const desc = weatherData.weather[0].description;
  const iconCode = weatherData.weather[0].icon;
  const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

  currentTemp.textContent = `${temp} °C`;
  weatherIcon.setAttribute('src', iconUrl);
  weatherIcon.setAttribute('alt', desc);
  captionDesc.textContent = desc.charAt(0).toUpperCase() + desc.slice(1);
}

// invoke the function
apiFetch();
