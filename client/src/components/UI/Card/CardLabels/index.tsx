import type { MouseEvent } from 'react';
import styled from 'styled-components';

import { useUpdateMemo } from '@/hooks/useUpdateMemo';
import type { MemoLabel } from '@/types';
import Label from '@/components/UI/Label';

export const SCardLabels = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 12px;
`;

interface CardLabelsProps {
  labels: MemoLabel[];
  id: string;
  limit?: number;
}

function CardLabels({ labels = [], id, limit = 3 }: CardLabelsProps) {
  const numOfMoreLabel = labels.length - limit;

  const { currentMemo, dispatchUpdateMemo } = useUpdateMemo(id);

  const removeLabelHandler =
    (labelId: string) => (event: MouseEvent<SVGElement>) => {
      event.stopPropagation();
      dispatchUpdateMemo({
        labels: currentMemo.labels.filter((item) => item._id !== labelId),
      });
    };

  return (
    <SCardLabels>
      {labels.slice(0, limit).map((_label, index) => (
        <Label key={index} onDelete={removeLabelHandler(_label._id)}>
          {_label.name}
        </Label>
      ))}
      {numOfMoreLabel > 0 && (
        <Label variant="square">{`還有 ${numOfMoreLabel} 個項目`}</Label>
      )}
    </SCardLabels>
  );
}

export default CardLabels;
