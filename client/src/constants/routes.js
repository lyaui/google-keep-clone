export const ROUTE = {
  LOGIN: '/login',
  SIGNUP: '/signup',
  HOME: '/home',
  LABEL: '/label/:labelId',
  MEMO: '/memo/:memoId',
  BUILD_LABEL_PATH: (labelId) => `/label/${labelId}`,
  BUILD_MEMO_PATH: (memoId) => `/memo/${memoId}`,
};
