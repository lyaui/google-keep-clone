import styled from 'styled-components';

import { useAppSelector } from '@/hooks/useReduxStore';
import EditCardColorButton from '@/components/ActionButtons/EditCardColorButton';
import EditCardLabelsButton from '@/components/ActionButtons/EditCardLabelsButton';
import EditCardTaskButton from '@/components/ActionButtons/EditCardTaskButton';
import EditCancelTaskButton from '@/components/ActionButtons/EditCancelTaskButton';
import UploadImageButton from '@/components/ActionButtons/UploadImageButton';
import EditMemoArchiveButton from '@/components/ActionButtons/EditMemoArchiveButton';
import CancelEditButton from '@/components/ActionButtons/CancelEditButton';

export const SEditCardToolbar = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
`;

function EditNewMemoToolbar() {
  const { memo } = useAppSelector((state) => state.memos);
  const { isTaskList } = memo;

  return (
    <SEditCardToolbar>
      {/* palette */}
      <EditCardColorButton />
      {/* labels */}
      <EditCardLabelsButton />
      {/* cancel checkbox | checkbox */}
      {isTaskList ? <EditCancelTaskButton /> : <EditCardTaskButton />}
      {/* image */}
      <UploadImageButton />
      {/* archive */}
      <EditMemoArchiveButton />
      {/* cancel edit */}
      <CancelEditButton />
    </SEditCardToolbar>
  );
}

export default EditNewMemoToolbar;
