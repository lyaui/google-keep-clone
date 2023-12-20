import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type {
  ResError,
  DraftMemo,
  Memo,
  MemoLink,
  MemoImage,
  Params,
} from '@/types';

const providesTags = (result, error, params) => {
  if (result?.success) {
    return result.memos.map((_memo) => ({
      type: 'MEMO_ID',
      id: _memo._id,
    }));
  }
  return [];
};

const memosApi = createApi({
  reducerPath: '_memos',
  tagTypes: ['MEMO_ID'],
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.REACT_APP_SERVER_BASE_URL}/api/memos`,
    prepareHeaders: (headers) => {
      const userInfoStr = localStorage.getItem('userInfo');
      const { token } = userInfoStr ? JSON.parse(userInfoStr) : '';

      if (token) {
        headers.set('authorization', `JWT ${token}`);
      }

      return headers;
    },
  }),

  // TODO toast & error handling & condition
  endpoints: (builder) => ({
    fetchMemos: builder.query<{ success: true; memos: Memo[] }, Params>({
      query: (params) => ({
        url: '/',
        params,
      }),
      providesTags,
    }),
    fetchMemosByLabelName: builder.query<
      { success: true; memos: Memo[] },
      Params
    >({
      query: ({ labelName, params }) => ({
        url: `/label/${labelName}`,
        params,
      }),
      providesTags,
    }),
  }),
});

export const { useFetchMemosQuery, useFetchMemosByLabelNameQuery } = memosApi;

export default memosApi;
