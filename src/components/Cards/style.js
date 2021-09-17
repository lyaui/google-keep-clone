import styled from 'styled-components/macro';
import { VIEW_MODE } from 'constants/UI.js';

export const SCards = styled.section`
  display: grid;
  grid-gap: ${(props) => (props.viewMode === VIEW_MODE.GRID ? '8px' : '20px')};
  grid-template-columns: ${(props) =>
    props.viewMode === VIEW_MODE.GRID ? 'repeat(auto-fill, minmax(210px, 1fr))' : '600px'};
  justify-content: center;
  grid-auto-rows: 0;
  padding: 20px 60px;
`;
