import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import { MDBCard, MDBCardBody } from 'mdb-react-ui-kit';
import Greetings from '@components/Greetings';
import LocationSearchBar from '@components/LocationSearchBar';

import { useEffect } from 'react';
import { useCurrentCoordinates } from '@hooks/useCurrentCoordinates';

import './DashboardView.scss';
import { useAppSelector } from '@hooks/customReduxHooks';

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
    <MDBContainer id="content-container">
      <MDBRow id="content-row" className="flex-row-reverse">
        <MDBCol className="side-panel d-flex justify-content-center align-items-start" lg="3" md="4">
          <MDBContainer>
            <MDBRow className="justify-content-center my-3">
              <LocationSearchBar id="search-section" />
            </MDBRow>
            <MDBRow className="justify-content-center my-3">
              <MDBCard className="info-card">
                <MDBCardBody>Current Location Info</MDBCardBody>
              </MDBCard>
            </MDBRow>
            <MDBRow className="justify-content-start text-align-left my-3">
              <h6>{localStorage.getItem('recentLocations') !== null ? 'Recently Viewed' : 'Other Locations'}</h6>
            </MDBRow>
            <MDBRow className="justify-content-center my-3">
              <MDBCard className="info-card">
                <MDBCardBody>Other Location Info</MDBCardBody>
              </MDBCard>
            </MDBRow>
            <MDBRow className="justify-content-center my-3">
              <MDBCard className="info-card">
                <MDBCardBody>Other Location Info</MDBCardBody>
              </MDBCard>
            </MDBRow>
            <MDBRow className="justify-content-center my-3">
              <MDBCard className="info-card">
                <MDBCardBody>Other Location Info</MDBCardBody>
              </MDBCard>
            </MDBRow>
          </MDBContainer>
        </MDBCol>
        <MDBCol className="detail-board" lg="9" md="8">
          <Greetings />
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default DashboardView;
