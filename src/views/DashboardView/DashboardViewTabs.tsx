import { useState } from 'react';
import { MDBTabs, MDBTabsItem, MDBTabsLink, MDBTabsContent, MDBTabsPane } from 'mdb-react-ui-kit';

const tabs = [
  {
    name: 'Forecast',
    ref: 'forecast',
  },
  {
    name: "Today's details",
    ref: 'today-details',
  },
];

const DashboardViewTabs = () => {
  const [fillActive, setFillActive] = useState(tabs[0].ref);

  const handleFillClick = (value: string) => {
    if (value === fillActive) {
      return;
    }

    setFillActive(value);
  };

  return (
    <>
      <MDBTabs fill className="mb-3">
        {tabs.map((tab) => (
          <MDBTabsItem key={tab.ref + '-tab-item'}>
            <MDBTabsLink onClick={() => handleFillClick(tab.ref)} active={fillActive === tab.ref}>
              {tab.name}
            </MDBTabsLink>
          </MDBTabsItem>
        ))}
      </MDBTabs>

      <MDBTabsContent>
        {tabs.map((tab) => (
          <MDBTabsPane show={fillActive === tab.ref} key={tab.ref + '-tab-pane'}>
            {tab.name}
          </MDBTabsPane>
        ))}
      </MDBTabsContent>
    </>
  );
};

export default DashboardViewTabs;
