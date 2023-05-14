import { MDBContainer, MDBRow, MDBCol, MDBInputGroup, MDBInput } from 'mdb-react-ui-kit';
import { MDBCard, MDBCardBody } from 'mdb-react-ui-kit';
import './DashboardView.scss';
import { useCurrentCoordinates } from '@hooks/useCurrentCoordinates';
import Greetings from '@components/Greetings/Greetings';
import { useEffect } from 'react';

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
              <MDBInputGroup id="search-section">
                <MDBInput label="Search" />
                {/* <MDBBtn rippleColor="dark">
                  <MDBIcon icon="search" />
                </MDBBtn> */}
              </MDBInputGroup>
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
