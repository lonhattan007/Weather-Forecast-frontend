import { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from './customReduxHooks';
import { setCurrentCoords } from '@stores/currentCoordsSlice';

// The maximum age in milliseconds of a possible cached position that is acceptable to return
// Currently set to 1 hour
const MAX_AGE = 1000 * 60 * 60;

// Currently set to 10 seconds
const GET_COORDS_TIME_OUT = 10000;

function useCurrentCoordinates() {
  const currentCoords = useAppSelector((state) => state.currentCoords.value);
  const dispatch = useAppDispatch();

  useEffect(() => {
    // If a position is found, save its coordinates to local storage
    const success = (position: any) => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      const payload = {
        value: { latitude, longitude },
      };

      console.log('Geolocation detected');
      localStorage.setItem('currentCoordinates', `${latitude},${longitude}`);
      dispatch(setCurrentCoords(payload));
    };

    const error = (err: any) => {
      console.error(err);
    };

    const options = {
      maximumAge: MAX_AGE,
      timeout: GET_COORDS_TIME_OUT,
    };

    if (!navigator.geolocation) {
      console.error('Geolocation not supported!');
    }

    navigator.geolocation.getCurrentPosition(success, error, options);
  }, []);

  return currentCoords;
}

export { useCurrentCoordinates };
