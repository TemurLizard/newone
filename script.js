const endpoint = "https://weatherapp-five-chi.vercel.app/2428271/api"


fetch(endpoint)

     .then(response => response.json())
     .then(response => {

          console.log(response)

         
          let pressure = response.pressure
          let current_time = response.current_time


          document.getElementById("weather__city").innerHTML = "Sheffield"
          document.getElementById("time").innerHTML = current_time
          document.getElementById("pressure").innerHTML = `${pressure.toFixed(0)} hPa`


     })
     .catch(err => {
          console.log(err)
     })

const cachedWeatherData = localStorage.getItem('weatherData');
if (cachedWeatherData) {
     const data = JSON.parse(cachedWeatherData);   
     console.log(data); 
     displayWeatherData(data);
}
else{
     fetch('https://weatherapp-five-chi.vercel.app/2428271/api')
     .then(response => response.json())
     .then(data => {
          localStorage.setItem('weatherData', JSON.stringify(data));
          displayWeatherData(data);

     })
     .catch(error => console.error('Error:', error));
}
function displayWeatherData(data) {
     let weatherDataDiv = document.getElementById('weatherData');
     weatherDataDiv.innerHTML = '';

     // data.forEach(entry => {
     //      let current_time = entry.current_time;
     //      let pressure = entry.pressure;
     //      weatherDataDiv.innerHTML += `<p>Current_time: ${current_time}, Pressure: ${pressure}</p>`;
     // });
          let current_time = data.current_time;
          let pressure = data.pressure;
          weatherDataDiv.innerHTML += `<p>Current_time: ${current_time}, Pressure: ${pressure}</p>`;
}