import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAuth } from '@/contexts/auth-context';
import { ROUTER_PATH } from '@/routes';
import LoginForm from '@/components/LoginPage/LoginForm';
import LoginImage from '@/components/LoginPage/LoginImage';
import { SLoginPage } from '@/components/LoginPage/style';

function Login() {
  const navigate = useNavigate();
  const { authState } = useAuth();
  const { isLoggedIn, expiration } = authState;

  // auto login
  useEffect(() => {
    if (!isLoggedIn) return;
    const expireTimestamp = new Date(expiration).getTime();
    const remainingTime = expireTimestamp - new Date().getTime();
    if (remainingTime < 0) return;
    navigate(ROUTER_PATH.HOME);
  }, [expiration, isLoggedIn, navigate]);

  return (
    <SLoginPage>
      <LoginForm />
      <LoginImage />
    </SLoginPage>
  );
}

export default Login;
