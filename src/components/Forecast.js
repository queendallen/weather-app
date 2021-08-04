import React from "react";

function Forecast({forecastData}){
    let namesMonth = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
    let dates = [];
    for(let i = 0; i < 20; i+=5){
        let date = new Date();
        date.setDate(date.getDate() + i/5);
        dates.push(date);
    }
    return(
        forecastData.list.map((forecast,index) => {
            if(index % 5 === 0 && index < 20){
                return (
                    <section className="forecast" key={index}>
                        <h4 className="date">
                            <label htmlFor="date">{namesMonth[dates[index/5].getMonth()]}, {dates[index/5].getDay() + 1}</label>
                        </h4>
                        <h4 className="humidity">
                            <label htmlFor="humidity">Humidity</label>
                            <p>{forecast.main.humidity}%</p>
                        </h4>
                    </section>
                );
            }
        })
    );
}
export default Forecast;

