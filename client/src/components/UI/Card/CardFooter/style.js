import styled from 'styled-components/macro';
import { SCard } from 'components/UI/Card/style.js';

export const SCardFooter = styled.div`
  position: ${(props) =>
    props.isOnlyImagesOrLinks || props.isOnlyImagesAndLinks ? 'absolute' : 'unset'};
  z-index: 10;
  bottom: ${(props) => (props.isOnlyImagesAndLinks ? '198px' : '0px')};
  background-color: ${(props) =>
    props.isOnlyImagesOrLinks || props.isOnlyImagesAndLinks ? 'rgba(250, 250, 250, 0.8)' : 'unset'};
  width: 100%;
  display: flex;
  justify-content: space-between;
  opacity: 0;
  transition: var(--transition);
  ${SCard} :hover & {
    opacity: 1;
  }
`;
