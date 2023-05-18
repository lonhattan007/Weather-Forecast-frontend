import { useAppSelector } from '@hooks/customReduxHooks';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBIcon, MDBTable, MDBTableBody } from 'mdb-react-ui-kit';

const RainCard = () => {
  const currentWeather = useAppSelector((state) => state.currentWeather.value);

  return (
    <MDBCard className='info-card'>
      <MDBCardTitle className='text-primary'>
        <span>
          <MDBIcon className='px-1' icon='cloud-showers-heavy' /> Rainfall and Mist
        </span>
      </MDBCardTitle>
      <MDBCardBody>
        <div id='rain-card-content' className='table-container rounded mx-5 p-3'>
          <MDBTable>
            <MDBTableBody>
              <tr>
                <th scope='row' className='text-start'>
                  Precipitation
                </th>
                <th className='text-end text-primary fw-bold'>{currentWeather.precipitationMm} mm </th>
              </tr>
              <tr>
                <th scope='row' className='text-start'>
                  Snow fall
                </th>
                <th className='text-end text-primary fw-bold'>{currentWeather.totalSnowCm} cm</th>
              </tr>
              <tr>
                <th scope='row' className='text-start'>
                  Dew point
                </th>
                <th className='text-end text-primary fw-bold'>{currentWeather.dewPointC} &deg;C</th>
              </tr>
            </MDBTableBody>
          </MDBTable>
        </div>
      </MDBCardBody>
    </MDBCard>
  );
};

export { RainCard };
