import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import styled from 'styled-components';

export const SSkeletonMenuItem = styled.li`
  display: flex;
  align-items: center;
  margin-left: 20px;
  padding: 8px 0;
`;

const SkeletonMenuItem = ({ isFixedMenu }) => {
  return (
    <SkeletonTheme
      baseColor='var(--color-skeleton-bg)'
      highlightColor='var(--color-skeleton-highlight-bg)'
    >
      <SSkeletonMenuItem>
        <Skeleton
          style={{ marginRight: '10px' }}
          circle
          height={30}
          width={30}
        />
        {isFixedMenu && <Skeleton height={20} count={1} width={160} />}
      </SSkeletonMenuItem>
    </SkeletonTheme>
  );
};

export default SkeletonMenuItem;
