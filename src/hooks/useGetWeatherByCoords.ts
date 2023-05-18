import { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment';
import { useAppSelector } from './customReduxHooks';

function useGetWeatherByCoords() {
  // Round the time interval within an hour
  const currentCoords = useAppSelector((state) => state.currentCoords.value);
  const startDateTime = moment().startOf('h').format('YYYY-MM-DDTHH:mm:ss');
  const endDateTime = moment().add(1, 'h').startOf('h').format('YYYY-MM-DDTHH:mm:ss');

  const [weather, setWeather] = useState({});

  useEffect(() => {
    const params = {
      latitude: currentCoords?.latitude,
      longitude: currentCoords?.longitude,
      startDateTime: startDateTime,
      endDateTime: endDateTime,
    };

    axios
      .get('/weathers', { params: params })
      .then((res) => {
        const weatherReports = JSON.parse(res.request.response);
        setWeather({ ...weatherReports[0] });
      })
      .catch((err) => {
        console.error(err.message);
      });
  }, [currentCoords]);

  return weather;
}

export { useGetWeatherByCoords };
