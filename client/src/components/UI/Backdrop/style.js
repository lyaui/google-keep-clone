import styled from 'styled-components/macro';

export const SBackdrop = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: var(--zindex-backdrop);
  background-color: hsla(var(--color-black), 0.5);
  backdrop-filter: blur(1px);
`;
