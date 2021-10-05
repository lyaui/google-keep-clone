import { useRouteMatch } from 'react-router-dom';
import { ROUTE } from 'constants/routes.js';
import { ButtonRect } from 'components/UI/Buttons';

const LoginButton = () => {
  const { path } = useRouteMatch();
  const buttonText = path === ROUTE.LOGIN ? '登 入' : '註 冊';

  return (
    <ButtonRect color='rgb(66, 133, 244);' disabled>
      {buttonText}
    </ButtonRect>
  );
};

export default LoginButton;
