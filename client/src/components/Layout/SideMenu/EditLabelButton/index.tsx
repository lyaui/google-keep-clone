import { Fragment, useState } from 'react';
import * as Icon from '@/components/UI/Icon';
import {
  SNavItem,
  SNavItemText,
} from '@/components/Layout/SideMenu/NavItem/style';
import Button from '@/components/UI/Buttons';
import Modal from '@/components/UI/Modal';
import EditLabelPopover from '@/components/EditLabels/EditLabelPopover';

const EditLabelButton = ({ navItemStyle }) => {
  const [showEditModal, setShowEditModal] = useState(false);

  const openEditModalHandler = () => setShowEditModal(true);
  const closeEditModalHandler = () => setShowEditModal(false);

  return (
    <Fragment>
      <SNavItem style={navItemStyle} onClick={openEditModalHandler}>
        <Button size="large">
          <Icon.EditOutline />
        </Button>
        <SNavItemText isFixedMenu={true}>編輯標籤</SNavItemText>
      </SNavItem>
      <Modal isOpen={showEditModal} onClose={closeEditModalHandler}>
        <EditLabelPopover />
      </Modal>
    </Fragment>
  );
};

export default EditLabelButton;
