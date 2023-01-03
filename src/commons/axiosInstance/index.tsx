import axios from 'axios';

export const URL = `http://localhost:8080`;

export const client = axios.create({
  baseURL: URL,
});

export const accessClient = (token: string) =>
  axios.create({
    baseURL: URL,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
