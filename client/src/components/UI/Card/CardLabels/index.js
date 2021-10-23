import Label from 'components/UI/Label';
import { SCardLabels } from 'components/UI/Card/CardLabels/style.js';

const CardLabels = ({ labels, id }) => {
  const showLabelsNum = 3;
  const numOfMoreLabel = labels.length - showLabelsNum;
  return (
    <SCardLabels>
      {labels.slice(0, showLabelsNum).map((label, index) => (
        <Label key={index} label={label} id={id} />
      ))}
      {numOfMoreLabel > 0 && <Label isShowMoreLabel={true} numOfMoreLabel={numOfMoreLabel} />}
    </SCardLabels>
  );
};

export default CardLabels;
