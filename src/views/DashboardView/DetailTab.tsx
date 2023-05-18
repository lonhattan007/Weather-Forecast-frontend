import { MDBContainer, MDBCol, MDBRow } from 'mdb-react-ui-kit';
import { WindCard } from './WindCard';
import { RainCard } from './RainCard';
import { VisibilityCard } from './VisibilityCard';
import { DaylightCard } from './DaylightCard';
import { HeatCard } from './HeatCard';

const DetailTab = () => {
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol>
          <WindCard />
          <RainCard />
          <VisibilityCard />
        </MDBCol>
        <MDBCol>
          <HeatCard />
          <DaylightCard />
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export { DetailTab };
