import { Fragment, useState } from 'react';
import * as Icon from 'components/UI/Icon/index.js';
import { SNavItem, SNavItemText } from 'components/Layout/SideMenu/NavItem/style.js';
import { ButtonRound } from 'components/UI/Buttons/index.js';
import Modal from 'components/UI/Modal';
import EditLabels from 'components/EditLabels';

const EditLabelButton = ({ navItemStyle }) => {
  const [showEditModal, setShowEditModal] = useState(false);

  const openEditModalHandler = () => setShowEditModal(true);
  const closeEditModalHandler = () => setShowEditModal(false);

  return (
    <Fragment>
      <SNavItem style={navItemStyle} onClick={openEditModalHandler}>
        <ButtonRound size={40}>
          <Icon.EditOutline />
        </ButtonRound>
        <SNavItemText isFixedMenu={true}>編輯標籤</SNavItemText>
      </SNavItem>
      <Modal showModal={showEditModal} closeModal={closeEditModalHandler}>
        <EditLabels type='sideMenu' />
      </Modal>
    </Fragment>
  );
};

export default EditLabelButton;
