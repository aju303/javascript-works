function getWeather(){
    let cityName=id_city.value;
    console.log(cityName);

    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=6fa99e1f96f024f79970c5a3532b2ac6&units=metric`).
    then(res=>res.json()).then(data=>displayWeather(data))
}


function displayWeather(data){
    let temperature=data.main.temp;
    let mintemp=data.main.temp_min;
    let maxtemp=data.main.temp_max;

    let htmlData=`

    <div class="card text-center">
  <div class="card-header">
    ${temperature}
  </div>
  <div class="card-body">
    <h5 class="card-title">Temperature is ${temperature}</h5>
    <p class="card-text">Min Temp is ${mintemp}</p>
    <p class="card-text">max Temp is ${maxtemp}</p>
  </div>
  <div class="card-footer text-muted">
    Today
  </div>
</div>
    
    
    `
    let humidity=data.main.humidity;
    let windDegree=data.wind.deg;
    let feelsLike=data.main.feels_like

    let humidityData=`

    <div class="card text-center">
    <div class="card-header">
      Humidity info
    </div>
    <div class="card-body">
      <h5 class="card-title">${humidity}</h5>
      <p class="card-text">Wind degree is ${windDegree}</p>
      <p class="card-text">Feels like is ${feelsLike}</p>
      <p class="card-text">Humidity is ${humidity}</p>
    </div>
    <div class="card-footer text-muted">
      Today
    </div>
  </div>
    
    `

    let windspeed=data.wind.speed
    let sunrise=data.sys.sunrise
    let sunset=data.sys.sunset

    let windData=`

    <div class="card text-center">
    <div class="card-header">
      wind info
    </div>
    <div class="card-body">
      <h5 class="card-title">${windspeed} KM/hr</h5>
      <p class="card-text">wind speed is ${windspeed}</p>
      <p class="card-text">sunrise time ${sunrise}</p>
      <p class="card-text">sunset time ${sunset}</p>
    </div>
    <div class="card-footer text-muted">
      Today
    </div>
  </div>

    `

id_temp.innerHTML=htmlData
id_humidity.innerHTML=humidityData
id_wind.innerHTML=windData
id_place.innerHTML=`weather in ${data.name}`

}

function getWeatherByLocation(){
  if (navigator.geolocation){
    navigator.geolocation.getCurrentPosition((pos)=>{
      let lat=pos.coords.latitude;
      let long=pos.coords.longitude;
      console.log(lat,long);
      fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=6fa99e1f96f024f79970c5a3532b2ac6`).
      then(res=>res.json()).then(data=>displayWeather(data))
    })
  }

}
  
