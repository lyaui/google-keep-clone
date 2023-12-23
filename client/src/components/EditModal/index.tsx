import { type MouseEvent } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { useFetchMemoByMemoIdQuery } from '@/store/apis/memoApi';
import SkeletonEditModal from '@/skeletons/SkeletonEditModal';
import Modal from '@/components/UI/Modal';
import EditCard from '@/components/EditCard';

function EditModal() {
  const navigate = useNavigate();
  const { memoId } = useParams();

  const { isLoading } = useFetchMemoByMemoIdQuery(memoId || '', {
    skip: !memoId,
  });

  const closeEditModalHandler = (event: MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    navigate(-1);
  };

  return (
    <Modal isOpen={true} onClose={closeEditModalHandler}>
      {isLoading ? <SkeletonEditModal /> : <EditCard />}
    </Modal>
  );
}

export default EditModal;
