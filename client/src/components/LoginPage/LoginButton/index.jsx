import { useRouteMatch } from 'react-router-dom';
import { useAuth, login, signup } from '@/contexts/auth-context';
import { useUI, getUserSettings } from '@/contexts/UI-context/index.jsx';
import { ROUTE } from '@/constants/routes.js';
import * as Icon from '@/components/UI/Icon/index.jsx';
import { ButtonRect } from '@/components/UI/Buttons';

const LoginButton = ({ isFormValid, inputValues }) => {
  const { path } = useRouteMatch();
  const { authState, authDispatch } = useAuth();
  const { isLoading } = authState;
  const buttonText = path === ROUTE.LOGIN ? '登 入' : '註 冊';
  const { UIDispatch } = useUI();

  const submitFormHandler = async (e) => {
    e.preventDefault();
    path === ROUTE.LOGIN ? await loginUserHandler() : await signupUserHandler();
  };

  const loginUserHandler = async () => {
    const payload = {
      email: inputValues.email.value.trim(),
      password: inputValues.password.value,
    };
    const loginRes = await login(authDispatch, payload);
    if (!loginRes.success) return;
    await getUserSettings(UIDispatch);
  };

  const signupUserHandler = async () => {
    const payload = {
      name: inputValues.name.value.trim(),
      email: inputValues.email.value.trim(),
      password: inputValues.password.value,
    };
    const signUpRes = await signup(authDispatch, payload);
    if (!signUpRes.success) return;
    await getUserSettings(UIDispatch);
  };

  return (
    <ButtonRect
      onClick={submitFormHandler}
      isFormValid={isFormValid}
      disabled={isLoading}
    >
      {!isLoading && buttonText}
      {isLoading && <Icon.Loading className='spinner' />}
    </ButtonRect>
  );
};

export default LoginButton;
