import { useEffect, useState } from 'react';
import './App.css';
import { WeatherType, LocationType } from './type';

function App() {
  const [location, setLocation] = useState<LocationType>()
  const [weatherData, setWeatherData] = useState<WeatherType>()

  function handleLocationClick(){
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(success, error)
    }
    else{
      console.log('Geolocation not supported')
    }
  }

  function success(position: GeolocationPosition){
    const lat = position.coords.latitude
    const lon = position.coords.longitude
    setLocation({ lat, lon })
    console.log(`Lat: ${lat} && Lon: ${lon}`)

    const apiUrl = `https://api.weatherbit.io/v2.0/current?lat=${lat}&lon=${lon}&key=28f1ab2dcd3e49baab2135ef005d7414`;
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data: WeatherType) => setWeatherData(data))
      .catch((err) => console.error(err))
  }

  function error(){
    console.log('Unable to retrieve your location')
  }

  return (
    <div className="App">
      {!location ? <button onClick={handleLocationClick}>Get Location</button> : null}
      {location && !weatherData ? <p>Loading weather data...</p> : null}
      {weatherData ? (
        <div>
          <h1>Current Weather in {weatherData?.data[0].city_name}</h1>
          <p>{weatherData?.data[0].weather.description}</p>
          <p>Temperature: {weatherData?.data[0].app_temp} celsius</p>
        </div>
      ) : null}
      <iframe src='http://localhost:5173/'></iframe>
    </div>
  );
}

export default App;
