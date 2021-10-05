import { useState, useEffect } from 'react';
import { useRouteMatch, useHistory } from 'react-router-dom';
import { ROUTE } from 'constants/routes.js';
import { VALIDATOR_TYPES } from 'utils/validator.js';
import Logo from 'assets/images/logo-text.png';
import GoogleLoginButton from 'components/LoginPage/GoogleLoginButton';
import Input from 'components/UI/Input';
import LoginButton from 'components/LoginPage/LoginButton';
import {
  SLoginForm,
  SLoginFormLogo,
  SLoginFormSeperator,
  SFormHint,
} from 'components/LoginPage/LoginForm/style.js';

const INIT_SIGNIP_INPUTS = {
  name: { isValid: false },
  email: { isValid: false },
  password: { isValid: false },
};

const INIT_LOGIN_INPUTS = {
  email: { isValid: false },
  password: { isValid: false },
};

const LoginForm = () => {
  const { path } = useRouteMatch();
  const history = useHistory();
  const [formInputs, setFormInputs] = useState(null);
  const [isFormValid, setIsFormValid] = useState(false);
  const formText = path === ROUTE.LOGIN ? '登入' : '註冊';

  // set initInputs while path changes
  useEffect(() => {
    const initInputs = path === ROUTE.LOGIN ? INIT_LOGIN_INPUTS : INIT_SIGNIP_INPUTS;
    setFormInputs(initInputs);
  }, [path]);

  // update input isValid value
  const validFormHandler = (label, isValid) => {
    const updatedformInputs = { ...formInputs, [label]: { isValid: isValid } };
    setFormInputs(updatedformInputs);
  };

  // check if all inputs are valid
  useEffect(() => {
    if (!formInputs) return;
    const isFormValid = Object.values(formInputs).every((item) => item.isValid === true);
    setIsFormValid(isFormValid);
  }, [formInputs]);

  const goLoginPage = () => history.push(ROUTE.LOGIN);
  const goSignupPage = () => history.push(ROUTE.SIGNUP);

  return (
    <SLoginForm onSubmit={() => {}}>
      <SLoginFormLogo src={Logo} alt='Google Keep' />
      <p>{formText}你的帳戶</p>

      {/* google OAuth */}
      <GoogleLoginButton />

      {/* form */}
      <SLoginFormSeperator>或</SLoginFormSeperator>
      {path === ROUTE.SIGNUP && (
        <Input
          validFormHandler={validFormHandler}
          name='name'
          label='用戶名稱'
          type='text'
          validate={[VALIDATOR_TYPES.REQUIRE]}
        />
      )}
      <Input
        name='email'
        validFormHandler={validFormHandler}
        label='電子信箱'
        type='text'
        validate={[VALIDATOR_TYPES.REQUIRE, VALIDATOR_TYPES.EMAIL]}
      />
      <Input
        name='password'
        validFormHandler={validFormHandler}
        label='密碼'
        type='password'
        validate={[VALIDATOR_TYPES.REQUIRE, VALIDATOR_TYPES.MINLENGTH]}
      />

      {/* submit button */}
      <LoginButton type='submit' isFormValid={isFormValid} />

      {/* toggle page */}
      {path === ROUTE.LOGIN && (
        <SFormHint>
          還不是會員嗎？ 立刻 <u onClick={goSignupPage}>註冊新帳號</u>
        </SFormHint>
      )}
      {path === ROUTE.SIGNUP && (
        <SFormHint>
          已經有帳號了？ <u onClick={goLoginPage}>馬上登入</u>
        </SFormHint>
      )}
    </SLoginForm>
  );
};

export default LoginForm;
