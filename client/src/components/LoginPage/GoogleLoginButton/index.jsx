import { useEffect, useCallback } from 'react';
import { useAuth, googleLogin } from '@/contexts/auth-context';
import { useUI, getUserSettings } from '@/contexts/UI-context/index.jsx';
import * as Icon from '@/components/UI/Icon';
import { SGoogleLoginButton } from '@/components/LoginPage/GoogleLoginButton/style.jsx';

const GoogleLoginButton = () => {
  const { authDispatch } = useAuth();
  const { UIDispatch } = useUI();
  const url = `${import.meta.env.REACT_APP_SERVER_BASE_URL}/api/user/google`;

  const openLoginWindowHandler = () => {
    window.open(url, null, 'width=500,height=600');
  };

  const loginGoogleHandler = useCallback(
    (e) => {
      if (
        e.origin === import.meta.env.REACT_APP_SERVER_BASE_URL &&
        e.data &&
        e.data.command === 'token-ready' &&
        e.data.info &&
        e.data.info.token
      ) {
        googleLogin(authDispatch, e.data.info);
        getUserSettings(UIDispatch);
      }
    },
    [authDispatch, UIDispatch]
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
