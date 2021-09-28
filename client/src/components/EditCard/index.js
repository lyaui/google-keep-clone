import EditCardImages from 'components/EditCard/EditCardImages';
import EditCardTitle from 'components/EditCard/EditCardTitle';
import EditCardContent from 'components/EditCard/EditCardContent';
import EditCardLink from 'components/EditCard/EditCardLink';
import EditCardLabels from 'components/EditCard/EditCardLabels';
import EditCardToolbar from 'components/EditCard/EditCardToolbar';

import { SEditCard, SEditCardBody } from 'components/EditCard/style.js';

const EditCard = () => {
  // const [isPinned, setIsPinner] = useState(false);
  // const [color, setColor] = useState('');

  return (
    <SEditCard>
      <SEditCardBody>
        {/* images */}
        <EditCardImages />
        {/* title */}
        <EditCardTitle />
        {/* content */}
        <EditCardContent />
        {/* label */}
        <EditCardLabels />
        {/* links */}
        <EditCardLink />
      </SEditCardBody>
      {/* toolbar */}
      <EditCardToolbar />
    </SEditCard>
  );
};

export default EditCard;
