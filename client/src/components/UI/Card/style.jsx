import styled from 'styled-components';
import { SCardPin } from '@/components/ActionButtons/EditCardPinButton/style';

export const SCard = styled.div`
  position: relative;
  height: fit-content;
  grid-row: span var(--rowSpan, 0);
  background-color: hsl(var(--color, --color-white));
  border: 1px solid hsl(var(--border-color));
  opacity: var(--opacity);
  font-size: var(--text-base);
  border-radius: var(--rounded-lg);
  cursor: pointer;
  transition: var(--transition);
  &:hover {
    box-shadow: var(--shadow-md);
  }
  &:hover ${SCardPin} {
    opacity: 0.9;
  }
`;

export const SEmptyText = styled.p`
  margin: 0;
  margin-top: 8px;
  padding: 0 12px;
  font-size: var(--text-xl);
  color: var(--color-text);
  opacity: 0.5;
`;
