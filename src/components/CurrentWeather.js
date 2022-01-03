import React from "react";
function CurrentWeather({weatherData}){
    let namesMonth = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
    let namesWeek = ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"];

    /* Set date */
    let today = new Date();
    let day = today.getDay(); // weekday as a number
    let dayOfMonth = today.getDate(); //day of the month
    let month = today.getMonth();
    let mins = today.getMinutes();
    let ampm = ((today.getHours() >= 12) ? " PM" : " AM");
    let time = ((today.getHours() > 12) ? (today.getHours() - 12) + ":" + mins + ampm : (today.getHours() + ":" + mins + ampm));
    let date =  namesWeek[day] + ", " + namesMonth[month] + " " + dayOfMonth + ", " + today.getFullYear();

    let temp = ((weatherData.list[0].main.temp - 273.15) * (9/5) + 32).toFixed(0);
    return(
        <section className="weather">
            <h4 className="date">
                <label htmlFor="date">{time} <br></br>{date}</label>
            </h4>
            <h4 className="temperature">
                <label htmlFor="tempearture">Temperature</label>
                <p>{temp}°</p>
            </h4>
            <h4 className="humidity">
                <label htmlFor="humidity">Humidity</label>
                <p>{weatherData.list[0].main.humidity}</p>
            </h4>
            <h4 className="wind">
                <label htmlFor="wind">Wind Speed</label>
                <p>{weatherData.list[0].wind.speed}</p>
            </h4>
        </section>
    );
}
export default CurrentWeather;