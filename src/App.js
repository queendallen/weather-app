import "./App.css";
import React, {useEffect, useState} from "react";
import Forecast from "./components/Forecast";
import CurrentWeather from "./components/CurrentWeather";
import TempChart from "./components/TempChart";

function App() {
  const [location, setLoc] = useState('London');
  const [data, setData] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      /* fetch data from API
        then convert into JSON format
      */
      await fetch(`${process.env.REACT_APP_API_URL}/forecast?q=${location}&appid=${process.env.REACT_APP_API_KEY}`)
      .then(res => res.json())
      .then(result => {
        setData(result)
        console.log(result);
      });
    }
    fetchData();
  }, [location]);

  function handleSubmit(e) {
    if(location !== ""){
      e.preventDefault();
    } else {
      alert("Please enter a location");
    }  
  }

  function handleChange(e) {
    setLoc(e.target.value);
  }

  /* typeof check since fetch data is async func (app renders return before the API is called)*/
  return (
      <div className="container">
        {/* Enter a location */} 
        <aside className="currWeather">
          <form onSubmit={handleSubmit}>
            <label htmlFor="location" className="label__">
              Your City
            </label>
            <input
              type="text"
              id="location"
              className="location"
              autoComplete="on"
              value={location}
              onChange={handleChange}
            />
          </form>
          {/* Handles current weather */} 
          {(typeof data.city != 'undefined') ? (
            <CurrentWeather weatherData={data}/>  
          ):(
            <div></div>
          )}
          
        </aside>
        {/* Handles forecasts for next days */} 
        {(typeof data.city != 'undefined') ? (
          <div className="overview">
            <TempChart weatherData={data}/>
            <Forecast forecastData={data}/>
          </div>
        ):(
          <div></div>
        )}
        
      </div>
  );
}
export default App;