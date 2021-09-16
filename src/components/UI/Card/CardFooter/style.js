import styled from 'styled-components/macro';
import { SCard } from 'components/UI/Card/style.js';

export const SCardFooter = styled.div`
  position: ${(props) => (props.isOnlyImages ? 'absolute' : 'unset')};
  z-index: 100;
  bottom: 0px;
  background-color: ${(props) => (props.isOnlyImages ? 'rgba(255, 255, 255, 0.8)' : 'unset')};
  width: 100%;
  display: flex;
  justify-content: space-between;
  opacity: 0;
  transition: all 0.3s;
  ${SCard} :hover & {
    opacity: 1;
  }
`;
