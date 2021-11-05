import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import styled from 'styled-components/macro';
import { useUI } from 'contexts/UI-context';

const SSkeletonCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 100px;
  width: 100%;
`;

const SSkeletonCard = styled.div`
  padding: 12px 16px;
  margin-bottom: 20px;
`;

const SkeletonCards = () => {
  const {
    UIState: { isFixedMenu },
  } = useUI();
  const cardNum = isFixedMenu ? 4 : 5;
  return (
    <SkeletonTheme
      baseColor='var(--color-skeleton-bg)'
      highlightColor='var(--color-skeleton-highlight-bg)'
    >
      <SSkeletonCards>
        {Array.from(Array(cardNum).keys()).map((index) => (
          <SSkeletonCard key={index}>
            <Skeleton style={{ marginBottom: '20px' }} height={30} width={220} />
            <Skeleton style={{ marginBottom: '4px' }} height={16} width={220} count={15} />
          </SSkeletonCard>
        ))}
      </SSkeletonCards>
    </SkeletonTheme>
  );
};

export default SkeletonCards;
