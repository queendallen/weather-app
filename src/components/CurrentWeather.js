import { convertTemp } from "./helpers";

const CurrentWeather = ({ data }) => {
    const { main: { temp, feels_like, humidity }, wind: { speed }, weather } = data;
    const weatherData = weather[0];
    return(
        <section className="weather">
            <div className="subsection">
                <p className="header">Today</p>
                <img src={`https://openweathermap.org/img/wn/${weatherData.icon}@2x.png`} alt={weatherData.main}/>
                <p className="header">{convertTemp(temp)}</p>
                <p className="subheader">{weatherData.description}</p>
            </div>
            <div className="subsection">
                <p><span>Feels Like</span>{convertTemp(feels_like)}</p>
                <p><span>Humidity</span>{humidity}%</p>
                <p><span>Wind Speed</span>{speed} mph</p>
            </div>
        </section>
    );
}
export default CurrentWeather;