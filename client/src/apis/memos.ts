import { AxiosResponse } from 'axios';

import type { ResError, Memo, DraftMemo, MemoLink } from '@/types';
import axiosRequest from '@/apis';
const request = axiosRequest({ baseUrl: '/memos' });

export const apiGetUserMemos = (
  query: Record<string, string>,
  { signal }: { signal: AbortSignal }
): Promise<AxiosResponse<{ success: true; memos: Memo[] } | ResError>> =>
  request.get('/', { params: query, signal });

export const apiGetMemosByLabelName = (
  { labelName, query }: { labelName: string; query: Record<string, string> },
  { signal }: { signal: AbortSignal }
): Promise<AxiosResponse<{ success: true; memos: Memo[] } | ResError>> =>
  request.get(`/label/${labelName}`, { params: query, signal });

export const apiGetUserMemoByMemoId = (
  memoId: string,
  { signal }: { signal: AbortSignal }
): Promise<AxiosResponse<{ success: true; memo: Memo } | ResError>> =>
  request.get(`/${memoId}`, { signal });

export const apiCreateMemo = (
  body: DraftMemo
): Promise<
  AxiosResponse<{ success: true; memo: Memo; message: string } | ResError>
> => request.post('/', body);

export const apiUpdateMemo = (
  memoId: string,
  body: Memo
): Promise<
  AxiosResponse<{ success: true; memo: Memo; message: string } | ResError>
> => request.patch(`/${memoId}`, body);

export const apiDeleteMemo = (
  memoId: string
): Promise<AxiosResponse<{ success: true; message: string } | ResError>> =>
  request.delete(`/${memoId}`);

export const apiGetLinksInfo = (
  body: string[]
): Promise<AxiosResponse<{ success: true; links: MemoLink[] } | ResError>> =>
  request.post('/linksInfo', body);
