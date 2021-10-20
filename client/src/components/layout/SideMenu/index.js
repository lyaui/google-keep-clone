import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { ROUTE } from 'constants/routes.js';
import { getUserLabels } from 'store/labelsSlice/labels-action.js';
import { useUI } from 'contexts/UI-context';
import NavItem from 'components/Layout/SideMenu/NavItem/index.js';
import EditLabelButton from 'components/Layout/EditLabelButton';
import { SSideMenu, SSideMenuList } from 'components/Layout/SideMenu/style.js';

const SideMenu = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { labels, errorMessage } = useSelector((state) => state.labels);
  const { UIState } = useUI();
  const { isFixedMenu } = UIState;

  useEffect(() => {
    dispatch(getUserLabels());
    if (errorMessage) return history.replace(ROUTE.LOGIN);
  }, [dispatch, errorMessage, history]);

  return (
    <SSideMenu isFixedMenu={isFixedMenu}>
      <SSideMenuList>
        <NavItem toRoute={ROUTE.HOME} id='memo' label='記事' type='memo' />
        {labels.map((label) => (
          <NavItem
            toRoute={ROUTE.BUILD_LABEL_PATH(label.name)}
            key={label._id}
            id={label._id}
            label={label.name}
            type='label'
          />
        ))}
        <EditLabelButton />
        <NavItem toRoute={ROUTE.HOME} id='archive' label='封存' type='archive' />
      </SSideMenuList>
    </SSideMenu>
  );
};

export default SideMenu;
