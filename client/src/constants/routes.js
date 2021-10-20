export const ROUTE = {
  LOGIN: '/login',
  SIGNUP: '/signup',
  HOME: '/home',
  LABEL: '/label/:labelName',
  MEMO: '/memo/:memoId',
  BUILD_LABEL_PATH: (labelName) => `/label/${labelName}`,
  BUILD_MEMO_PATH: (memoId) => `/memo/${memoId}`,
};
