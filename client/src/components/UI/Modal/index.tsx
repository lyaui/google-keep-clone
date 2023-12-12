import { Fragment } from 'react';
import type { ReactNode } from 'react';
import ReactDom from 'react-dom';
import styled from 'styled-components';

import Backdrop from '@/components/UI/Backdrop';

export const SModalOverlay = styled.div`
  z-index: var(--zindex-model);
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 600px;
`;

interface ModalProps {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

function ModalOverlay({ children }: Pick<ModalProps, 'children'>) {
  const root = document.getElementById('modal-root');
  if (!root) return null;

  const content = <SModalOverlay>{children}</SModalOverlay>;
  return ReactDom.createPortal(content, root);
}

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  return (
    <Fragment>
      {isOpen && <Backdrop onClose={onClose} />}
      {isOpen && <ModalOverlay children={children} />}
    </Fragment>
  );
};
export default Modal;
