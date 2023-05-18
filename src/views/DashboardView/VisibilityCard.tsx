import { useAppSelector } from '@hooks/customReduxHooks';
import { MDBCard, MDBCardBody, MDBCardTitle } from 'mdb-react-ui-kit';

const VisibilityCard = () => {
  const currentWeather = useAppSelector((state) => state.currentWeather.value);

  return (
    <MDBCard className='info-card'>
      <MDBCardTitle>Visibility</MDBCardTitle>
      <MDBCardBody>
        Visibility {currentWeather.visibility} Km <br />
        Cloud cover {currentWeather.cloudCover} % <br />
      </MDBCardBody>
    </MDBCard>
  );
};

export { VisibilityCard };
