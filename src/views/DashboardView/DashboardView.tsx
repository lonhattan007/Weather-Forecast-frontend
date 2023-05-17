import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import Greetings from '@components/Greetings';
import LocationSearchBar from '@components/LocationSearchBar';
import DashboardViewTabs from './DashboardViewTabs';
import DetailedWeatherCard from '@components/DetailedWeatherCard/DetailedWeatherCard';
import SummarizedWeatherCard from '@components/SummarizedWeatherCard/SummarizedWeatherCard';

import { useEffect } from 'react';
import { useCurrentCoordinates } from '@hooks/useCurrentCoordinates';
import { useAppSelector } from '@hooks/customReduxHooks';

import './DashboardView.scss';

const DashboardView = () => {
  const currentCoords = useCurrentCoordinates();
  const recentLocations = useAppSelector((state) => state.recentLocations.value);

  useEffect(() => {
    console.log(currentCoords);
  }, [currentCoords]);

  useEffect(() => {
    localStorage.setItem('recentLocations', recentLocations.toString());
    console.log('Recent locations:', recentLocations);
  }, [recentLocations]);

  return (
    <MDBContainer id='content-container'>
      <MDBRow id='content-row' className='flex-row-reverse'>
        <MDBCol className='side-panel p-0 d-flex justify-content-center align-items-start' lg='3' md='4'>
          <MDBContainer>
            <MDBRow className='justify-content-center my-3'>
              <LocationSearchBar id='search-section' />
            </MDBRow>
            <MDBRow className='justify-content-center my-3'>
              {/* TODO: This is not reactive */}
              {recentLocations.slice(0, 1).map((location) => (
                <DetailedWeatherCard location={location} />
              ))}
            </MDBRow>
            <MDBRow className='justify-content-start text-align-left my-3'>
              <h6 className='text'>
                {localStorage.getItem('recentLocations') !== null ? 'Recently Viewed' : 'Other Locations'}
              </h6>
            </MDBRow>
            {recentLocations.slice(1).map((location) => (
              <MDBRow key={location + '-summarized-info'} className='justify-content-center my-3'>
                <SummarizedWeatherCard location={location} />
              </MDBRow>
            ))}
          </MDBContainer>
        </MDBCol>
        <MDBCol className='detail-board p-0' lg='9' md='8'>
          <Greetings className='d-none d-md-flex align-items-start' />
          <MDBRow className='bg-white m-3 p-3 rounded'>
            <DashboardViewTabs />
          </MDBRow>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default DashboardView;
