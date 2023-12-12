import styled from 'styled-components';

import { VIEW_MODE } from '@/constants/UI';

interface SCardsProps {
  layout?: keyof typeof VIEW_MODE;
  isFixedMenu?: boolean;
}

export const SCards = styled.section<SCardsProps>`
  display: grid;
  justify-content: center;
  grid-gap: ${(props) => (props?.layout === VIEW_MODE.GRID ? '12px' : '20px')};
  grid-template-columns: ${(props) =>
    props?.layout === VIEW_MODE.GRID
      ? 'repeat(auto-fill, minmax(230px, 1fr))'
      : 'minmax(230px, 600px)'};
  padding: ${(props) => (props?.isFixedMenu ? '20 80' : '20 80 20 100')};
  grid-auto-rows: 0;
`;

export const SCardsTitle = styled.div<Pick<SCardsProps, 'layout'>>`
  display: grid;
  justify-content: ${(props) => props.layout === VIEW_MODE.LIST && 'center'};
  color: var(--color-text);
  margin-top: 60px;
  padding: 20px 12px;
`;
