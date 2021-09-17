import { Fragment } from 'react';
import Backdrop from 'components/UI/Backdrop';

const EditModal = ({ showModal, closeModal }) => {
  return <Fragment>{showModal && <Backdrop onClick={closeModal} />}</Fragment>;
};

export default EditModal;
