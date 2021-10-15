import * as Icon from 'components/UI/Icon/index.js';
import { SLabel, SLabelIcon, SLabelValue } from 'components/EditLabels/style.js';

const MemoLabel = ({ label, isSideMenu }) => {
  return (
    <SLabel key={label.id} isSideMenu={isSideMenu}>
      <SLabelIcon>
        {label.isSelected ? <Icon.CheckboxOutline /> : <Icon.EmptyCheckbox />}
      </SLabelIcon>
      <SLabelValue>{label.name}</SLabelValue>
    </SLabel>
  );
};

export default MemoLabel;
