import { type ReactNode } from 'react';
import styled from 'styled-components';

export const SCardHeader = styled.div`
  padding: 12px;
  font-size: var(--text-md);
  font-weight: var(--font-bold);
`;

function CardHeader({ children }: { children: ReactNode }) {
  return <SCardHeader>{children}</SCardHeader>;
}

export default CardHeader;
