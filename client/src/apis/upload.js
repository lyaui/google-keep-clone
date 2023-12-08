import { axiosUpload } from '@/apis';

export const apiUploadImage = (data) => axiosUpload.post('/image', data);
