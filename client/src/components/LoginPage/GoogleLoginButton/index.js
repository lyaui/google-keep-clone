import { useEffect, useCallback } from 'react';
import { useAuth, googleLogin } from 'contexts/auth-context';
import * as Icon from 'components/UI/Icon/index.js';
import { SGoogleLoginButton } from 'components/LoginPage/GoogleLoginButton/style.js';

const GoogleLoginButton = () => {
  const { authDispatch } = useAuth();
  const url = `${process.env.REACT_APP_SERVER_BASE_URL}/api/user/google`;

  const openLoginWindowHandler = () => {
    window.open(url, null, 'width=500,height=600');
  };

  const loginGoogleHandler = useCallback(
    (e) => {
      if (
        e.origin === process.env.REACT_APP_SERVER_BASE_URL &&
        e.data &&
        e.data.command === 'token-ready' &&
        e.data.info &&
        e.data.info.token
      ) {
        googleLogin(authDispatch, e.data.info);
      }
    },
    [authDispatch],
  );

  useEffect(() => {
    window.addEventListener('message', loginGoogleHandler, false);
    return () => window.removeEventListener('message', loginGoogleHandler);
  }, [loginGoogleHandler]);

  return (
    <SGoogleLoginButton onClick={openLoginWindowHandler}>
      <Icon.Google />
      <span>使用 Google 註冊/登入</span>
    </SGoogleLoginButton>
  );
};

export default GoogleLoginButton;
