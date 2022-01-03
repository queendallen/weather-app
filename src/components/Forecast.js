import React from "react";

function Forecast({forecastData}){
    let namesWeek = ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"];
    let today = new Date();
    let temp = ((forecastData.list[0].main.temp - 273.15) * (9/5) + 32).toFixed(0);

    return(
        forecastData.list.map((forecast,index) => {
            if(index % 5 === 0 && index < 25 && index !== 0){
                return (
                    <section className="forecast" key={index}>
                        <h4 className="date">
                            <label htmlFor="date">{namesWeek[(today.getDay() + (index / 5)) % 7]}</label>
                        </h4>
                        <h4 className="temperature">
                            <label htmlFor="temperature">Temperature</label>
                            <p>{temp}°</p>
                        </h4>
                        <h4 className="humidity">
                            <label htmlFor="humidity">Humidity</label>
                            <p>{forecast.main.humidity}%</p>
                        </h4>
                    </section>
                );
            } else {
                return null;
            }
        })
    );
}
export default Forecast;

