import { AxiosResponse } from 'axios';

import type { ResError, MemoImage } from '@/types';

import axiosRequest from '@/apis';

const request = axiosRequest({
  baseUrl: '/upload',
  contentType: 'multipart/form-data',
});

export const apiUploadImage = (
  body: string
): Promise<AxiosResponse<{ success: true; image: MemoImage } | ResError>> =>
  request.post('/image', body);
