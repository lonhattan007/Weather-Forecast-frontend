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
import { Line } from 'react-chartjs-2';

import { useAppSelector } from '@hooks/customReduxHooks';
import moment from 'moment';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const WeeklyForecastChart = () => {
  const location = useAppSelector((state) => state.currentLocation.value);

  const weeklyForecast = useAppSelector((state) => state.weeklyForecast.value);

  const labels = weeklyForecast.map((item, index) => moment(item.dateTime).add(index, 'd').format('DD/MM'));

  const data = {
    labels,
    datasets: [
      {
        label: 'Maximum temperature',
        data: weeklyForecast.map((item) => item.maxTempC),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        yAxisID: 'temperature',
        tension: 0.3,
      },
      {
        label: 'Minimum temperature',
        data: weeklyForecast.map((item) => item.minTempC),
        borderColor: 'rgb(255, 196, 137)',
        backgroundColor: 'rgba(255, 196, 137, 0.5)',
        yAxisID: 'temperature',
        tension: 0.3,
      },
      {
        label: 'Chance of Rain',
        data: weeklyForecast.map((item) => item.chanceOfRain),
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
        yAxisID: 'chanceOfRain',
        tension: 0.3,
      },
    ],
  };

  return (
    <Line
      options={{
        responsive: true,
        interaction: {
          mode: 'index',
          intersect: false,
        },
        plugins: {
          title: {
            display: true,
            text: `${location}'s 7 Days Forecasting`,
          },
        },
        // stacked: false,
        scales: {
          temperature: {
            stacked: false,
            type: 'linear',
            max: 45,
            min: 0,
          },
          chanceOfRain: {
            stacked: true,
            type: 'linear',
            max: 100,
            min: 0,
            grid: {
              drawOnChartArea: false,
            },
          },
        },
      }}
      data={data}
    />
  );
};

export default WeeklyForecastChart;
