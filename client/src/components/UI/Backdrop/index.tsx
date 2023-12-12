import type { MouseEventHandler } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

export const SBackdrop = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: var(--zindex-backdrop);
  background-color: hsla(var(--color-black), 0.5);
  backdrop-filter: blur(1px);
`;

interface BackdropProps {
  onClose: MouseEventHandler<HTMLDivElement>;
}

function Backdrop({ onClose }: BackdropProps) {
  const root = document.getElementById('backdrop-root');
  if (!root) return null;

  return ReactDOM.createPortal(<SBackdrop onClick={onClose} />, root);
}

export default Backdrop;
