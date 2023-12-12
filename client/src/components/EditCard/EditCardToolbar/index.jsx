import { useSelector } from 'react-redux';
import EditCardColorButton from '@/components/ActionButtons/EditCardColorButton';
import EditCardLabelsButton from '@/components/ActionButtons/EditCardLabelsButton';
import EditCardTaskButton from '@/components/ActionButtons/EditCardTaskButton';
import EditCardCancelTaskButton from '@/components/ActionButtons/EditCardCancelTaskButton';
import UploadImageButton from '@/components/ActionButtons/UploadImageButton';
import EditMemoArchiveButton from '@/components/ActionButtons/EditMemoArchiveButton';
import CancelEditButton from '@/components/ActionButtons/CancelEditButton';
import { SEditCardToolbar } from '@/components/EditCard/EditCardToolbar/style.jsx';

const EditCardToolbar = () => {
  const { memo } = useSelector((state) => state.memos);
  const { isTaskList } = memo;

  return (
    <SEditCardToolbar>
      {/* palette */}
      <EditCardColorButton />
      {/* labels */}
      <EditCardLabelsButton />
      {/* checkbox */}
      {!isTaskList && <EditCardTaskButton />}
      {/* cancel checkbox */}
      {isTaskList && <EditCardCancelTaskButton />}
      {/* image */}
      <UploadImageButton />
      {/* archive */}
      <EditMemoArchiveButton />
      {/* cancel edit */}
      <CancelEditButton />
    </SEditCardToolbar>
  );
};

export default EditCardToolbar;
