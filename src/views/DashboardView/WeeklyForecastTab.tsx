import WeeklyForecastChart from '@components/WeeklyForecastChart';
import { MDBCard, MDBCardBody, MDBCol, MDBRow } from 'mdb-react-ui-kit';

const WeeklyForecastTab = () => {
  return (
    <MDBRow>
      <MDBCol>
        <MDBCard className='info-card'>
          <MDBCardBody>
            <WeeklyForecastChart />
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
  );
};

export { WeeklyForecastTab };
