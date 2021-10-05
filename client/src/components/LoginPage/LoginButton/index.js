import { useRouteMatch } from 'react-router-dom';
import { ROUTE } from 'constants/routes.js';
import { ButtonRect } from 'components/UI/Buttons';

const LoginButton = ({ isFormValid }) => {
  const { path } = useRouteMatch();
  const buttonText = path === ROUTE.LOGIN ? '登 入' : '註 冊';
  return <ButtonRect isFormValid={isFormValid}>{buttonText}</ButtonRect>;
};

export default LoginButton;
