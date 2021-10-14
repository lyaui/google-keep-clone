import * as Icon from 'components/UI/Icon/index.js';
import { SLabel, SLabelIcon } from 'components/EditLabels/style.js';

const MemoLabel = ({ label, isSideMenu }) => {
  return (
    <SLabel key={label.id} isSideMenu={isSideMenu}>
      <SLabelIcon>
        {label.isSelected ? <Icon.CheckboxOutline /> : <Icon.EmptyCheckbox />}
      </SLabelIcon>
      <span>{label.name}</span>
    </SLabel>
  );
};

export default MemoLabel;
