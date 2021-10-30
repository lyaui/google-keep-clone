import styled from 'styled-components/macro';
import { SCardPin } from 'components/ActionButtons/EditCardPinButton/style.js';

export const SCard = styled.div`
  position: relative;
  height: fit-content;
  grid-row: span var(--rowSpan, 0);
  background-color: hsl(var(--color, --color-white));
  border: 1px solid hsl(var(--border-color));
  opacity: var(--opacity);
  font-size: 1.4rem;
  border-radius: var(--rounded-lg);
  cursor: pointer;
  transition: var(--transition);
  :hover {
    box-shadow: 0 1px 2px 0 rgb(60 64 67 / 30%), 0 1px 3px 1px rgb(60 64 67 / 15%);
  }
  :hover ${SCardPin} {
    opacity: 0.9;
  }
`;
