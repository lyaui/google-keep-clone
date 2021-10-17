import { useSelector } from 'react-redux';
import { PALETTE_COLORS } from 'constants/paletteColors.js';
import EditCardImages from 'components/EditCard/EditCardImages';
import EditCardTitle from 'components/EditCard/EditCardTitle';
import EditCardContent from 'components/EditCard/EditCardContent';
import EditTasks from 'components/EditCard/EditTasks';
import EditCardLink from 'components/EditCard/EditCardLink';
import EditCardLabels from 'components/EditCard/EditCardLabels';
import EditCardToolbar from 'components/EditCard/EditCardToolbar';
import { SEditCard, SEditCardBody, SEmptyEditor } from 'components/EditCard/style.js';

const EditCard = ({ showMemo = true }) => {
  const { memo } = useSelector((state) => state.memos);
  const { isTaskList, color } = memo;
  const memoColor = PALETTE_COLORS[color];
  if (!showMemo) return <SEmptyEditor />;
  return (
    <SEditCard memoColor={memoColor}>
      <SEditCardBody>
        {/* images */}
        <EditCardImages />
        {/* title */}
        <EditCardTitle />
        {/* content */}
        {!isTaskList && <EditCardContent />}
        {/* tasks */}
        {isTaskList && <EditTasks />}
        {/* label */}
        {memo.labels.length > 0 && <EditCardLabels />}
        {/* links */}
        {memo.links.length > 0 && <EditCardLink />}
      </SEditCardBody>
      {/* toolbar */}
      <EditCardToolbar />
    </SEditCard>
  );
};

export default EditCard;
