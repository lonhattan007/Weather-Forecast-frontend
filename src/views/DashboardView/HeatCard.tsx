import { useAppSelector } from '@hooks/customReduxHooks';
import { MDBCard, MDBCardBody, MDBCardTitle } from 'mdb-react-ui-kit';

const HeatCard = () => {
  const currentWeather = useAppSelector((state) => state.currentWeather.value);

  return (
    <MDBCard className='info-card'>
      <MDBCardTitle>Heat</MDBCardTitle>
      <MDBCardBody>
        Maximum temperature {currentWeather.maxTempC} &deg;C <br />
        Minimum temperature {currentWeather.minTempC} &deg;C <br />
        Heat Index {currentWeather.heatIndexC} &deg;C <br />
        Wind Chill{currentWeather.windChillC} &deg;C <br />
      </MDBCardBody>
    </MDBCard>
  );
};

export { HeatCard };
