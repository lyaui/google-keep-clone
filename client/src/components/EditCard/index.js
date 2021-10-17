import { useSelector } from 'react-redux';
import EditCardImages from 'components/EditCard/EditCardImages';
import EditCardTitle from 'components/EditCard/EditCardTitle';
import EditCardContent from 'components/EditCard/EditCardContent';
import EditTasks from 'components/EditCard/EditTasks';
import EditCardLink from 'components/EditCard/EditCardLink';
import EditCardLabels from 'components/EditCard/EditCardLabels';
import EditCardToolbar from 'components/EditCard/EditCardToolbar';
import { SEditCard, SEditCardBody } from 'components/EditCard/style.js';

const EditCard = () => {
  const { memo } = useSelector((state) => state.memos);
  const memoColor = memo.color;

  return (
    <SEditCard memoColor={memoColor}>
      <SEditCardBody>
        {/* images */}
        <EditCardImages />
        {/* title */}
        <EditCardTitle />
        {/* content */}
        {memo.tasks.length === 0 && <EditCardContent />}
        {/* tasks */}
        {memo.tasks.length > 0 && <EditTasks />}
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
