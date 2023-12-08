import styled from 'styled-components';
import { SCard } from '@/components/UI/Card/style.jsx';

export const SCardFooter = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  position: var(--position);
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
