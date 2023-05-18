import { MDBCard, MDBCardBody, MDBCardTitle, MDBIcon, MDBTable, MDBTableBody, MDBTypography } from 'mdb-react-ui-kit';
import Greetings from '@components/Greetings';

import { useWeather } from '@hooks/useWeather';

import { fixLocationName } from '@utils/fixLocationName';

import './DetailedWeatherCard.scss';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@hooks/customReduxHooks';
import { updateCurrentWeather } from '@stores/currentWeatherSlice';
import { Weather } from '@models/Weather.interface';

const DetailedWeatherCard = () => {
  const dispatch = useAppDispatch();
  const location = useAppSelector((state) => state.currentLocation.value);
  const weather: Weather = useWeather(location);

  useEffect(() => {
    // Update the current weather in the store whenever the weather changes
    dispatch(updateCurrentWeather(weather));
  }, [weather]);

  return (
    <MDBCard className='current-card'>
      <Greetings className='d-flex d-md-none' />
      <MDBCardTitle className='mt-3 fs-4'>
        <MDBIcon icon='map-marker-alt' size='xs' />
        {/* TODO: This is just a patch, removed when DB is more concise */}
        <span className=''>{' ' + fixLocationName(location)}</span>
      </MDBCardTitle>
      <MDBCardBody className='d-flex flex-column justify-content-evenly'>
        <div>
          <MDBTypography tag='div' className='fw-bold display-md-3 display-4'>
            {weather.tempC}&deg;C
          </MDBTypography>
          <MDBTypography tag='div' className='fs-6'>
            Real Feel {weather.feelsLikeC}&deg;C
          </MDBTypography>
          <MDBTypography tag='div' className='fw-bold'>
            {weather.weatherStatus}
          </MDBTypography>
        </div>
        <MDBTable>
          <MDBTableBody>
            <tr>
              <th scope='row' className='text-start'>
                <MDBIcon icon='wind' size='sm' />
              </th>
              <td className='text-start'>Wind speed</td>
              <td className='text-end'>{`${weather.windSpeedKmph} Km/h`}</td>
            </tr>
            <tr>
              <th scope='row' className='text-start'>
                <MDBIcon icon='tint' size='sm' />
              </th>
              <td className='text-start'>Humidity</td>
              <td className='text-end'>{`${weather.humidity} %`}</td>
            </tr>
            <tr>
              <th scope='row' className='text-start'>
                <MDBIcon icon='sort-amount-down' size='sm' />
              </th>
              <td className='text-start'>Air pressure</td>
              <td className='text-end'>{`${weather.pressure} mbar`}</td>
            </tr>
          </MDBTableBody>
        </MDBTable>
      </MDBCardBody>
    </MDBCard>
  );
};

export default DetailedWeatherCard;
