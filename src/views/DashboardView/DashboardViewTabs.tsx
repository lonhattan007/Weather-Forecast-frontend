import { useState } from 'react';
import { MDBTabs, MDBTabsItem, MDBTabsLink, MDBTabsContent, MDBTabsPane } from 'mdb-react-ui-kit';
import HourlyForecastChart from '@components/HourlyForecastChart/HourlyForecastChart';

const tabs = [
  {
    name: 'Forecast',
    ref: 'forecast',
    element: <HourlyForecastChart />,
  },
  {
    name: "Today's details",
    ref: 'today-details',
    element: "Today's details",
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
      <MDBTabs pills className='mb-3 justify-content-center'>
        {tabs.map((tab) => (
          <MDBTabsItem className='w-25' key={tab.ref + '-tab-item'}>
            <MDBTabsLink onClick={() => handleFillClick(tab.ref)} active={fillActive === tab.ref}>
              {tab.name}
            </MDBTabsLink>
          </MDBTabsItem>
        ))}
      </MDBTabs>

      {/* <hr className="hr" /> */}

      <MDBTabsContent>
        {tabs.map((tab) => (
          <MDBTabsPane show={fillActive === tab.ref} key={tab.ref + '-tab-pane'}>
            {tab.element}
          </MDBTabsPane>
        ))}
      </MDBTabsContent>
    </>
  );
};

export default DashboardViewTabs;
