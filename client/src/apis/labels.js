import { axiosLabels } from 'apis';

export const apiGetLabels = (userId) => axiosLabels.get(`/user/${userId}`);
export const apiCreateLabel = (data) => axiosLabels.post('/', data);
export const apiUpdateLabel = (labelId, data) => axiosLabels.patch(`/${labelId}`, data);
export const apiDeleteLabel = () => axiosLabels.delete('/:labelId');
