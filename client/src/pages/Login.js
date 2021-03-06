import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth } from 'contexts/auth-context';
import { ROUTE } from 'constants/routes.js';
import LoginForm from 'components/LoginPage/LoginForm';
import LoginImage from 'components/LoginPage/LoginImage';
import { SLoginPage } from 'components/LoginPage/style.js';

const Login = () => {
  const history = useHistory();
  const { authState } = useAuth();
  const { isLoggedIn, expiration } = authState;

  // auto login
  useEffect(() => {
    if (!isLoggedIn) return;
    const expireTimestamp = new Date(expiration).getTime();
    const remainingTime = expireTimestamp - new Date().getTime();
    if (remainingTime < 0) return;
    history.push(ROUTE.HOME);
  }, [history, expiration, isLoggedIn]);

  return (
    <SLoginPage>
      <LoginForm />
      <LoginImage />
    </SLoginPage>
  );
};

export default Login;
