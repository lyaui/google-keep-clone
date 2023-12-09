import { useNavigate } from 'react-router-dom';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import { TOOLTIP_TEXT } from '@/constants/tooltipText';
import { ROUTER_PATH } from '@/routes';
import { useAuth, logout } from '@/contexts/auth-context';
import * as Icon from '@/components/UI/Icon/index';
import { ButtonRound } from '@/components/UI/Buttons/index';

function LogoutButton() {
  const navigate = useNavigate();
  const { authState, authDispatch } = useAuth();
  const { isLoading } = authState;

  const logoutUserHandler = async (e) => {
    e.preventDefault();

    await logout(authDispatch);
    navigate.replace(ROUTER_PATH.LOGIN, { replace: true });
  };

  return (
    <Tippy content={TOOLTIP_TEXT.LOGOUT}>
      <ButtonRound size={40} onClick={logoutUserHandler} disabled={isLoading}>
        <Icon.Logout />
      </ButtonRound>
    </Tippy>
  );
}

export default LogoutButton;
