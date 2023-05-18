import HourlyForecastChart from '@components/HourlyForecastChart/HourlyForecastChart';
import WeeklyForecastCards from '@components/WeeklyForecastCards/WeeklyForecastCards';
import { MDBCard, MDBCardBody, MDBCol, MDBRow } from 'mdb-react-ui-kit';

const DashboardViewForecastTab = () => {
  return (
    <>
      <WeeklyForecastCards />
      <MDBRow>
        <MDBCol>
          <MDBCard className='info-card'>
            <MDBCardBody>
              <HourlyForecastChart />
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </>
  );
};

export { DashboardViewForecastTab };
