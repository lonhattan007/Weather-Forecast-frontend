import { MDBCard, MDBCardBody, MDBCardTitle, MDBIcon, MDBCol, MDBRow, MDBTable, MDBTableBody } from 'mdb-react-ui-kit';

import { useWeather } from '@hooks/useWeather';
import { useAppDispatch } from '@hooks/customReduxHooks';

import { rearrangeLocation } from '@stores/recentLocationsSlice';
import { updateLocation } from '@stores/currentLocationSlice';

import { fixLocationName } from '@utils/fixLocationName';

import './SummarizedWeatherCard.scss';

const SummarizedWeatherCard = (props: any) => {
  const dispatch = useAppDispatch();
  const weather = useWeather(props.location);

  const handleClick = (e: any) => {
    e.preventDefault();

    dispatch(rearrangeLocation(props.location));
    dispatch(updateLocation(props.location));
  };

  return (
    <MDBCard className='other-card' onClick={handleClick}>
      <MDBCardTitle className='mt-2 d-flex flex-row-reverse'>
        <span>
          <MDBIcon icon='map-marker-alt' size='xs' />
          {/* TODO: This is just a patch, removed when DB is more concise */}
          {' ' + fixLocationName(props.location)}
        </span>
      </MDBCardTitle>
      <MDBCardBody className='p-0 pb-3'>
        <MDBRow className='p-0 m-0'>
          <MDBCol className='p-0 d-flex flex-column-reverse align-items-start'>
            <MDBTable borderless>
              <MDBTableBody>
                <tr>
                  <th scope='row'>
                    <MDBIcon icon='wind' size='sm' />
                  </th>
                  <td>Wind</td>
                  <td className='px-2'>|</td>
                  <td className='text-start'>{`${weather.windSpeedKmph} Km/h`}</td>
                </tr>
                <tr>
                  <th scope='row'>
                    <MDBIcon icon='tint' size='sm' />
                  </th>
                  <td>Hum</td>
                  <td className='px-2'>|</td>
                  <td className='text-start'>{`${weather.humidity} %`}</td>
                </tr>
              </MDBTableBody>
            </MDBTable>
          </MDBCol>
          <MDBCol className='p-0 d-flex flex-column-reverse align-items-end'>
            <span className='fw-bold fs-5'>{weather.tempC}&deg;C</span>
          </MDBCol>
        </MDBRow>
      </MDBCardBody>
    </MDBCard>
  );
};

export default SummarizedWeatherCard;
