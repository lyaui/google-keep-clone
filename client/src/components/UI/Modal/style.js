import styled from 'styled-components/macro';

export const SModalOverlay = styled.div`
  z-index: var(--zindex-model);
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 600px;
`;
