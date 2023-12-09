import ReactDOM from 'react-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { SToast } from '@/components/UI/Toast/style';

const Toast = () => {
  return ReactDOM.createPortal(
    <SToast>
      <ToastContainer />
    </SToast>,
    document.getElementById('toast-root')
  );
};

export default Toast;
