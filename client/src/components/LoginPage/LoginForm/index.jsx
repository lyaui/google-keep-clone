import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { ROUTER_PATH } from '@/routes';
import { VALIDATOR_TYPES } from '@/utils/validator';
import Logo from '@/assets/images/logo-text.png';
import GoogleLoginButton from '@/components/LoginPage/GoogleLoginButton';
import Input from '@/components/UI/Input';
import LoginButton from '@/components/LoginPage/LoginButton';
import {
  SLoginForm,
  SLoginFormLogo,
  SLoginFormSeparator,
  SFormHint,
} from '@/components/LoginPage/LoginForm/style.jsx';

const INIT_SIGNUP_INPUTS = {
  name: { value: '', isValid: false },
  email: { value: '', isValid: false },
  password: { value: '', isValid: false },
};

const INIT_LOGIN_INPUTS = {
  email: { value: '', isValid: false },
  password: { value: '', isValid: false },
};

function LoginForm() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [formInputs, setFormInputs] = useState(null);
  const [isFormValid, setIsFormValid] = useState(false);
  const formText = pathname === ROUTER_PATH.LOGIN ? '登入' : '註冊';

  // set initInputs while pathname changes
  useEffect(() => {
    const initInputs =
      pathname === ROUTER_PATH.LOGIN ? INIT_LOGIN_INPUTS : INIT_SIGNUP_INPUTS;
    setFormInputs(initInputs);
  }, [pathname]);

  // update input isValid value
  const validFormHandler = ({ name, value, isValid }) => {
    const updatedFormInputs = {
      ...formInputs,
      [name]: { value, isValid: isValid },
    };
    setFormInputs(updatedFormInputs);
  };

  // check if all inputs are valid
  useEffect(() => {
    if (!formInputs) return;
    const isFormValid = Object.values(formInputs).every(
      (item) => item.isValid === true
    );
    setIsFormValid(isFormValid);
  }, [formInputs]);

  const goLoginPage = () => navigate(ROUTER_PATH.LOGIN);
  const goSignupPage = () => navigate(ROUTER_PATH.SIGNUP);

  return (
    <SLoginForm onSubmit={() => {}}>
      <SLoginFormLogo src={Logo} alt="Google Keep" />
      <p>{formText}你的帳戶</p>

      {/* google OAuth */}
      <GoogleLoginButton />

      {/* form */}
      <SLoginFormSeparator>或</SLoginFormSeparator>
      {pathname === ROUTER_PATH.SIGNUP && (
        <Input
          validFormHandler={validFormHandler}
          name="name"
          label="用戶名稱"
          type="text"
          validate={[VALIDATOR_TYPES.REQUIRE]}
        />
      )}
      <Input
        name="email"
        validFormHandler={validFormHandler}
        label="電子信箱"
        type="text"
        validate={[VALIDATOR_TYPES.REQUIRE, VALIDATOR_TYPES.EMAIL]}
      />
      <Input
        name="password"
        validFormHandler={validFormHandler}
        label="密碼"
        type="password"
        validate={[VALIDATOR_TYPES.REQUIRE, VALIDATOR_TYPES.MINLENGTH]}
      />

      {/* submit button */}
      <LoginButton
        type="submit"
        isFormValid={isFormValid}
        inputValues={formInputs}
      />

      {/* toggle page */}
      {pathname === ROUTER_PATH.LOGIN && (
        <SFormHint>
          還不是會員嗎？ 立刻 <u onClick={goSignupPage}>註冊新帳號</u>
        </SFormHint>
      )}
      {pathname === ROUTER_PATH.SIGNUP && (
        <SFormHint>
          已經有帳號了？ <u onClick={goLoginPage}>馬上登入</u>
        </SFormHint>
      )}
    </SLoginForm>
  );
}

export default LoginForm;
