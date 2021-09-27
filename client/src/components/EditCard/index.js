import EditCardImages from 'components/EditCard/EditCardImages';
import EditCardTitle from 'components/EditCard/EditCardTitle';
import EditCardContent from 'components/EditCard/EditCardContent';
import EditCardToolbar from 'components/EditCard/EditCardToolbar';
import EditCardLink from 'components/EditCard/EditCardLink';

import { SEditCard, SEditCardBody } from 'components/EditCard/style.js';

const EditCard = () => {
  // const [isTodoList, setIsTodoList] = useState(false);
  // const [content, setContent] = useState('');
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
        {/* tags */}
        {/* links */}
        <EditCardLink />
      </SEditCardBody>

      {/* toolbar */}
      <EditCardToolbar />
    </SEditCard>
  );
};

export default EditCard;
