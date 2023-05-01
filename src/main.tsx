import React from 'react';
import ReactDOM from 'react-dom/client';

import '@styles/styles.scss';
// import * as bootstrap from 'bootstrap';
import 'mdb-react-ui-kit/dist/css/mdb.dark.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

import { Provider } from 'react-redux';
import store from '@stores/store';

import { RouterProvider } from 'react-router-dom';
import router from '@routes/router';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
);
