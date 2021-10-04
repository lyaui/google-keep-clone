import { axiosMemos } from 'apis';

export const apiGetMemos = () => axiosMemos.get('/');
export const apiGetMemosByLabelIdl = () => axiosMemos.get('/');
export const apiCreateMemo = (data) => axiosMemos.post('/:labelId', data);
export const apiUpdateMemo = (data) => axiosMemos.patch('/:labelId', data);
export const apiDeleteMemo = () => axiosMemos.delete('/:labelId');
