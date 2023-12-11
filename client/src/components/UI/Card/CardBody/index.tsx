import { type ReactNode } from 'react';
import styled from 'styled-components';

export const SCardContent = styled.div`
  padding: 12px;
`;

function CardContent({ children }: { children: ReactNode }) {
  return <SCardContent>{children}</SCardContent>;
}

export default CardContent;
