import type { MouseEvent } from 'react';
import styled from 'styled-components';

import { useUpdateMemo } from '@/hooks/useUpdateMemo';
import { useAppSelector } from '@/hooks/useReduxStore';
import Label from '@/components/UI/Label';

export const SEditMemoLabels = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 8px 0;
`;

const EditMemoLabels = ({ id }: { id?: string }) => {
  const { memo } = useAppSelector((state) => state.memos);
  const { labels } = memo;

  const { currentMemo, dispatchUpdateMemo } = useUpdateMemo(id);

  const removeLabelHandler =
    (labelId: string) => (event: MouseEvent<SVGElement>) => {
      event.stopPropagation();
      dispatchUpdateMemo({
        labels: currentMemo.labels.filter((item) => item._id !== labelId),
      });
    };

  return (
    <SEditMemoLabels>
      {labels.length > 0 &&
        labels.map((_label) => (
          <Label key={_label._id} onDelete={removeLabelHandler(_label._id)}>
            {_label.name}
          </Label>
        ))}
    </SEditMemoLabels>
  );
};

export default EditMemoLabels;
