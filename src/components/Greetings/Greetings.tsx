import { MDBTypography } from 'mdb-react-ui-kit';
import { useEffect, useState } from 'react';

const Greetings = (props: any) => {
  const [currentTime, setCurrentTime] = useState(new Date());

  // Side effect function to keep time updated
  useEffect(() => {
    // Interval range till the next minute, in milliseconds
    const intervalRange = (60 - currentTime.getSeconds()) * 1000;

    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, intervalRange);

    // Clean up function, needed to avoid memory leak
    return () => clearInterval(interval);
  });

  // Generate greetings based on time in a day
  const greeting = (): string => {
    const hour = currentTime.getHours();

    if (hour < 12) return 'Good Morning!';
    else if (hour < 18) return 'Good Afternoon!';
    else if (hour < 22) return 'Good Evening!';
    else return 'Good Night!';
  };

  return (
    <div className={'mt-3 m-3 p-3 flex-column ' + props.className}>
      <MDBTypography tag='div' className='display-3-lg display-4 text-primary fw-bold'>
        {currentTime.toLocaleTimeString('en-US', {
          hour: '2-digit',
          minute: '2-digit',
        })}
      </MDBTypography>
      <p className='m-1 text-dark'>
        {currentTime.toLocaleDateString('en-US', {
          weekday: 'long',
          day: 'numeric',
          month: 'long',
          year: 'numeric',
        })}
      </p>
      <h4 className='text-primary'>{greeting()}</h4>
    </div>
  );
};

export default Greetings;
