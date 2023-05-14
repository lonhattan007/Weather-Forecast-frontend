import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import { MDBCard, MDBCardBody } from 'mdb-react-ui-kit';
import Greetings from '@components/Greetings/Greetings';
import LocationSearchBar from '@components/LocationSearchBar/LocationSearchBar';

import { useEffect } from 'react';
import { useCurrentCoordinates } from '@hooks/useCurrentCoordinates';

import './DashboardView.scss';

const DashboardView = () => {
  const currentCoords = useCurrentCoordinates();

  useEffect(() => {
    console.log(currentCoords);
  }, [currentCoords]);

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
              <h6>Other locations</h6>
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
