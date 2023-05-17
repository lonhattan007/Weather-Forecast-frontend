import { MDBCard, MDBCardBody, MDBCardTitle, MDBIcon } from 'mdb-react-ui-kit';
import Greetings from '@components/Greetings';

import { useWeather } from '@hooks/useWeather';

import { fixLocationName } from '@utils/fixLocationName';

import './DetailedWeatherCard.scss';

const DetailedWeatherCard = (props: any) => {
  const weather = useWeather(props.location);

  return (
    <MDBCard className='current-card'>
      <Greetings className='d-flex d-md-none' />
      <MDBCardTitle className='mt-3'>
        <MDBIcon icon='map-marker-alt' size='xs' />
        {/* TODO: This is just a patch, removed when DB is more concise */}
        <span className=''>{' ' + fixLocationName(props.location)}</span>
      </MDBCardTitle>
      <MDBCardBody>
        {weather.tempC} &deg;C <br />
        {weather.humidity} %
      </MDBCardBody>
    </MDBCard>
  );
};

export default DetailedWeatherCard;
