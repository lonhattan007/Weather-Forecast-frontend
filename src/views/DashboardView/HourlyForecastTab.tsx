import HourlyForecastChart from '@components/HourlyForecastChart/HourlyForecastChart';
import { MDBCard, MDBCardBody, MDBCol, MDBRow } from 'mdb-react-ui-kit';

const HourlyForecastTab = () => {
  return (
    <MDBRow>
      <MDBCol>
        <MDBCard className='info-card'>
          <MDBCardBody>
            <HourlyForecastChart />
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
  );
};

export { HourlyForecastTab };
