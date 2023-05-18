import { useState, useEffect } from 'react';
import axios from 'axios';

function useWeather(location: string) {
  // TODO: Automatically get current date time
  const startDateTime = '2023-05-18T00:00:00';
  const endDateTime = '2023-05-18T01:00:00';

  const [weather, setWeather] = useState({
    weatherStatus: '',
    tempC: 0,
    feelsLikeC: 0,
    humidity: 0,
    windSpeedKmph: 0,
  });

  useEffect(() => {
    // const time = new Date('2020-02-02T02:00:00');

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
