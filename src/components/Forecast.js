import { convertTemp } from "./helpers";

const Forecast = ({data}) => {
    let namesWeek = ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"];
    let today = new Date();

    return(
        <div className="forecasts">
        {data.list.map((forecast,index) => {
            if(index % 5 === 0 && index < 25 && index !== 0){
                const { main: { temp }, weather } = forecast;
                return (
                    <aside className="forecast" key={index}>
                        <p className="date">{namesWeek[(today.getDay() + (index / 5)) % 7]}</p>
                        <img src={`https://openweathermap.org/img/wn/${weather[0].icon}.png`} alt={weather[0].main}/>
                        <p className="temp">{convertTemp(temp)}</p>
                    </aside>
                );
            } else {
                return null;
            }
        })}
        </div>
    );
}
export default Forecast;

