async function fetchWeather() {
    const location = document.getElementById('location').value;
    const apiKey = 'b459421454334cbbb2192707252401';
    const apiUrl = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&aqi=yes`;
  
    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error('Location not found');
      }
  
      const data = await response.json();
      const { location: loc, current } = data;
  
      document.getElementById('weather').innerHTML = `
        <h3>Weather in ${loc.name}, ${loc.country}</h3>
        <p>Temperature: ${current.temp_c}°C</p>
        <p>Condition: ${current.condition.text}</p>
        <p>Humidity: ${current.humidity}%</p>
        <p>Wind Speed: ${current.wind_kph} kph</p>
      `;
    } catch (error) {
      document.getElementById('weather').innerHTML = `<p style=\"color: red;\">${error.message}</p>`;
    }
  }
  