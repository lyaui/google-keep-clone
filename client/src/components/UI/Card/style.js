import styled from 'styled-components/macro';
import { SCardPin } from 'components/ActionButtons/EditCardPinButton/style.js';

export const SCard = styled.div`
  opacity: ${(props) => (props.showEditModal ? 0 : 1)};
  position: relative;
  height: fit-content;
  background-color: ${(props) => props.color || '#FFFFFF'};
  border: 1px solid ${(props) => (props.color === '#fff' ? '#e0e0e0' : props.color)};
  border-radius: 8px;
  cursor: pointer;
  grid-row: ${(props) => `span ${props.gridRowSpan}`};
  transition: all 0.1s;
  :hover {
    box-shadow: 0px 0px 3px 1px rgba(0, 0, 0, 0.1);
  }
  :hover ${SCardPin} {
    opacity: 0.9;
  }
`;
