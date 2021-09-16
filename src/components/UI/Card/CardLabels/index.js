import Label from 'components/UI/Label';
import { SCardLabels } from 'components/UI/Card/CardLabels/style.js';

const CardLabels = ({ labels }) => {
  const showLabelsNum = 3;
  const numOfMoreLabel = labels.length - showLabelsNum - 1;
  return (
    <SCardLabels>
      {labels.slice(0, showLabelsNum).map((label, index) => (
        <Label key={index}>{label.name}</Label>
      ))}

      <Label>還有個 {numOfMoreLabel} 項目</Label>
    </SCardLabels>
  );
};

export default CardLabels;
