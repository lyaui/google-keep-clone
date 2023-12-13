import { useEffect } from 'react';
import type { MouseEvent } from 'react';
import { useParams } from 'react-router-dom';
import { useUpdateMemo } from '@/hooks/useUpdateMemo';

import { MemoLabel } from '@/types';
import * as Icon from '@/components/UI/Icon/index';
import { SLabel, SLabelIcon, SLabelValue } from '@/components/EditLabels/style';

interface LabelCheckboxProps {
  id?: string;
  label: MemoLabel;
}

function LabelCheckbox({ id, label }: LabelCheckboxProps) {
  const { labelName } = useParams();

  const {
    currentMemo: { labels },
    dispatchUpdateMemo,
  } = useUpdateMemo(id);
  const isSelected = !!labels.find((item) => item._id === label._id) || false;

  useEffect(() => {
    if (id) return;
    if (label.name !== labelName) return;
    if (labels.find((item) => item.name === label.name)) return;
    dispatchUpdateMemo({ labels: [...labels, label] });
  }, [id, label, labelName, dispatchUpdateMemo, labels]);

  const toggleLabelHandler = (event: MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    const updatedLabels = isSelected
      ? labels.filter((item) => item._id !== label._id)
      : [...labels, label];
    dispatchUpdateMemo({ labels: updatedLabels });
  };

  return (
    <SLabel onClick={toggleLabelHandler}>
      <SLabelIcon>
        {isSelected ? <Icon.CheckboxOutline /> : <Icon.EmptyCheckbox />}
      </SLabelIcon>
      <SLabelValue>{label.name}</SLabelValue>
    </SLabel>
  );
}

export default LabelCheckbox;
