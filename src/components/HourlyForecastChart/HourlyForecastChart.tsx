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

import { data as dataSource } from '@mocks/weatherAPIRes.mock';
import { useEffect } from 'react';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: '24 Hours Forecasting',
    },
  },
};

const labels = dataSource.map((item) => item.dateTime.substring(11, 16));

const data = {
  labels,
  datasets: [
    {
      label: 'Temperature',
      data: dataSource.map((item) => item.tempC),
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
      tension: 0.3,
    },
    {
      label: 'Feels Like Temperature',
      data: dataSource.map((item) => item.feelsLikeC),
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
      tension: 0.3,
    },
  ],
};

const HourlyForecastChart = () => {
  useEffect(() => {
    console.log(dataSource.map((item) => item.dateTime.substring(11, 16)));
  }, []);

  return (
    <>
      <Line options={options} data={data} />
    </>
  );
};

export default HourlyForecastChart;
