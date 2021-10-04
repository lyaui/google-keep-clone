import { axiosUser } from 'apis';

export const apiSignup = (data) => axiosUser.post('/signup', data);
export const apiLogin = (data) => axiosUser.post('/login', data);
export const apiGoogleLogin = () => axiosUser.get('/google');
export const apiLogout = () => axiosUser.get('/logout');
export const apiGetUserSettings = (userId) => axiosUser.get(`/settings/${userId}`);
export const apiUpdateUserSettings = (userId) => axiosUser.get(`/settings/${userId}`);
