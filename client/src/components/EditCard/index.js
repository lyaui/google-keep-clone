import { useState } from 'react';
import EditCardImages from 'components/EditCard/EditCardImages';
import EditCardToolbar from 'components/EditCard/ECardToolbar';

import {
  SEditCard,
  SEditCardBody,
  SEditCardTitle,
  SEditCardContent,
} from 'components/EditCard/style.js';

const EditCard = () => {
  const [isTodoList, setIsTodoList] = useState(false);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [color, setColor] = useState('');

  return (
    <SEditCard>
      <SEditCardBody>
        {/* images */}
        <EditCardImages />
        {/* title */}
        <SEditCardTitle contentEditable='true' />
        {/* content */}
        <SEditCardContent contentEditable='true' />
        {/* tags */}
      </SEditCardBody>

      {/* toolbar */}
      <EditCardToolbar />
    </SEditCard>
  );
};

export default EditCard;
