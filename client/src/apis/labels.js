import { axiosLabels } from '@/apis';

export const apiGetUserLabels = () => axiosLabels.get('/');
export const apiCreateLabel = (data) => axiosLabels.post('/', data);
export const apiUpdateLabel = (labelId, data) =>
  axiosLabels.patch(`/${labelId}`, data);
export const apiDeleteLabel = (labelId) => axiosLabels.delete(`/${labelId}`);
