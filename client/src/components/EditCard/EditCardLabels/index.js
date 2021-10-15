import { useSelector } from 'react-redux';
import Label from 'components/UI/Label';
import { SEditCardLabels } from 'components/EditCard/EditCardLabels/style.js';

const EditCardLabels = () => {
  const { memo } = useSelector((state) => state.memos);
  const { labels } = memo;
  return (
    <SEditCardLabels>
      {labels.length > 0 && labels.map((label, index) => <Label key={index} label={label} />)}
    </SEditCardLabels>
  );
};

export default EditCardLabels;
