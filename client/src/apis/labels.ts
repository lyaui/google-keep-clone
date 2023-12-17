import { AxiosResponse } from 'axios';

import { axiosLabels } from '@/apis';
import type { ResError, MemoLabel } from '@/types';

export const apiGetUserLabels = (): Promise<
  AxiosResponse<{ success: true; labels: MemoLabel[] } | ResError>
> => axiosLabels.get('/');

export const apiCreateLabel = (body: {
  name: string;
}): Promise<
  AxiosResponse<{ success: true; label: MemoLabel; message: string } | ResError>
> => axiosLabels.post('/', body);

export const apiUpdateLabel = (
  labelId: string,
  body: { name: string }
): Promise<
  AxiosResponse<{ success: true; label: MemoLabel; message: string } | ResError>
> => axiosLabels.patch(`/${labelId}`, body);

export const apiDeleteLabel = (
  labelId: string
): Promise<
  AxiosResponse<{ success: true; label: MemoLabel; message: string } | ResError>
> => axiosLabels.delete(`/${labelId}`);
