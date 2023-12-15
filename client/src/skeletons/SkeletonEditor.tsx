import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import styled from 'styled-components';

const SSkeletonEditor = styled.div`
  max-width: 600px;
  margin: auto;
  margin-top: 32px;
`;

const SkeletonEditor = () => {
  return (
    <SkeletonTheme
      baseColor="var(--color-skeleton-bg)"
      highlightColor="var(--color-skeleton-highlight-bg)"
    >
      <SSkeletonEditor>
        <Skeleton height={40} borderRadius={8} />
      </SSkeletonEditor>
    </SkeletonTheme>
  );
};

export default SkeletonEditor;
