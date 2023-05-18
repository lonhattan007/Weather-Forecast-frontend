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

const HourlyForecastChart = () => {
  const location = useAppSelector((state) => state.currentLocation.value);

  const hourlyForecast = useAppSelector((state) => state.hourlyForecast.value);
  const maxTemp = useAppSelector((state) => state.hourlyForecast.maxTemp);
  const minTemp = useAppSelector((state) => state.hourlyForecast.minTemp);

  const labels = hourlyForecast.map((item) => moment(item.dateTime).format('hh A'));

  const data = {
    labels,
    datasets: [
      {
        label: 'Temperature',
        data: hourlyForecast.map((item) => item.tempC),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        yAxisID: 'temperature',
        tension: 0.3,
      },
      {
        label: 'IsRaining',
        data: hourlyForecast.map((item) => (item.isRaining ? 1 : 0)),
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
        yAxisID: 'isRaining',
        tension: 0,
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
            text: `${location}'s 24 Hours Forecasting`,
          },
        },
        // stacked: false,
        scales: {
          temperature: {
            stacked: false,
            type: 'linear',
            max: maxTemp + 5,
            min: minTemp - 5,
          },
          isRaining: {
            stacked: true,
            type: 'linear',
            max: 2,
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

export default HourlyForecastChart;
