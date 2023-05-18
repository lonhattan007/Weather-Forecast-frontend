import { useAppSelector } from '@hooks/customReduxHooks';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBIcon, MDBTable, MDBTableBody } from 'mdb-react-ui-kit';

const HeatCard = () => {
  const currentWeather = useAppSelector((state) => state.currentWeather.value);

  return (
    <MDBCard className='info-card'>
      <MDBCardTitle className='text-primary'>
        <span>
          <MDBIcon className='px-1' icon='thermometer-half' />
          Heat
        </span>
      </MDBCardTitle>
      <MDBCardBody>
        <div id='heat-card-content' className='table-container rounded mx-5 p-3'>
          <MDBTable>
            <MDBTableBody>
              <tr>
                <th scope='row' className='text-start'>
                  Maximum temperature
                </th>
                <th className='text-end text-primary fw-bold'>{currentWeather.maxTempC} &deg;C </th>
              </tr>
              <tr>
                <th scope='row' className='text-start'>
                  Minimum temperature
                </th>
                <th className='text-end text-primary fw-bold'>{currentWeather.minTempC} &deg;C</th>
              </tr>
              <tr>
                <th scope='row' className='text-start'>
                  Heat index
                </th>
                <th className='text-end text-primary fw-bold'>{currentWeather.heatIndexC} &deg;C</th>
              </tr>
              <tr>
                <th scope='row' className='text-start'>
                  Wind chill
                </th>
                <th className='text-end text-primary fw-bold'>{currentWeather.windChillC} &deg;C</th>
              </tr>
            </MDBTableBody>
          </MDBTable>
        </div>
      </MDBCardBody>
    </MDBCard>
  );
};

export { HeatCard };
