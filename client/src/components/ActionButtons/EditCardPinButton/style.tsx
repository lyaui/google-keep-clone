import styled from 'styled-components';

export const SCardPin = styled.div<{ isNewMemo?: boolean }>`
  position: absolute;
  z-index: var(--zindex-pin-button);
  opacity: ${(props) => (props.isNewMemo ? 0 : 1)};
  top: 0;
  right: 0;
`;
