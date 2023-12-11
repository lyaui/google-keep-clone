import { type MouseEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import { TOOLTIP_TEXT } from '@/constants/tooltipText';
import { ROUTER_PATH } from '@/routes';
import { useAuth, logout } from '@/contexts/auth-context';
import * as Icon from '@/components/UI/Icon/index';
import Button from '@/components/UI/Buttons/index';

function LogoutButton() {
  const navigate = useNavigate();
  const { authState, authDispatch } = useAuth();
  const { isLoading } = authState;

  const logoutUserHandler = async (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    await logout(authDispatch);
    navigate(ROUTER_PATH.LOGIN, { replace: true });
  };

  return (
    <Tippy content={TOOLTIP_TEXT.LOGOUT}>
      <Button size="large" onClick={logoutUserHandler} disabled={isLoading}>
        <Icon.Logout />
      </Button>
    </Tippy>
  );
}

export default LogoutButton;
