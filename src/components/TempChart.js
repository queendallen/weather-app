import React from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
import {Line} from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

function TempChart({weatherData}){
  let namesWeek = ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"];
  let today = new Date();
  let day = today.getDay(); // weekday as a number

  var i, j = 1;
  let arr = [((weatherData.list[0].main.temp - 273.15) * (9/5) + 32).toFixed(0)];
  for(i = 5; i < 25; i += 5){
    arr[j] = ((weatherData.list[i].main.temp - 273.15) * (9/5) + 32).toFixed(0);
    j ++;
  }

  const data = {
      labels: [namesWeek[day], namesWeek[(day + 1) % 7], namesWeek[(day + 2) % 7], namesWeek[(day + 3) % 7]],
      datasets: [
        {
          label: 'Temperature',
          data: arr,
          fill: false,
          backgroundColor: 'rgb(217, 138, 121)',
          borderColor: 'rgba(217, 138, 121, 0.4)',
          tension: 0.3,
        },
      ],
    };

  return(
      <Line id="myChart" data={data}/>
  );
}
export default TempChart;