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

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const CHART_OPTIONS = {
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
  scales: {
    y: {
      min: 10,
      max: 35,
    },
  },
};

const HourlyForecastChart = () => {
  const hourlyForecast = useAppSelector((state) => state.hourlyForecast.value);

  const temps = hourlyForecast.map((item) => item.tempC);
  const labels = hourlyForecast.map((item) => item.dateTime?.toString().substring(11, 16));

  const data = {
    labels,
    datasets: [
      {
        label: 'Temperature',
        data: temps,
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        tension: 0.3,
      },
    ],
  };

  return <Line options={CHART_OPTIONS} data={data} />;
};

export default HourlyForecastChart;
