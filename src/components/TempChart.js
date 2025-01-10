import { format, parse } from 'date-fns'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
  } from 'chart.js';
import { Line } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { convertTemp } from "./helpers";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,
    ChartDataLabels
);

function TempChart({weatherData}){
  const temps = weatherData.map(({ main: { temp }}) => convertTemp(temp));
  const times = weatherData.map(({ dt_txt }) => format(parse(dt_txt, "yyyy-MM-dd HH:mm:ss", new Date()), "h:mm a"));

  const data = {
    labels: times,
    datasets: [
      {
        label: '',
        data: temps,
        backgroundColor: 'rgba(255,255,255,0.4)',
        borderColor: 'white',
        fill: true,
      },
    ],
  };

  return(
      <Line 
        id="myChart"
        data={data} 
        options={{
          layout: {
            padding: {
              top: 40,
              bottom: 40,
            },
          },
          scales: {
            x: {
              grid: {
                display: false,
                drawBorder: false,
              },
              ticks: {
                color: "white",
              }
            },
            y: {
              grid: {
                display: false,
                drawBorder: false,
              },
              ticks: {
                display: false,
              }
            }
          },
          plugins: {
            datalabels: {
              align: 'top',
              color: 'white',
              font: {
                weight: 'bold'
              },
              display: true,
            },
            legend: {
              display: false,
            },
        }
        }}
      />
  );
}
export default TempChart;