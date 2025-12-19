import { useTokenStore } from '@/store';
import type { Book } from '@/types';
import axios from 'axios';

const api = axios.create({
  baseURL: `${import.meta.env.VITE_BACKEND_URL}/api`,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use((config) => {
  const { token } = useTokenStore.getState();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
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

export const getBooks = async () => {
  const { token } = useTokenStore.getState();

  const res = await api.get('/books', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data as Book[];
};

export const createBook = async (data: FormData) => {
  const res = await api.post('/books', data, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return res.data;
};

export const deleteBook = async (bookId: Book['_id']) => {
  const { token } = useTokenStore.getState();
  const res = await api.delete(`/books/${bookId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res.data;
};
