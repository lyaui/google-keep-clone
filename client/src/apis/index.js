import axios from 'axios';
const { token } = JSON.parse(localStorage.getItem('user'));

const axiosUser = axios.create({
  baseURL: `${process.env.REACT_APP_BASE_URL}/api/user`,
  headers: {
    'Content-Type': 'application/json',
    Authorization: token,
  },
});

const axiosLabels = axios.create({
  baseURL: `${process.env.REACT_APP_BASE_URL}/api/labels`,
  headers: {
    'Content-Type': 'application/json',
    Authorization: token,
  },
});

const axiosMemos = axios.create({
  baseURL: `${process.env.REACT_APP_BASE_URL}/api/memos`,
  headers: {
    'Content-Type': 'application/json',
    Authorization: token,
  },
});

export { axiosUser, axiosLabels, axiosMemos };
