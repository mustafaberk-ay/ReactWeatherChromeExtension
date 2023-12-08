import { useEffect, useState } from 'react';
import './App.css';
import { WeatherType } from './type';

function App() {
  const [weatherData, setWeatherData] = useState<WeatherType>()
  const apiUrl = `https://api.weatherbit.io/v2.0/current?lat=41.0151&lon=28.9795&key=28f1ab2dcd3e49baab2135ef005d7414`;

  useEffect(() => {
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data: WeatherType) => setWeatherData(data))
      .catch((err) => console.error(err))
  }, [])

  return (
    <div className="App">
      <h1>Current Weather in {weatherData?.data[0].city_name}</h1>
      <p>{weatherData?.data[0].weather.description}</p>
      <p>Temperature: {weatherData?.data[0].app_temp} celsius</p>
    </div>
  );
}

export default App;
