import styled from 'styled-components/macro';
import { SCard } from 'components/UI/Card/style.js';

export const SCardFooter = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  position: var(--position);
  z-index: 10;
  bottom: var(--bottom);
  background-color: var(--color);
  overflow: hidden;
  border-radius: 0 0 var(--rounded-lg) var(--rounded-lg);
  opacity: 0;
  transition: var(--transition);

  ${SCard} :hover & {
    opacity: 1;
  }
`;
