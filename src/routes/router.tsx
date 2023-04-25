import { createBrowserRouter } from 'react-router-dom';
import AppView from '@views/AppView';

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppView />,
  },
]);

export default router;
