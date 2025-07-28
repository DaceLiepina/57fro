async function getWeather(){
const apiKey = '9d2758e1689c5c04300530a8f4303e52'; // API key
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
