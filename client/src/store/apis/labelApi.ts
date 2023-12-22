import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type {
  ResError,
  DraftMemo,
  Memo,
  MemoLink,
  MemoImage,
  MemoLabel,
  Params,
} from '@/types';

const providesTags = (result) => {
  if (result?.success) {
    return result.labels.map((_label: MemoLabel) => ({
      type: 'LABEL_ID',
      id: _label._id,
    }));
  }
  return [];
};

const labelApi = createApi({
  reducerPath: '_labels',
  tagTypes: ['LABEL_ID'],
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.REACT_APP_SERVER_BASE_URL}/api/labels`,
    prepareHeaders: (headers) => {
      const userInfoStr = localStorage.getItem('userInfo');
      const { token } = userInfoStr ? JSON.parse(userInfoStr) : '';

      if (token) {
        headers.set('authorization', `JWT ${token}`);
      }

      return headers;
    },
  }),

  endpoints: (builder) => ({
    fetchLabels: builder.query<{ success: true; labels: MemoLabel[] }, void>({
      query: () => ({
        url: '/',
      }),
      providesTags,
    }),
  }),
});

export const { useFetchLabelsQuery } = labelApi;

export default labelApi;
