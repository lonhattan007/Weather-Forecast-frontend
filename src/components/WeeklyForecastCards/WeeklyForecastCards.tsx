import { useForecast } from '@hooks/useForecast';
import { WeatherForecast } from '@models/WeatherForecast';
import { MDBRow, MDBCol, MDBCard, MDBCardTitle, MDBCardBody } from 'mdb-react-ui-kit';
import moment from 'moment';

const WeeklyForecastCards = () => {
  const weeklyForecast: WeatherForecast[] = useForecast('weekly');

  return (
    <MDBRow className='px-0 my-3'>
      {weeklyForecast.map((item, index) => (
        <MDBCol key={index}>
          <MDBCard className='info-card'>
            <MDBCardTitle>{moment(item.dateTime).format('DD/MM')}</MDBCardTitle>
            <MDBCardBody>
              {item.maxTempC}&deg;C / {item.minTempC}&deg;C <br />
              {item.chanceOfRain}%
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      ))}
    </MDBRow>
  );
};

export default WeeklyForecastCards;
