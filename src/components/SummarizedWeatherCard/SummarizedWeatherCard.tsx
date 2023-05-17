import { MDBCard, MDBCardBody, MDBCardTitle, MDBIcon, MDBCol, MDBRow, MDBTable, MDBTableBody } from 'mdb-react-ui-kit';

import { useWeather } from '@hooks/useWeather';

import { fixLocationName } from '@utils/fixLocationName';

import './SummarizedWeatherCard.scss';

const SummarizedWeatherCard = (props: any) => {
  const weather = useWeather(props.location);

  return (
    <MDBCard className='other-card'>
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
                  <td>|</td>
                  <td>{`${weather.windSpeedKmph} Km/h`}</td>
                </tr>
                <tr>
                  <th scope='row'>
                    <MDBIcon icon='tint' size='sm' />
                  </th>
                  <td>Hum</td>
                  <td>|</td>
                  <td>{`${weather.humidity} %`}</td>
                </tr>
              </MDBTableBody>
            </MDBTable>
            {/* <span>
              <MDBIcon icon='wind' size='sm' />
              {` Wind | ${weather.windSpeedKmph} Km/h`}
            </span>
            <span>
              <MDBIcon icon='tint' size='sm' />
              {` Hum | ${weather.humidity} %`}
            </span> */}
          </MDBCol>
          <MDBCol className='p-0 d-flex flex-column-reverse align-items-end'>
            <span className='font-weight-bold'>{weather.tempC} &deg;C</span>
          </MDBCol>
        </MDBRow>
      </MDBCardBody>
    </MDBCard>
  );
};

export default SummarizedWeatherCard;
