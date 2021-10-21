import { axiosMemos } from 'apis';

export const apiGetUserMemos = () => axiosMemos.get('/');
export const apiGetMemosByLabelName = (labelName) => axiosMemos.get(`/label/${labelName}`);
export const apiGetUserMemoByMemoId = (memoId) => axiosMemos.get(`/${memoId}`);
export const apiCreateMemo = (data) => axiosMemos.post('/', data);
export const apiUpdateMemo = (memoId, data) => axiosMemos.patch(`/${memoId}`, data);
export const apiDeleteMemo = (memoId) => axiosMemos.delete(`/${memoId}`);
