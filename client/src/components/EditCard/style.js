import styled from 'styled-components/macro';
import { SCardPin } from 'components/ActionButtons/EditCardPinButton/style.js';

export const SEditCard = styled.div`
  overflow: hidden;
  width: 600px;
  margin: 32px auto 16px auto;
  box-shadow: var(--shadow-lg);
  border-radius: var(--rounded-lg);
  background-color: hsl(var(--color));
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
  font-size: 12px;
  text-align: right;
`;
