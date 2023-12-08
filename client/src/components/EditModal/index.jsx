import { useRouteMatch, useHistory } from 'react-router-dom';
import { useFetchMemos } from '@/hooks/fetchMemos-hook.js';
import { getUserMemoByMemoId } from '@/store/memosSlice/memos-action.js';
import { ROUTE } from '@/constants/routes.js';
import SkeletonEditModal from '@/skeletons/SkeletonEditModal';
import Modal from '@/components/UI/Modal';
import EditCard from '@/components/EditCard';

const EditModal = () => {
  const history = useHistory();
  const match = useRouteMatch();

  const { memoId } = match.params;
  const { isLoading } = useFetchMemos({
    action: getUserMemoByMemoId,
    params: memoId,
  });

  const closeEditModalHandler = (e) => {
    e.preventDefault();
    history.push(ROUTE.HOME);
  };

  return (
    <Modal showModal={true} closeModal={closeEditModalHandler}>
      {!isLoading && <EditCard />}
      {isLoading && <SkeletonEditModal />}
    </Modal>
  );
};

export default EditModal;
