import { useEffect } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { useUpdateMemo } from 'hooks/updateMemo-hook.js';
import * as Icon from 'components/UI/Icon/index.js';
import { SLabel, SLabelIcon, SLabelValue } from 'components/EditLabels/style.js';

const MemoLabel = ({ id, label, isSideMenu }) => {
  const { params } = useRouteMatch();
  const { labelName } = params;

  const { currentMemo, dispatchUpdateMemo } = useUpdateMemo(id);
  const isSelected = !!currentMemo.labels.find((item) => item._id === label._id) || false;

  useEffect(() => {
    if (id) return;
    if (label.name !== labelName) return;
    dispatchUpdateMemo({ labels: [...currentMemo.labels, label] });
  }, []);

  const toggleLabelHandler = (e) => {
    e.preventDefault();
    const updatedLabels = isSelected
      ? currentMemo.labels.filter((item) => item._id !== label._id)
      : [...currentMemo.labels, label];
    dispatchUpdateMemo({ labels: updatedLabels });
  };

  return (
    <SLabel
      style={{ '--hover': !isSideMenu && 'var(--color-hover-bg)' }}
      onClick={toggleLabelHandler}
    >
      <SLabelIcon>{isSelected ? <Icon.CheckboxOutline /> : <Icon.EmptyCheckbox />}</SLabelIcon>
      <SLabelValue>{label.name}</SLabelValue>
    </SLabel>
  );
};

export default MemoLabel;
