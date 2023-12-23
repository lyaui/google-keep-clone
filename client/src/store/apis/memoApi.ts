import { createApi } from '@reduxjs/toolkit/query/react';
import axiosBaseQuery from '@/apis';
import type {
  ResError,
  DraftMemo,
  Memo,
  MemoLink,
  MemoImage,
  Params,
} from '@/types';

const TAG_TYPE = 'MEMO_ID' as const;

const memosApi = createApi({
  reducerPath: '_memos',
  tagTypes: [TAG_TYPE],
  baseQuery: axiosBaseQuery({ baseUrl: '/memos' }),

  // TODO toast & error handling & condition
  endpoints: (builder) => ({
    fetchMemos: builder.query<{ success: true; memos: Memo[] }, Params>({
      query: (params) => ({
        url: '/',
        params,
      }),
      providesTags: (result) => {
        if (result?.success) {
          return result.memos.map((_memo: Memo) => ({
            type: TAG_TYPE,
            id: _memo._id,
          }));
        }
        return [];
      },
    }),
    fetchMemosByLabelName: builder.query<
      { success: true; memos: Memo[] },
      Params
    >({
      query: ({ labelName, params }) => ({
        url: `/label/${labelName}`,
        params,
      }),
      providesTags: (result) => {
        if (result?.success) {
          return result.memos.map((_memo: Memo) => ({
            type: TAG_TYPE,
            id: _memo._id,
          }));
        }
        return [];
      },
    }),
    fetchMemoByMemoId: builder.query<{ success: true; memo: Memo }, string>({
      query: (memoId) => ({
        url: `/${memoId}`,
      }),
      providesTags: (result) => {
        if (result?.success) {
          return [{ type: TAG_TYPE, id: result.memo._id }];
        }
        return [];
      },
    }),
  }),
});

export const {
  useFetchMemosQuery,
  useFetchMemosByLabelNameQuery,
  useFetchMemoByMemoIdQuery,
} = memosApi;

export default memosApi;
