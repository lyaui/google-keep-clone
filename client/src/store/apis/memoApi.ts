import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type {
  ResError,
  DraftMemo,
  Memo,
  MemoLink,
  MemoImage,
  Params,
} from '@/types';

export const memosApi = createApi({
  reducerPath: '_memos',
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

  endpoints: (builder) => ({
    fetchUserMemos: builder.query<Memo[], Params>({
      query: (params) => ({
        url: '/',
        params,
        method: 'GET',
      }),
    }),
  }),
});

export const { useFetchUserMemosQuery } = memosApi;
