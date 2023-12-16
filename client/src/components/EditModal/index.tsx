import { useParams, useNavigate } from 'react-router-dom';

import { useFetchMemos } from '@/hooks/useFetchMemos';
import { getUserMemoByMemoId } from '@/store/memosSlice/memos-action';
import { ROUTER_PATH } from '@/routes';
import SkeletonEditModal from '@/skeletons/SkeletonEditModal';
import Modal from '@/components/UI/Modal';
import EditCard from '@/components/EditCard';

function EditModal() {
  const navigate = useNavigate();
  const { memoId } = useParams();

  const { isLoading } = useFetchMemos({
    action: getUserMemoByMemoId,
    params: memoId,
  });

  const closeEditModalHandler = (e) => {
    e.preventDefault();
    navigate(ROUTER_PATH.HOME);
  };

  return (
    <Modal isOpen={true} onClose={closeEditModalHandler}>
      {isLoading ? <SkeletonEditModal /> : <EditCard />}
    </Modal>
  );
}

export default EditModal;
