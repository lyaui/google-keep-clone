import axiosRequest from '@/apis';
const request = axiosRequest({
  baseUrl: '/upload',
  contentType: 'multipart/form-data',
});

export const apiUploadImage = (data) => request.post('/image', data);
