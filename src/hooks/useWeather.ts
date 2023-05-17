import { useState, useEffect } from 'react';
import axios from 'axios';

function useWeather(
  location: string,
  // startDateTime: string,
  // endDateTime: string
) {
  // TODO: Automatically get current date time
  const startDateTime = '2023-05-18T00:00:00';
  const endDateTime = '2023-05-18T01:00:00';

  const [weather, setWeather] = useState({
    tempC: 0,
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
        const summaries = JSON.parse(res.request.response);
        setWeather({ ...summaries[0] });
        // console.log(summarizedWeather)
      })
      .catch((err) => {
        console.error(err.message);
      });
  }, []);

  return weather;
}

export { useWeather };
