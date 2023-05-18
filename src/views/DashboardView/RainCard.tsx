import { useAppSelector } from '@hooks/customReduxHooks';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBIcon, MDBTable, MDBTableBody } from 'mdb-react-ui-kit';

const RainCard = () => {
  const currentWeather = useAppSelector((state) => state.currentWeather.value);

  return (
    <MDBCard className='info-card'>
      <MDBCardTitle>
        <span>
          <MDBIcon className='px-1' icon='cloud-showers-heavy' color='primary' /> Rainfall and Mist
        </span>
      </MDBCardTitle>
      <MDBCardBody>
        <div className='rounded mx-5 p-3 bg-primary'>
          <MDBTable>
            <MDBTableBody>
              <tr>
                <th scope='row' className='text-start'>
                  Precipitation
                </th>
                <th className='text-end'>{currentWeather.precipitationMm} mm </th>
              </tr>
              <tr>
                <th scope='row' className='text-start'>
                  Snow fall
                </th>
                <th className='text-end'>{currentWeather.totalSnowCm} cm</th>
              </tr>
              <tr>
                <th scope='row' className='text-start'>
                  Dew point
                </th>
                <th className='text-end'>{currentWeather.dewPointC} &deg;C</th>
              </tr>
            </MDBTableBody>
          </MDBTable>
        </div>
      </MDBCardBody>
    </MDBCard>
  );
};

export { RainCard };
