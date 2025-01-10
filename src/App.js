import "./App.css";
import React, {useState} from "react";
import Forecast from "./components/Forecast";
import CurrentWeather from "./components/CurrentWeather";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import TempChart from "./components/TempChart";

function App() {
  const [location, setLocation] = useState("");
  const [data, setData] = useState([]);
  
  async function handleSubmit(e) {
    e.preventDefault();
    const fetchData = async () => {
      /* fetch data from API
        then convert into JSON format
      */
      await fetch(`${process.env.REACT_APP_API_URL}/forecast?q=${location}&appid=${process.env.REACT_APP_API_KEY}`)
      .then(res => res.json())
      .then(result => {
        setData(result)
      }).catch((_e) => {
      });
    }
    fetchData();
  }

  function handleChange(e) {
    setLocation(e.target.value);
  }

  return (
      <div className="container">
        <aside className="currWeather">
          <form>
            <div className="search-bar">
            <input
              type="text"
              id="location"
              className="location"
              autoComplete="on"
              placeholder="Enter location"
              value={location}
              onChange={handleChange}
            />
            <button onClick={handleSubmit} className="search-button"><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
            </div>
          </form>
          {data?.city && <CurrentWeather data={data.list[0]}/> }
        </aside>

        <div className="overview">
        {!data?.city ? 
          <p className="no-data">No data to display</p> :
          <>
            <Forecast data={data}/>
            <TempChart weatherData={data.list.slice(0, 9)}/>
          </>
        }
        </div>
      </div>
  );
}
export default App;