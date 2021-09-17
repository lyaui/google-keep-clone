import styled from 'styled-components/macro';

export const SModalOverlay = styled.div`
  z-index: 100;
  position: absolute;
  top: 45%;
  left: 50%;
  max-height: 500px;
  overflow: scroll;
  transform: translate(-50%, -50%);
  width: 600px;
  background-color: ${(props) => props.color || '#FFFFFF'};
  border: 1px solid ${(props) => props.color || '#e0e0e0'};
  border-radius: 8px;
`;
