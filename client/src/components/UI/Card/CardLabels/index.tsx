import styled from 'styled-components';

import type { Label as LabelType } from '@/types';
import Label from '@/components/UI/Label';

export const SCardLabels = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 12px;
`;

interface CardLabelsProps {
  labels: LabelType[];
  id: string;
  limit?: number;
}

function CardLabels({ labels, id, limit = 3 }: CardLabelsProps) {
  const numOfMoreLabel = labels.length - limit;
  return (
    <SCardLabels>
      {labels.slice(0, limit).map((label, index) => (
        <Label key={index} label={label} id={id} />
      ))}
      {numOfMoreLabel > 0 && (
        <Label isShowMoreLabel={true} numOfMoreLabel={numOfMoreLabel} />
      )}
    </SCardLabels>
  );
}

export default CardLabels;
