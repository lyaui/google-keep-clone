export const ROUTE = {
  LOGIN: '/login',
  SIGNUP: '/signup',
  HOME: '/home',
  LABEL: '/label/:labelId',
  BUILD_LABEL_PATH: (labelId = 'all') => `/label/${labelId}`,
};
