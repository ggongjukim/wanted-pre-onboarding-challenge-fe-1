import axios from 'axios';

export const URL = `http://localhost:8080`;

export const client = axios.create({
  baseURL: URL,
});

const token = localStorage.getItem('token');

export const accessClient = axios.create({
  baseURL: URL,
  headers: {
    Authorization: `Bearer ${token}`,
  },
});
