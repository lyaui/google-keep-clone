import { AxiosResponse } from 'axios';

import axiosRequest from '@/apis';
import type { ResError, MemoLabel } from '@/types';

const request = axiosRequest({ baseUrl: '/labels' });

export const apiGetUserLabels = (): Promise<
  AxiosResponse<{ success: true; labels: MemoLabel[] } | ResError>
> => request.get('/');

export const apiCreateLabel = (body: {
  name: string;
}): Promise<
  AxiosResponse<{ success: true; label: MemoLabel; message: string } | ResError>
> => request.post('/', body);

export const apiUpdateLabel = (
  labelId: string,
  body: { name: string }
): Promise<
  AxiosResponse<{ success: true; label: MemoLabel; message: string } | ResError>
> => request.patch(`/${labelId}`, body);

export const apiDeleteLabel = (
  labelId: string
): Promise<
  AxiosResponse<{ success: true; label: MemoLabel; message: string } | ResError>
> => request.delete(`/${labelId}`);
