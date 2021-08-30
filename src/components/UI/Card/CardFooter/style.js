import styled from 'styled-components/macro';
import { SCard } from 'components/UI/Card/style.js';

export const SCardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  opacity: 0;
  transition: all 0.3s;
  ${SCard} :hover & {
    opacity: 1;
  }
`;
