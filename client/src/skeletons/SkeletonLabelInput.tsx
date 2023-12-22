import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

const SkeletonLabelInput = () => (
  <SkeletonTheme
    baseColor="var(--color-skeleton-bg)"
    highlightColor="var(--color-skeleton-highlight-bg)"
  >
    <Skeleton
      height={30}
      count={1}
      width={'calc(100% - 30px)'}
      style={{ margin: '0 15px' }}
    />
  </SkeletonTheme>
);

export default SkeletonLabelInput;
