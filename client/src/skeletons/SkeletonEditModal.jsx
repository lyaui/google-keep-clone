import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import styled from 'styled-components';

const SSkeletonEditModal = styled.div`
  width: 600px;
  padding: 12px;
  background-color: var(--color-bg);
  border-radius: var(--rounded-lg);
`;

const SSkeletonEditBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  div {
    display: flex;
    > span {
      padding: 4px;
    }
  }
`;

const SkeletonEditModal = () => {
  return (
    <SkeletonTheme
      baseColor='var(--color-skeleton-bg)'
      highlightColor='var(--color-skeleton-highlight-bg)'
    >
      <SSkeletonEditModal>
        <Skeleton style={{ marginBottom: '20px' }} height={30} width={200} />
        <Skeleton style={{ marginBottom: '4px' }} height={16} count={10} />

        <SSkeletonEditBar>
          <div>
            {Array.from(Array(5).keys()).map((index) => (
              <Skeleton key={index} circle height={30} width={30} />
            ))}
          </div>

          <Skeleton
            style={{ display: 'inline-block', marginLeft: 'auto' }}
            height={28}
            width={90}
          />
        </SSkeletonEditBar>
      </SSkeletonEditModal>
    </SkeletonTheme>
  );
};

export default SkeletonEditModal;
