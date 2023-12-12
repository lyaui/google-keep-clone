import styled from 'styled-components';

import { useAppSelector } from '@/hooks/useReduxStore';
import Label from '@/components/UI/Label';

export const SCreateMemoLabels = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 8px 0;
`;

const CreateMemoLabels = () => {
  const { memo } = useAppSelector((state) => state.memos);
  const { labels } = memo;
  return (
    <SCreateMemoLabels>
      {labels.length > 0 &&
        labels.map((label, index) => <Label key={index} label={label} />)}
    </SCreateMemoLabels>
  );
};

export default CreateMemoLabels;
