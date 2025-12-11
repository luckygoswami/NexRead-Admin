import axios from 'axios';

const api = axios.create({
  baseURL: `${import.meta.env.VITE_BACKEND_URL}/api`,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const login = async (data: { email: string; password: string }) => {
  const res = await api.post('/users/login', data);
  return res.data;
};

export const register = async (data: {
  name: string;
  email: string;
  password: string;
}) => {
  const res = await api.post('/users/register', data);
  return res.data;
};
