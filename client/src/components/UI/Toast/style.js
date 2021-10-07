import styled from 'styled-components/macro';
import { ToastContainer } from 'react-toastify';

export const SToast = styled(ToastContainer).attrs({
  position: 'bottom-left',
  autoClose: 3000,
  hideProgressBar: true,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
})`
  .Toastify__toast {
    color: #fff;
    background-color: #323232;
    letter-spacing: 0.5px;
    font-weight: 300;
  }
`;
