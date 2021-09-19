import Modal from 'components/UI/Modal';
import AddNewCard from 'components/EditCard';

const EditModal = (props) => {
  return (
    <Modal {...props}>
      <AddNewCard />
    </Modal>
  );
};

export default EditModal;
