import styled from 'styled-components';

import { SCardPin } from '@/components/ActionButtons/EditCardPinButton/style';
import { PALETTE_COLORS } from '@/constants/paletteColors';

export const SEditCard = styled.div<{ color?: string; eventTypes?: string }>`
  overflow: hidden;
  width: 600px;
  margin: 32px auto 16px auto;
  box-shadow: var(--shadow-md);
  border-radius: var(--rounded-lg);
  background-color: ${(props) =>
    `hsl(${props.color})` || `hsl(${PALETTE_COLORS.DEFAULT.LIGHT})`};
  border: 1px solid var(--color-border);
`;

export const SEditCardBody = styled.div`
  position: relative;
  overflow: scroll;
  max-height: 500px;
  padding: 0px 16px;
  :hover ${SCardPin} {
    opacity: 0.9;
  }
`;

export const SCardCreatedAt = styled.div`
  padding: 12px 0;
  color: var(--color-text);
  font-size: var(--text-sm);
  text-align: right;
`;
