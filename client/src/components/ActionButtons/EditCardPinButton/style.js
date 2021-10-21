import styled from 'styled-components/macro';

export const SCardPin = styled.div`
  position: absolute;
  opacity: ${(props) => props.opacity || 1};
  right: 0;
  button {
    background-color: ${(props) => props.color || '#FFFFFF'};
  }
`;
