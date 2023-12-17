import axiosRequest from '@/apis';
const request = axiosRequest({ baseUrl: '/user' });

export const apiSignup = (data) => request.post('/signup', data);
export const apiLogin = (data) => request.post('/login', data);
export const apiGoogleLogin = () => request.get('/google');
export const apiLogout = () => request.get('/logout');
export const apiGetUserSettings = () => request.get('/settings');
export const apiUpdateUserSettings = (data) => request.patch('/settings', data);
