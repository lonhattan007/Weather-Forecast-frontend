import { useAppSelector } from '@hooks/customReduxHooks';
import { MDBCard, MDBCardBody, MDBCardTitle } from 'mdb-react-ui-kit';

const RainCard = () => {
  const currentWeather = useAppSelector((state) => state.currentWeather.value);

  return (
    <MDBCard className='info-card'>
      <MDBCardTitle>Rainfall and Mist</MDBCardTitle>
      <MDBCardBody>
        Precipitation {currentWeather.precipitationMm} mm <br />
        Total snow {currentWeather.totalSnowCm} cm <br />
        Dew point {currentWeather.dewPointC} &deg;C <br />
      </MDBCardBody>
    </MDBCard>
  );
};

export { RainCard };
