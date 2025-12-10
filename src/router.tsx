import { createBrowserRouter } from 'react-router';
import LoginPage from '@/pages/LoginPage';
import RegisterPage from '@/pages/RegisterPage';
import HomePage from '@/pages/HomePage';
import DashboardLayout from '@/layouts/DashboardLayout';
import BooksPage from '@/pages/BooksPage';

const router = createBrowserRouter([
  {
    path: '/dashboard',
    element: <DashboardLayout />,
    children: [
      {
        path: 'home',
        element: <HomePage />,
      },
      {
        path: 'books',
        element: <BooksPage />,
      },
    ],
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/register',
    element: <RegisterPage />,
  },
]);

export default router;
