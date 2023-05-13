import { MDBContainer, MDBRow, MDBCol, MDBInputGroup, MDBInput, MDBBtn, MDBIcon } from 'mdb-react-ui-kit';
import { MDBCard, MDBCardBody } from 'mdb-react-ui-kit';
import './DashboardView.scss';
import { useCurrentCoordinates } from '@hooks/useCurrentCoordinates';

const DashboardView = () => {
  const currentCoords = useCurrentCoordinates();
  const hour = new Date().getHours();

  const greeting = () => {
    if (hour < 12) return 'Good Morning!';
    else if (hour < 18) return 'Good Afternoon!';
    else if (hour < 22) return 'Good Evening!';
    else return 'Good Night!';
  };

  return (
    <MDBContainer id="content-container">
      <MDBRow id="content-row" className="flex-row-reverse">
        <MDBCol className="side-panel d-flex justify-content-center align-items-start" lg="3" md="4">
          <MDBContainer>
            <MDBRow className="justify-content-center">
              <MDBInputGroup id="search-section">
                <MDBInput label="Search" />
                {/* <MDBBtn rippleColor="dark">
                  <MDBIcon icon="search" />
                </MDBBtn> */}
              </MDBInputGroup>
            </MDBRow>
            <MDBRow className="justify-content-center">
              <MDBCard className="info-card">
                <MDBCardBody>Current Location Info</MDBCardBody>
              </MDBCard>
            </MDBRow>
            <MDBRow className="justify-content-center">
              <MDBCard className="info-card">
                <MDBCardBody>Other Location Info</MDBCardBody>
              </MDBCard>
            </MDBRow>
            <MDBRow className="justify-content-center">
              <MDBCard className="info-card">
                <MDBCardBody>Other Location Info</MDBCardBody>
              </MDBCard>
            </MDBRow>
            <MDBRow className="justify-content-center">
              <MDBCard className="info-card">
                <MDBCardBody>Other Location Info</MDBCardBody>
              </MDBCard>
            </MDBRow>
          </MDBContainer>
        </MDBCol>
        <MDBCol className="detail-board" lg="9" md="8">
          <h1 className="m-3">{greeting()}</h1>
          <h2>{currentCoords?.latitude}</h2>
          <h2>{currentCoords?.longitude}</h2>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default DashboardView;
