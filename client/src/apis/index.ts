import axios from 'axios';

interface AxiosRequest {
  baseUrl: string;
  contentType?: string;
}

function axiosRequest({ baseUrl, contentType, ...others }: AxiosRequest) {
  const instance = axios.create({
    baseURL: `${import.meta.env.REACT_APP_SERVER_BASE_URL}/api${baseUrl}`,
    headers: {
      'Content-Type': contentType || 'application/json',
    },
    ...others,
  });

  instance.interceptors.request.use(
    (config) => {
      const userInfoStr = localStorage.getItem('userInfo');
      const { token } = userInfoStr ? JSON.parse(userInfoStr) : '';
      if (config.headers) {
        config.headers.Authorization = `JWT ${token}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  return instance;
}

export default axiosRequest;
