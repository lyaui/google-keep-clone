import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { ROUTE } from 'constants/routes.js';
import { toast } from 'react-toastify';
import { TOAST_TEXT } from 'constants/toastText.js';
import { getUserLabels } from 'store/labelsSlice/labels-action.js';
import { useAuth } from 'contexts/auth-context';
import { useUI } from 'contexts/UI-context';
import NavItem from 'components/Layout/SideMenu/NavItem/index.js';
import EditLabelButton from 'components/Layout/EditLabelButton';
import { SSideMenu, SSideMenuList } from 'components/Layout/SideMenu/style.js';

const SideMenu = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { labels, errorMessage } = useSelector((state) => state.labels);
  const { authState } = useAuth();
  const { userId } = authState;
  const { UIState } = useUI();
  const { isFixedMenu } = UIState;

  useEffect(() => {
    if (!userId) return history.replace(ROUTE.LOGIN);
    dispatch(getUserLabels(userId));
    if (errorMessage) {
      toast(TOAST_TEXT.LABELS_FAIL);
      history.replace(ROUTE.LOGIN);
    }
  }, [dispatch, errorMessage, history, userId]);

  return (
    <SSideMenu isFixedMenu={isFixedMenu}>
      <SSideMenuList>
        <NavItem id='memo' label='記事' type='memo' />
        {labels.map((label) => (
          <NavItem key={label._id} id={label._id} label={label.name} type='label' />
        ))}
        <EditLabelButton />
        <NavItem id='archive' label='封存' type='archive' />
      </SSideMenuList>
    </SSideMenu>
  );
};

export default SideMenu;
