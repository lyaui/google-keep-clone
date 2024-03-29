import styled from 'styled-components';
import { ToastContainer, Slide } from 'react-toastify';

export const SToast = styled(ToastContainer).attrs({
  position: 'bottom-left',
  autoClose: 2000,
  hideProgressBar: true,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  transition: Slide,
})`
  .Toastify__toast {
    color: hsl(var(--color-white));
    background-color: hsl(var(--color-gray-800));
    letter-spacing: 0.5px;
    font-size: var(--text-md);
    font-weight: var(--font-thin);
  }
`;
