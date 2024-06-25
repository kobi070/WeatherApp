import "./currentWeather.css";

const CurrentWeather = ({data}) => {
  

  console.log(`${JSON.stringify(data)}`)
  console.log(`data = ${data.current.condition.icon}`)
  return (
    <div className="weather">
      <div className="top">
        <div>
          <p className="city">{data.city}</p>
          <p className="city-description">{data.current.condition.text}</p>
        </div>
        <img alt="weather" className="weather-icon" src={`${data.current.condition.icon}`}></img>
      </div>
      <div className="buttom">
        <div className="details">
            <p className="temperature">{data.current.temp_c}°C</p>
            <div className="params-row">
                <span className="params-label-top">Details</span>
            </div>
            <div className="params-row">
                <span className="params-label">Feels like</span>
                <span className="params-value">{data.current.feelslike_c}°C</span>
            </div>
            <div className="params-row">
                <span className="params-label">Wind</span>
                <span className="params-value">{data.current.wind_mph} m/s</span>
            </div>
            <div className="params-row">
                <span className="params-label">Humidity</span>
                <span className="params-value">{data.current.humidity}%</span>
            </div>
            <div className="params-row">
                <span className="params-label">Pressure</span>
                <span className="params-value">{data.current.pressure_in} hPa</span>
            </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;

// `icons/01d.png`
