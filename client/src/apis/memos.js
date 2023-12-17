import axiosRequest from '@/apis';
const request = axiosRequest({ baseUrl: '/memos' });

export const apiGetUserMemos = (query, { cancelToken }) =>
  request.get('/', { params: query, cancelToken });

export const apiGetMemosByLabelName = ({ labelName, query }, { cancelToken }) =>
  request.get(`/label/${labelName}`, { params: query, cancelToken });

export const apiGetUserMemoByMemoId = (memoId, { cancelToken }) =>
  request.get(`/${memoId}`, { cancelToken });

export const apiCreateMemo = (data) => request.post('/', data);
export const apiUpdateMemo = (memoId, data) =>
  request.patch(`/${memoId}`, data);
export const apiDeleteMemo = (memoId) => request.delete(`/${memoId}`);
export const apiGetLinksInfo = (data) => request.post('/linksInfo', data);
