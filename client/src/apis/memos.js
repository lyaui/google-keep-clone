import { axiosMemos } from 'apis';

export const apiGetMemos = (userId) => axiosMemos.get(`/user/${userId}`);
export const apiGetMemosByLabelId = (labelId) => axiosMemos.get(`/label/${labelId}`);
export const apiCreateMemo = (data) => axiosMemos.post('/', data);
export const apiUpdateMemo = (memoId, data) => axiosMemos.patch(`/${memoId}`, data);
export const apiDeleteMemo = (memoId) => axiosMemos.delete(`/${memoId}`);
