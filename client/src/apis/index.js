import axios from 'axios';

const addAuthConfig = (config) => {
  const { token } = JSON.parse(localStorage.getItem('userInfo')) || '';
  config.headers.Authorization = `JWT ${token}`;
  return config;
};

const axiosUser = axios.create({
  baseURL: `${process.env.REACT_APP_BASE_URL}/api/user`,
  headers: {
    'Content-Type': 'application/json',
  },
});
axiosUser.interceptors.request.use(addAuthConfig, (error) => Promise.reject(error));

const axiosLabels = axios.create({
  baseURL: `${process.env.REACT_APP_BASE_URL}/api/labels`,
  headers: {
    'Content-Type': 'application/json',
  },
});
axiosLabels.interceptors.request.use(addAuthConfig, (error) => Promise.reject(error));

const axiosMemos = axios.create({
  baseURL: `${process.env.REACT_APP_BASE_URL}/api/memos`,
  headers: {
    'Content-Type': 'application/json',
  },
});
axiosMemos.interceptors.request.use(addAuthConfig, (error) => Promise.reject(error));

const axiosUpload = axios.create({
  baseURL: `${process.env.REACT_APP_BASE_URL}/api/upload`,
  headers: {
    'Content-Type': 'multipart/form-data',
  },
});
axiosUpload.interceptors.request.use(addAuthConfig, (error) => Promise.reject(error));

export { axiosUser, axiosLabels, axiosMemos, axiosUpload };
