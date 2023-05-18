import { lazy } from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';
const DashboardView = lazy(() => import('@views/DashboardView'));
const ErrorView = lazy(() => import('@views/ErrorView'));

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
