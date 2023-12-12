import { Fragment } from 'react';
import ReactDom from 'react-dom';
import Backdrop from '@/components/UI/Backdrop';
import { SModalOverlay } from '@/components/UI/Modal/style.jsx';

const ModalOverlay = ({ children }) => {
  const content = <SModalOverlay>{children}</SModalOverlay>;
  return ReactDom.createPortal(content, document.getElementById('modal-root'));
};

const Modal = ({ showModal, closeModal, children }) => {
  return (
    <Fragment>
      {showModal && <Backdrop onClose={closeModal} />}
      {showModal && <ModalOverlay children={children} />}
    </Fragment>
  );
};
export default Modal;
