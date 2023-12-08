import ReactDOM from 'react-dom';
import { SBackdrop } from '@/components/UI/Backdrop/style.jsx';

const Backdrop = ({ onClick }) => {
  return ReactDOM.createPortal(
    <SBackdrop onClick={onClick} />,
    document.getElementById('backdrop-root'),
  );
};

export default Backdrop;
