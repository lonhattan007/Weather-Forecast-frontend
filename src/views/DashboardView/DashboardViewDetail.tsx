import { MDBCard, MDBCardBody, MDBCardTitle, MDBCol, MDBContainer, MDBIcon, MDBRow } from 'mdb-react-ui-kit';
import { useAppSelector } from '@hooks/customReduxHooks';

import './DashboardViewDetail.scss';

const DashboardViewDetail = () => {
  const currentWeather = useAppSelector((state) => state.currentWeather.value);

  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol>
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
          <MDBCard className='info-card'>
            <MDBCardTitle>Rainfall</MDBCardTitle>
            <MDBCardBody>
              {currentWeather.precipitationMm} mm <br />
              {currentWeather.totalSnowCm} cm <br />
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol>
          <MDBCard className='info-card'>
            <MDBCardTitle>Daylight</MDBCardTitle>
            <MDBCardBody>
              {currentWeather.sunHour} <br />
              {currentWeather.sunrise} <br />
              {currentWeather.sunset} <br />
              {currentWeather.moonrise} <br />
              {currentWeather.moonset} <br />
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export { DashboardViewDetail };
