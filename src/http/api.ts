import axios from 'axios';

const api = axios.create({
  baseURL: `${import.meta.env.VITE_BACKEND_URL}/api`,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const login = async (data: { email: string; password: string }) =>
  api.post('/users/login', data);

export const register = async (data: {
  name: string;
  email: string;
  password: string;
}) => api.post('/users/register', data);
