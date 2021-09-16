import Label from 'components/UI/Label';
import { SCardLabels } from 'components/UI/Card/CardLabels/style.js';

const CardLabels = ({ labels }) => {
  const showLabelsNum = 3;
  const numOfMoreLabel = labels.length - showLabelsNum;
  return (
    <SCardLabels>
      {labels.slice(0, 3).map((label) => (
        <Label key={label.id}>{label.name}</Label>
      ))}

      <Label>還有個 {numOfMoreLabel} 項目</Label>
    </SCardLabels>
  );
};

export default CardLabels;
