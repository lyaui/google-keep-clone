import { useHistory } from 'react-router-dom';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { TOOLTIP_TEXT } from '@/constants/tooltipText.js';
import { ROUTE } from '@/constants/routes.js';
import { useAuth, logout } from '@/contexts/auth-context';
import * as Icon from '@/components/UI/Icon/index.jsx';
import { ButtonRound } from '@/components/UI/Buttons/index.jsx';

const LogoutButton = () => {
  const history = useHistory();
  const { authState, authDispatch } = useAuth();
  const { isLoading } = authState;

  const logoutUserHandler = async (e) => {
    e.preventDefault();

    await logout(authDispatch);
    history.replace(ROUTE.LOGIN);
  };

  return (
    <Tippy content={TOOLTIP_TEXT.LOGOUT}>
      <ButtonRound size={40} onClick={logoutUserHandler} disabled={isLoading}>
        <Icon.Logout />
      </ButtonRound>
    </Tippy>
  );
};

export default LogoutButton;
