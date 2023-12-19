import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type {
  ResError,
  DraftMemo,
  Memo,
  MemoLink,
  MemoImage,
  Params,
} from '@/types';

const memosApi = createApi({
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
    fetchUserMemos: builder.query<
      { pinnedMemo: Memo[]; unpinnedMemo: Memo[] },
      Params
    >({
      // TODO 拆成二個 request
      // providesTags:(result,error,params)=>result.memos.map((_memo)=>({type:'memoId',_memo._id})),
      query: (params) => ({
        url: '/',
        params,
        method: 'GET',
      }),
      transformResponse: (rawResult: { success: true; memos: Memo[] }) => {
        return {
          pinnedMemo: rawResult.memos.filter((_memo) => _memo.isPinned),
          unpinnedMemo: rawResult.memos.filter((_memo) => !_memo.isPinned),
        };
      },
    }),
  }),
});

export const { useFetchUserMemosQuery } = memosApi;

export default memosApi;
