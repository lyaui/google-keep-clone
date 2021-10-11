import { useRouteMatch, useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useAuth, login, signup } from 'contexts/auth-context';
import { ROUTE } from 'constants/routes.js';
import { TOAST_TEXT } from 'constants/toastText.js';
import * as Icon from 'components/UI/Icon/index.js';
import { ButtonRect } from 'components/UI/Buttons';

const LoginButton = ({ isFormValid, inputValues }) => {
  const history = useHistory();
  const { path } = useRouteMatch();
  const { authState, authDispatch } = useAuth();
  const { isLoading } = authState;
  const buttonText = path === ROUTE.LOGIN ? '登 入' : '註 冊';

  const submitFormHandler = async (e) => {
    e.preventDefault();
    path === ROUTE.LOGIN ? await loginUserHandler() : await signupUserHandler();
  };

  const loginUserHandler = async () => {
    const payload = {
      email: inputValues.email.value.trim(),
      password: inputValues.password.value,
    };
    try {
      const res = await login(authDispatch, payload);
      if (!res.success) throw new Error();
      toast(TOAST_TEXT.LOGIN_SUCCESS);
      history.push(ROUTE.HOME);
    } catch {
      toast(TOAST_TEXT.LOGIN_FAIL);
    }
  };

  const signupUserHandler = async () => {
    const payload = {
      name: inputValues.name.value.trim(),
      email: inputValues.email.value.trim(),
      password: inputValues.password.value,
    };
    try {
      const res = await signup(authDispatch, payload);
      if (!res.success) throw res;
      toast(TOAST_TEXT.SIGNUP_SUCCESS);
      history.push(ROUTE.HOME);
    } catch (err) {
      if (err.status === 422) return toast(TOAST_TEXT.SIGNUP_ACCOUNT_EXISTED);
      toast(TOAST_TEXT.SIGNUP_FAIL);
    }
  };

  return (
    <ButtonRect onClick={submitFormHandler} isFormValid={isFormValid} disabled={isLoading}>
      {!isLoading && buttonText}
      {isLoading && <Icon.Loading className='spinner' />}
    </ButtonRect>
  );
};

export default LoginButton;
