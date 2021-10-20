import { useRouteMatch, useHistory } from 'react-router-dom';
import { useAuth, login, signup } from 'contexts/auth-context';
import { ROUTE } from 'constants/routes.js';
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

    const res = await login(authDispatch, payload);
    if (!res.success) return;
    history.push(ROUTE.HOME);
  };

  const signupUserHandler = async () => {
    const payload = {
      name: inputValues.name.value.trim(),
      email: inputValues.email.value.trim(),
      password: inputValues.password.value,
    };

    const res = await signup(authDispatch, payload);
    if (!res.success) return;
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
