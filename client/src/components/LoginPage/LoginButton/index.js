import { useRouteMatch, useHistory } from 'react-router-dom';
import { useAuth, login, signup } from 'contexts/auth-context';
import { useUI, getUserSettings } from 'contexts/UI-context/index.js';
import { ROUTE } from 'constants/routes.js';
import * as Icon from 'components/UI/Icon/index.js';
import { ButtonRect } from 'components/UI/Buttons';

const LoginButton = ({ isFormValid, inputValues }) => {
  const history = useHistory();
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
    // login
    const loginRes = await login(authDispatch, payload);
    if (!loginRes.success) return;

    // fetch user settings
    const settingRes = await getUserSettings(UIDispatch);
    if (!settingRes) throw new Error();

    history.push(ROUTE.HOME);
  };

  const signupUserHandler = async () => {
    const payload = {
      name: inputValues.name.value.trim(),
      email: inputValues.email.value.trim(),
      password: inputValues.password.value,
    };

    const signUpRes = await signup(authDispatch, payload);
    if (!signUpRes.success) return;

    // fetch user settings
    const settingRes = await getUserSettings(UIDispatch);
    if (!settingRes) throw new Error();

    history.push(ROUTE.HOME);
  };

  return (
    <ButtonRect onClick={submitFormHandler} isFormValid={isFormValid} disabled={isLoading}>
      {!isLoading && buttonText}
      {isLoading && <Icon.Loading className='spinner' />}
    </ButtonRect>
  );
};

export default LoginButton;
