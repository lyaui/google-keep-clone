import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { ROUTE } from '@/constants/routes.js';
import { getUserLabels } from '@/store/labelsSlice/labels-action.js';
import { useUI } from '@/contexts/UI-context';
import SkeletonMenuItem from '@/skeletons/SkeletonMenuItem';
import NavItem from '@/components/Layout/SideMenu/NavItem/index.jsx';
import EditLabelButton from '@/components/Layout/SideMenu/EditLabelButton';
import { SSideMenu, SSideMenuList } from '@/components/Layout/SideMenu/style';

const SideMenu = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { labels, errorMessage, isLoading } = useSelector(
    (state) => state.labels,
  );
  const { UIState } = useUI();

  useEffect(() => {
    dispatch(getUserLabels());
    if (errorMessage) return history.replace(ROUTE.LOGIN);
  }, [dispatch, errorMessage, history]);

  const navItemStyle = {
    '--margin': UIState.isFixedMenu ? '-20px' : '10px',
    '--padding': UIState.isFixedMenu ? '20px' : '0px',
    '--margin-button': UIState.isFixedMenu ? '15px' : '5px',
  };

  return (
    <SSideMenu
      style={{
        '--position': UIState.isFixedMenu ? 'relative' : 'fixed',
        '--width': UIState.isFixedMenu ? '280px' : '70px',
      }}
    >
      <SSideMenuList>
        {/* skeleton */}
        {isLoading &&
          Array.from(Array(10).keys()).map((index) => (
            <SkeletonMenuItem key={index} isFixedMenu={UIState.isFixedMenu} />
          ))}

        {!isLoading && (
          <NavItem
            navItemStyle={navItemStyle}
            toRoute={ROUTE.HOME}
            label='記事'
            type='memo'
          />
        )}
        {!isLoading &&
          labels.map((label) => (
            <NavItem
              navItemStyle={navItemStyle}
              toRoute={ROUTE.BUILD_LABEL_PATH(label.name)}
              key={label._id}
              label={label.name}
              type='label'
            />
          ))}
        {!isLoading && <EditLabelButton navItemStyle={navItemStyle} />}
        {!isLoading && (
          <NavItem
            navItemStyle={navItemStyle}
            toRoute={ROUTE.ARCHIVE}
            label='封存'
            type='archive'
          />
        )}
      </SSideMenuList>
    </SSideMenu>
  );
};

export default SideMenu;
