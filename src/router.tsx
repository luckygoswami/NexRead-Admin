import { createBrowserRouter } from 'react-router';
import LoginPage from '@/pages/LoginPage';
import RegisterPage from '@/pages/RegisterPage';
import HomePage from '@/pages/HomePage';
import DashboardLayout from '@/layouts/DashboardLayout';
import BooksPage from '@/pages/BooksPage';
import AuthLayout from '@/layouts/AuthLayout';
import AddBook from '@/pages/AddBook';

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
      {
        path: 'books/add',
        element: <AddBook />,
      },
    ],
  },
  {
    path: '/auth',
    element: <AuthLayout />,
    children: [
      {
        path: 'login',
        element: <LoginPage />,
      },
      {
        path: 'register',
        element: <RegisterPage />,
      },
    ],
  },
]);

export default router;
