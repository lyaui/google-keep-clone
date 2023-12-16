import { useState, useEffect } from 'react';
import type { MouseEvent } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '@/hooks/useReduxStore';
import { ROUTER_PATH } from '@/routes';
import { getUserLabels } from '@/store/labelsSlice/labels-action';
import { useUI } from '@/contexts/UI-context';
import SkeletonMenuItem from '@/skeletons/SkeletonMenuItem';
import NavItem, {
  type NavItemProps,
} from '@/components/Layout/SideMenu/NavItem';
import { SSideMenu, SSideMenuList } from '@/components/Layout/SideMenu/style';
import Modal from '@/components/UI/Modal';
import EditLabelPopover from '@/components/EditLabels/EditLabelPopover';

function SideMenu() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { labels, errorMessage, isLoading } = useAppSelector(
    (state) => state.labels
  );
  const { UIState } = useUI();
  const [showEditModal, setShowEditModal] = useState(false);

  const openEditModalHandler = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    setShowEditModal(true);
  };
  const closeEditModalHandler = () => setShowEditModal(false);

  const navItems: NavItemProps[] = [
    { toRoute: ROUTER_PATH.HOME, label: '記事', type: 'memo' },
    ...labels.map((_label) => ({
      toRoute: ROUTER_PATH.BUILD_LABEL_PATH(_label.name),
      label: _label.name,
      typeL: 'label',
    })),
    {
      toRoute: '',
      label: '編輯標籤',
      type: 'edit',
      onClick: openEditModalHandler,
    },
    { toRoute: ROUTER_PATH.ARCHIVE, label: '封存', type: 'archive' },
  ];

  useEffect(() => {
    dispatch(getUserLabels());
    if (errorMessage) return navigate(ROUTER_PATH.LOGIN, { replace: true });
  }, [dispatch, errorMessage, navigate]);

  return (
    <SSideMenu isFixedMenu={UIState.isFixedMenu}>
      <SSideMenuList>
        {isLoading ? (
          Array.from(Array(10).keys()).map((index) => (
            <SkeletonMenuItem key={index} isFixedMenu={UIState.isFixedMenu} />
          ))
        ) : (
          <>
            {navItems.map((_nav) => (
              <NavItem key={_nav.label} {..._nav} />
            ))}
          </>
        )}
      </SSideMenuList>

      <Modal isOpen={showEditModal} onClose={closeEditModalHandler}>
        <EditLabelPopover />
      </Modal>
    </SSideMenu>
  );
}

export default SideMenu;
