
function clearWeatherInfo(){
  document.getElementById("cityResult").textContent = "City:";
  document.getElementById("temperature").textContent = "Temperature:🌡️";
  document.getElementById("wind").textContent = "Wind:🎏 ";
  document.getElementById("gusts").textContent = "Gusts: ";
  document.getElementById("weather").textContent = "Weather:🌦️ ";
  document.getElementById("result").innerHTML = "";
}

function interpretWeatherCode(code) {

  const weatherCodes = {

    0: "Clear sky",
    1: "Mainly clear",
    2: "Partly cloudy",
    3: "Overcast",
    45: "Fog",
    48: "Depositing rime fog",
    51: "Light drizzle",
    53: "Moderate drizzle",
    55: "Dense drizzle",
    56: "Light freezing drizzle",
    57: "Dense freezing drizzle",
    61: "Slight rain",
    63: "Moderate rain",
    65: "Heavy rain",
    66: "Light freezing rain",
    67: "Heavy freezing rain",
    71: "Slight snow fall",
    73: "Moderate snow fall",
    75: "Heavy snow fall",
    77: "Snow grains",
    80: "Slight rain showers",
    81: "Moderate rain showers",
    82: "Violent rain showers",
    85: "Slight snow showers",
    86: "Heavy snow showers",
    95: "Thunderstorm",
    96: "Thunderstorm with slight hail",
    99: "Thunderstorm with heavy hail",
  };
  return weatherCodes[code] || "Unknown weather condition!"
}

async function getWeather(){
const apiKey = '9d2758e1689c5c04300530a8f4303e52'; // API key
clearWeatherInfo();
const city =document.getElementById("city").value.trim(); //pilseetas peremennaja un sanjemt noziime
console.log(city);
if(!city){ //paarbaude, ja nav pilseetas nosaukums, ja tuksa rinda.
    alert("Enter the name of city!!!");
    return;
}
document.getElementById("loading").style.display = "block";
document.getElementById("result").innerHTML = "";
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
try{
    const response = await fetch(url);
    if(!response.ok){
        throw new Error("The city in not found!");
    }
    const data = await response.json();
    document.getElementById("loading").style.display = "none";
    document.getElementById("result").innerHTML = 
    `<h2>${data.name}, ${data.sys.country}</h2>
                    <p>Temperature: ${data.main.temp}°C</p>
                    <p>Weather: ${data.weather[0].description}</p>
                    <p>Humidity: ${data.main.humidity}%</p>
                    <p>Wind: ${data.wind.speed} m/s</p>
               `;
}
catch(error){
    document.getElementById("loading").style.display = "none";
    document.getElementById("result").innerHTML = `<p style="color: red;">Mistake: ${error.message}</p>`;
}

}

// Weather by Location function
const cityEl = document.getElementById("cityResult")

const temperature = document.getElementById("temperature");

const gusts = document.getElementById("gusts");

const wind = document.getElementById("wind");

document.getElementById("weather");

async function fetchWeather() {
  const { data } = await axios.get(
    "https://api.bigdatacloud.net/data/reverse-geocode-client"
  );
  clearWeatherInfo();
  const { city, latitude, longitude } = data;

  cityEl.textContent = city;
  
  console.log(city, latitude, longitude);

 
  const { data: weatherInfo } = await axios.get(
    `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m&current=temperature_2m,wind_speed_10m,wind_direction_10m,wind_gusts_10m,weather_code`
  );

  const { current_units, current } = weatherInfo;
  const { temperature_2m, wind_gusts_10m, wind_speed_10m, weather_code } =
    current;
  const {
    temperature_2m: tempUnit,
    wind_gusts_10m: gustsUnit,
    wind_speed_10m: speedUnit,
  } = current_units;

  temperature.textContent += temperature_2m + tempUnit;
  gusts.textContent +=  wind_gusts_10m + gustsUnit;
  wind.textContent +=  wind_speed_10m + speedUnit;
  weather.textContent += interpretWeatherCode(weather_code);
}

fetchWeather();
