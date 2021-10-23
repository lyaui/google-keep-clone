import { useUpdateMemo } from 'hooks/updateMemo-hook.js';
import * as Icon from 'components/UI/Icon/index.js';
import { SLabel, SLabelIcon, SLabelValue } from 'components/EditLabels/style.js';

const MemoLabel = ({ id, label, isSideMenu }) => {
  const { currentMemo, dispatchUpdateMemo } = useUpdateMemo(id);
  const isSelected = !!currentMemo.labels.find((item) => item._id === label._id);

  const updatedLabels = isSelected
    ? currentMemo.labels.filter((item) => item._id !== label._id)
    : [...currentMemo.labels, label];

  const toggleLabelHandler = (e) => {
    e.preventDefault();
    dispatchUpdateMemo({ labels: updatedLabels });
  };

  return (
    <SLabel key={label.id} isSideMenu={isSideMenu} onClick={toggleLabelHandler}>
      <SLabelIcon>{isSelected ? <Icon.CheckboxOutline /> : <Icon.EmptyCheckbox />}</SLabelIcon>
      <SLabelValue>{label.name}</SLabelValue>
    </SLabel>
  );
};

export default MemoLabel;
