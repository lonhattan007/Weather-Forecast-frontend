import { useAppSelector } from '@hooks/customReduxHooks';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBIcon } from 'mdb-react-ui-kit';

const WindCard = () => {
  const currentWeather = useAppSelector((state) => state.currentWeather.value);

  return (
    <MDBCard className='info-card'>
      <MDBCardTitle>Wind</MDBCardTitle>
      <MDBCardBody>
        {currentWeather.windSpeedKmph} Km/h <br />
        {currentWeather.windGustKmph} Km/h <br />
        {currentWeather.windDirDegree ? (
          <>
            {/* The icon is slanted by 45 degrees by default */}
            <MDBIcon icon='location-arrow' style={{ rotate: `${-45 + currentWeather.windDirDegree}deg` }} />
            <span>{currentWeather.windDirDegree}&deg;</span>
          </>
        ) : (
          ''
        )}
      </MDBCardBody>
    </MDBCard>
  );
};

export { WindCard };
