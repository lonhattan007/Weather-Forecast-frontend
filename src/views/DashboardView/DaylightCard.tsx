import { useAppSelector } from '@hooks/customReduxHooks';
import { MDBCard, MDBCardBody, MDBCardTitle } from 'mdb-react-ui-kit';

const DaylightCard = () => {
  const currentWeather = useAppSelector((state) => state.currentWeather.value);

  return (
    <MDBCard className='info-card'>
      <MDBCardTitle>Daylight</MDBCardTitle>
      <MDBCardBody>
        UV Index {currentWeather.uvIndex} <br />
        Sun hour {currentWeather.sunHour} hr <br />
        Sunrise {currentWeather.sunrise} <br />
        Sunset {currentWeather.sunset} <br />
        Moon Illumination {currentWeather.moonIllumination} %<br />
        Moonrise{currentWeather.moonrise} <br />
        Moonset {currentWeather.moonset} <br />
      </MDBCardBody>
    </MDBCard>
  );
};

export { DaylightCard };
