import { useAppSelector } from '@hooks/customReduxHooks';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBIcon, MDBTable, MDBTableBody } from 'mdb-react-ui-kit';

const VisibilityCard = () => {
  const currentWeather = useAppSelector((state) => state.currentWeather.value);

  return (
    <MDBCard className='info-card'>
      <MDBCardTitle>
        <span>
          <MDBIcon className='px-1' icon='binoculars' color='secondary' style={{ rotate: '180deg' }} />
          Visibility
        </span>
      </MDBCardTitle>
      <MDBCardBody>
        <div className='rounded mx-5 p-3 bg-primary'>
          <MDBTable>
            <MDBTableBody>
              <tr>
                <th scope='row' className='text-start'>
                  Visibility
                </th>
                <th className='text-end'>{currentWeather.visibility} Km </th>
              </tr>
              <tr>
                <th scope='row' className='text-start'>
                  Cloud cover
                </th>
                <th className='text-end'>{currentWeather.cloudCover} %</th>
              </tr>
            </MDBTableBody>
          </MDBTable>
        </div>
      </MDBCardBody>
    </MDBCard>
  );
};

export { VisibilityCard };
