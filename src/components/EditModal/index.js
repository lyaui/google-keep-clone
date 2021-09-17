import Modal from 'components/UI/Modal';
import AddNewCard from 'components/AddNewCard';

const EditModal = (props) => {
  return (
    <Modal {...props}>
      <AddNewCard />
    </Modal>
  );
};

export default EditModal;
