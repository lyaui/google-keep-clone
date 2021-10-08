import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { TOOLTIP_TEXT } from 'constants/tooltipText.js';
import { ROUTE } from 'constants/routes.js';
import { TOAST_TEXT } from 'constants/toastText.js';
import { useAuth, logout } from 'contexts/auth-context';
import * as Icon from 'components/UI/Icon/index.js';
import { ButtonRound } from 'components/UI/Buttons/index.js';

const LogoutButton = () => {
  const history = useHistory();
  const { authDispatch } = useAuth();

  const logoutUserHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await logout(authDispatch);
      if (!res.success) throw new Error();
      toast(TOAST_TEXT.LOGOUT_SUCCESS);
      history.push(ROUTE.LOGIN);
    } catch {
      toast(TOAST_TEXT.LOGOUT_FAIL);
    }
  };

  return (
    <Tippy content={TOOLTIP_TEXT.LOGOUT}>
      <ButtonRound size={40} onClick={logoutUserHandler}>
        <Icon.Logout />
      </ButtonRound>
    </Tippy>
  );
};

export default LogoutButton;
