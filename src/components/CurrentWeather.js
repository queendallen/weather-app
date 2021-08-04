import React from "react";
function CurrentWeather({weatherData}){
    let namesMonth = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
    let namesWeek = ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"];
    let today = new Date();
    let day = today.getDay() + 1;
    let month = today.getMonth();
    let mins = today.getMinutes()
    let time = ((today.getHours() > 12) ? (today.getHours() - 12) + ":" + mins + " PM" : (today.getHours() + ":" + mins + "AM"));
    let date =  time  + ", " +namesWeek[day] + ", " + namesMonth[month] + " " + day + ", " + today.getFullYear();
    return(
        <section className="weather">
            <h4 className="date">
                <label htmlFor="date">{date}</label>
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