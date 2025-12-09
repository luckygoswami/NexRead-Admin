import { createBrowserRouter } from 'react-router';
import LoginPage from '@/pages/LoginPage';

const router = createBrowserRouter([
  {
    path: '/login',
    element: <LoginPage />,
  },
]);

export default router;
