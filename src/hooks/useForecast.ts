import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from './customReduxHooks';

import axios from 'axios';
import { updateHourlyForecast } from '@stores/hourlyForecastSlice';
import { updateWeeklyForecast } from '@stores/weeklyForecastSlice';
import moment from 'moment';

const ForecastTypes = {
  weekly: 'weekly',
  hourly: 'hourly',
};

function useForecast(forecastType: string) {
  const location = useAppSelector((state) => state.currentLocation.value);
  const [forecast, setForecast] = useState([]);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const params = { locationName: location, currentDateTime: moment().format('YYYY-MM-DDTHH:mm:ss') };
    axios
      .get(`/api/weather/forecast/${forecastType}`, { params })
      .then((res) => {
        const weatherReports = JSON.parse(res.request.response);
        setForecast(weatherReports);
      })
      .catch((err) => {
        console.error(err.message);
      });
  }, [location]);

  useEffect(() => {
    if (forecastType === ForecastTypes.hourly) {
      dispatch(updateHourlyForecast(forecast));
    } else {
      dispatch(updateWeeklyForecast(forecast));
    }
  }, [forecast]);

  return forecast;
}

export { ForecastTypes, useForecast };
