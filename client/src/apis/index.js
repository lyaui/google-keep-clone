import axios from 'axios';
const { token } = JSON.parse(localStorage.getItem('userInfo')) || '';

const axiosUser = axios.create({
  baseURL: `${process.env.REACT_APP_BASE_URL}/api/user`,
  headers: {
    'Content-Type': 'application/json',
    Authorization: 'JWT ' + token,
  },
});

const axiosLabels = axios.create({
  baseURL: `${process.env.REACT_APP_BASE_URL}/api/labels`,
  headers: {
    'Content-Type': 'application/json',
    Authorization: 'JWT ' + token,
  },
});

const axiosMemos = axios.create({
  baseURL: `${process.env.REACT_APP_BASE_URL}/api/memos`,
  headers: {
    'Content-Type': 'application/json',
    Authorization: 'JWT ' + token,
  },
});

const axiosUpload = axios.create({
  baseURL: `${process.env.REACT_APP_BASE_URL}/api/upload`,
  headers: {
    'Content-Type': 'multipart/form-data',
  },
});

export { axiosUser, axiosLabels, axiosMemos, axiosUpload };
