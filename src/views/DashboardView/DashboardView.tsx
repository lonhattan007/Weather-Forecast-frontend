import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import Greetings from '@components/Greetings';
import LocationSearchBar from '@components/LocationSearchBar';
import DetailedWeatherCard from '@components/DetailedWeatherCard/DetailedWeatherCard';
import SummarizedWeatherCard from '@components/SummarizedWeatherCard/SummarizedWeatherCard';
import { DashboardViewTabs } from './DashboardViewTabs';

import { useEffect } from 'react';
import { useCurrentCoordinates } from '@hooks/useCurrentCoordinates';
import { useAppSelector } from '@hooks/customReduxHooks';

import './DashboardView.scss';
import { ForecastTypes, useForecast } from '@hooks/useForecast';

const DashboardView = () => {
  const currentCoords = useCurrentCoordinates();
  const recentLocations = useAppSelector((state) => state.recentLocations.value);

  useEffect(() => {
    console.log(currentCoords);
  }, [currentCoords]);

  useForecast(ForecastTypes.hourly);

  useForecast(ForecastTypes.weekly);

  return (
    <MDBContainer id='content-container'>
      <MDBRow id='content-row' className='flex-row-reverse'>
        <MDBCol className='side-panel p-0 d-flex justify-content-center align-items-start' lg='3' md='4'>
          <MDBContainer>
            <MDBRow className='justify-content-center my-3'>
              <LocationSearchBar id='search-section' />
            </MDBRow>
            <MDBRow className='justify-content-center my-3'>
              <DetailedWeatherCard />
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
          <MDBRow className='m-3 p-3'>
            <DashboardViewTabs />
          </MDBRow>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default DashboardView;
