import Logo from 'assets/images/logo-text.png';
import GoogleLoginButton from 'components/LoginPage/GoogleLoginButton';
import Input from 'components/UI/Input';
import LoginButton from 'components/LoginPage/LoginButton';

import {
  SLoginForm,
  SLoginFormLogo,
  SLoginFormSeperator,
} from 'components/LoginPage/LoginForm/style.js';

const LoginForm = () => {
  return (
    <SLoginForm>
      <SLoginFormLogo src={Logo} alt='Google Keep' />
      <p>登入你的帳戶</p>
      <GoogleLoginButton />
      <SLoginFormSeperator>或</SLoginFormSeperator>
      <Input label='電子信箱' type='text' errorMessage={''} />
      <Input label='密碼' type='password' errorMessage={''} />
      <LoginButton />
      <span>
        還不是會員嗎？ 立刻<u>註冊新帳號</u>
      </span>
    </SLoginForm>
  );
};

export default LoginForm;
