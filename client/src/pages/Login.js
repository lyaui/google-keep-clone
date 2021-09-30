import LoginForm from 'components/LoginPage/LoginForm';
import LoginImage from 'components/LoginPage/LoginImage';
import { SLoginPage } from 'components/LoginPage/style.js';

const Login = () => {
  return (
    <SLoginPage>
      <LoginForm />
      <LoginImage />
    </SLoginPage>
  );
};

export default Login;
