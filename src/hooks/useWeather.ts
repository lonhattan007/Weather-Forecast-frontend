import { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment';

function useWeather(location: string) {
  // Round the time interval within an hour
  const startDateTime = moment().startOf('h').format('YYYY-MM-DDTHH:mm:ss');
  const endDateTime = moment().add(1, 'h').startOf('h').format('YYYY-MM-DDTHH:mm:ss');

  const [weather, setWeather] = useState({});

  useEffect(() => {
    const params = {
      locationName: location,
      startDateTime: startDateTime,
      endDateTime: endDateTime,
    };

    axios
      .get('/weathers/location-name', { params: params })
      .then((res) => {
        const weatherReports = JSON.parse(res.request.response);
        setWeather({ ...weatherReports[0] });
      })
      .catch((err) => {
        console.error(err.message);
      });
  }, [location]);

  return weather;
}

export { useWeather };
