import { useDispatch, useSelector } from 'react-redux';
import { memosActions } from 'store/memosSlice';
import * as Icon from 'components/UI/Icon/index.js';
import { SLabel, SLabelIcon, SLabelValue } from 'components/EditLabels/style.js';

const MemoLabel = ({ label, isSideMenu }) => {
  const dispatch = useDispatch();
  const { memo } = useSelector((state) => state.memos);
  const isSelected = !!memo.labels.find((item) => item._id === label._id);
  const toggleLabelHandler = (e) => {
    e.preventDefault();
    isSelected
      ? dispatch(memosActions.removeMemoLabel(label._id))
      : dispatch(memosActions.addMemoLabel(label));
  };

  return (
    <SLabel key={label.id} isSideMenu={isSideMenu} onClick={toggleLabelHandler}>
      <SLabelIcon>{isSelected ? <Icon.CheckboxOutline /> : <Icon.EmptyCheckbox />}</SLabelIcon>
      <SLabelValue>{label.name}</SLabelValue>
    </SLabel>
  );
};

export default MemoLabel;
