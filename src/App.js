import "./App.css";
import Search from "./components/search";
import CurrentWeather from "./components/currentWeather";
import { weatherApiOptions, WEATHER_API_URL2 } from "./api";
import { useState } from "react";

function App() {
  const [currentWeather, setWeather] = useState(""); // use state to store currentWeather data
  const [forecast, setForecast] = useState(""); // use state to store forecast data

  const handleOnSearchChange = (serachData) => {
    const [lon, lat] = serachData.value.split(""); // split latitude and longitude

    // fetch currentWeather data and forecast data
    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL2}current.json?q=${lat},${lon}`,
      weatherApiOptions
    );

    const currentForecastFetch = fetch(
      `${WEATHER_API_URL2}forecast.json?q=${lat},${lon}`,
      weatherApiOptions
    );

    // create a new promise object
    // then create an async function to await the results of the fetch request
    Promise.all([currentWeatherFetch, currentForecastFetch]).then(
      async (res) => {
        const currentWeatherResponse = await res[0].json();
        const forecastResponse = await res[1].json();

        setWeather({ city: serachData.label, ...currentWeatherResponse }); // update weather
        setForecast({ city: serachData.label, ...forecastResponse }); // update forecast
      }
    );
  };
  // Console output for debugging purposes
  // console.log(JSON.stringify(currentWeather));
  // console.log(JSON.stringify(forecast));
  // console.log(`${currentWeather.city} and ${forecast}`);
  
  return (
    <div className="App">
      <Search onSearchChange={handleOnSearchChange} />
      {currentWeather && <CurrentWeather data={currentWeather} />}
    </div>
  );
}

export default App;
