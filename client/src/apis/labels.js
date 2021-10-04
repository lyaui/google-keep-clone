import { axiosLabels } from 'apis';

export const apiGetLabels = () => axiosLabels.get('/');
export const apiCreateLabel = (data) => axiosLabels.post('/', data);
export const apiUpdateLabel = (data) => axiosLabels.patch('/:labelId', data);
export const apiDeleteLabel = (data) => axiosLabels.delete('/:labelId', data);
