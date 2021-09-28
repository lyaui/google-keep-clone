import Label from 'components/UI/Label';
import { SEditCardLabels } from 'components/EditCard/EditCardLabels/style.js';

const EditCardLabels = () => {
  const labels = [
    { labelId: 'test', name: 'moremoremoremoremoremoremoremoremoremoremoremoremoremoremore' },
    { labelId: 'l1', name: 'cyan' },
    { labelId: 'l2', name: 'teal' },
    { labelId: 'l3', name: 'magenta' },
    { labelId: 'l4', name: 'teal' },
    { labelId: 'l5', name: 'coral' },
    { labelId: 'l6', name: 'salmon' },
    { labelId: 'l7', name: 'olive' },
    { labelId: 'l8', name: 'aqua' },
    { labelId: 'l9', name: 'coral' },
  ];
  return (
    <SEditCardLabels>
      {labels.map((label, index) => (
        <Label key={index}>{label.name}</Label>
      ))}
    </SEditCardLabels>
  );
};

export default EditCardLabels;
