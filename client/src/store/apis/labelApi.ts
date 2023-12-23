import { createApi } from '@reduxjs/toolkit/query/react';
import axiosBaseQuery from '@/apis';
import type { MemoLabel } from '@/types';

const TAG_TYPE = 'LABEL_ID' as const;

const labelApi = createApi({
  reducerPath: '_labels',
  tagTypes: [TAG_TYPE],
  baseQuery: axiosBaseQuery({ baseUrl: '/labels' }),
  endpoints: (builder) => ({
    fetchLabels: builder.query<{ success: true; labels: MemoLabel[] }, void>({
      query: () => ({
        url: '/',
      }),
      providesTags: (result) => {
        if (result?.success) {
          return [
            { type: TAG_TYPE },
            ...result.labels.map((_label: MemoLabel) => ({
              type: TAG_TYPE,
              id: _label._id,
            })),
          ];
        }
        return [];
      },
    }),
    createLabel: builder.mutation<
      { success: true; label: MemoLabel; message: string },
      { name: string }
    >({
      query: (body) => ({
        url: `/`,
        body,
        method: 'POST',
      }),
      invalidatesTags: () => [{ type: TAG_TYPE }],
    }),
    patchLabelName: builder.mutation<
      { success: true; label: MemoLabel; message: string },
      { labelId: string; body: { name: string } }
    >({
      query: ({ labelId, body }) => ({
        url: `/${labelId}`,
        data: body,
        method: 'PATCH',
      }),
      invalidatesTags: (result, error, arg) => [
        { type: TAG_TYPE, id: arg.labelId },
      ],
    }),
    deleteLabel: builder.mutation<
      { success: true; label: MemoLabel; message: string },
      string
    >({
      query: (labelId) => ({
        url: `/${labelId}`,
        method: 'DELETE',
      }),
      invalidatesTags: (result, error, arg) => [{ type: TAG_TYPE, id: arg }],
    }),
  }),
});

export const {
  useFetchLabelsQuery,
  useCreateLabelMutation,
  usePatchLabelNameMutation,
  useDeleteLabelMutation,
} = labelApi;

export default labelApi;
