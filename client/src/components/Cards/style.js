import styled from 'styled-components/macro';
import { VIEW_MODE } from 'constants/UI.js';

export const SCards = styled.section`
  display: grid;
  grid-gap: ${(props) => (props.viewMode === VIEW_MODE.GRID ? '12px' : '20px')};
  grid-template-columns: ${(props) =>
    props.viewMode === VIEW_MODE.GRID ? 'repeat(auto-fill, minmax(230px, 1fr))' : '600px'};
  justify-content: center;
  grid-auto-rows: 0;
  padding: ${(props) => (props.isFixedMenu ? '20px 80px' : '20px 80px 20px 100px')};
`;

export const SCardsTitle = styled.div`
  color: var(--color-text);
  margin-top: 60px;
  padding: ${(props) => (props.isFixedMenu ? '0px 80px' : '0px 80px 0px 100px')};
`;
