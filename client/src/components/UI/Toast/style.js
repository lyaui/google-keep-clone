import styled from 'styled-components/macro';
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
    color: #fff;
    background-color: #323232;
    letter-spacing: 0.5px;
    font-weight: 300;
  }
`;
