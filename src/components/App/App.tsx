// import { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '@hooks/customReduxHooks';
import { increment } from './counterSlice';

import reactLogo from '@assets/images/react.svg';
import viteLogo from '/vite.svg';

import './App.scss';

// import axios from 'axios';

// const mockParams = {
//   latitude: 10.712279,
//   longitude: 106.645285,
//   startDateTime: '2020-12-01T09:00:00',
//   endDateTime: '2020-12-01T21:00:00',
// };

const App = () => {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  // useEffect(() => {
  //   axios
  //     .get(`/weathers`, {
  //       params: mockParams,
  //     })
  //     .then((res) => console.log(res))
  //     .catch((err) => console.error(err));
  // }, []);

  // useEffect(() => {
  //   console.log(import.meta.env.MODE);
  // }, []);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => dispatch(increment())}>count is {count}</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </>
  );
};

export default App;
