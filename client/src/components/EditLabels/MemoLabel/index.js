import { useDispatch, useSelector } from 'react-redux';
import { memosActions } from 'store/memosSlice';
import { updateMemo } from 'store/memosSlice/memos-action.js';
import * as Icon from 'components/UI/Icon/index.js';
import { SLabel, SLabelIcon, SLabelValue } from 'components/EditLabels/style.js';

const MemoLabel = ({ id, label, isSideMenu }) => {
  const dispatch = useDispatch();
  const { memo, memos, isEditingNewMemo, isLoading } = useSelector((state) => state.memos);
  const currentMemo = memos.find((memo) => memo._id === id) || memo;
  const isSelected = !!currentMemo.labels.find((item) => item._id === label._id);

  const toggleLabelHandler = (e) => {
    e.preventDefault();
    if (isLoading) return;

    // add or remove label
    const updatedLabels = isSelected
      ? currentMemo.labels.filter((item) => item._id !== label._id)
      : [...currentMemo.labels, label];

    isEditingNewMemo
      ? dispatch(memosActions.updateMemo({ labels: updatedLabels }))
      : dispatch(updateMemo({ memoId: id, payload: { labels: updatedLabels } }));
  };

  return (
    <SLabel key={label.id} isSideMenu={isSideMenu} onClick={toggleLabelHandler}>
      <SLabelIcon>{isSelected ? <Icon.CheckboxOutline /> : <Icon.EmptyCheckbox />}</SLabelIcon>
      <SLabelValue>{label.name}</SLabelValue>
    </SLabel>
  );
};

export default MemoLabel;
