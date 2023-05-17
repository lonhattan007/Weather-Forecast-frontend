import { createBrowserRouter, Navigate } from 'react-router-dom';
import DashboardView from '@views/DashboardView';
import ErrorView from '@views/ErrorView';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to='/dashboard' />,
    errorElement: <ErrorView />,
  },
  {
    path: '/dashboard',
    element: <DashboardView />,
    errorElement: <ErrorView />,
  },
]);

export default router;
