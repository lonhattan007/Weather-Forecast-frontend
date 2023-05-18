import { useAppSelector } from '@hooks/customReduxHooks';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBIcon, MDBTable, MDBTableBody } from 'mdb-react-ui-kit';

const WindCard = () => {
  const currentWeather = useAppSelector((state) => state.currentWeather.value);

  return (
    <MDBCard className='info-card'>
      <MDBCardTitle>
        <span>
          <MDBIcon className='px-1' icon='wind' color='success' /> Wind
        </span>
      </MDBCardTitle>
      <MDBCardBody>
        <div className='rounded mx-5 p-3 bg-primary'>
          <MDBTable>
            <MDBTableBody>
              <tr>
                <th scope='row' className='text-start'>
                  Wind speed{' '}
                </th>
                <th className='text-end'>{currentWeather.windSpeedKmph} Km/h </th>
              </tr>
              <tr>
                <th scope='row' className='text-start'>
                  Wind gust{' '}
                </th>
                <th className='text-end'>{currentWeather.windGustKmph} Km/h</th>
              </tr>
              <tr className='h-25'>
                <th scope='row' className='text-start'>
                  Wind direction
                </th>
                <th className='text-end'>
                  {currentWeather.windDirDegree ? (
                    <>
                      {/* The icon is slanted by 45 degrees by default */}
                      <MDBIcon
                        className='px-1'
                        icon='location-arrow'
                        style={{ rotate: `${-45 + currentWeather.windDirDegree}deg` }}
                      />
                      <span>{currentWeather.windDirDegree}&deg;</span>
                    </>
                  ) : (
                    ''
                  )}
                </th>
              </tr>
            </MDBTableBody>
          </MDBTable>
        </div>
      </MDBCardBody>
    </MDBCard>
  );
};

export { WindCard };
