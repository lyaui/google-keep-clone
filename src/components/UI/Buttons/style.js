import styled from 'styled-components/macro';

export const SButtonRound = styled.button`
  width: ${(props) => `${props.size}px` || '40px'};
  height: ${(props) => `${props.size}px` || '40px'};
  margin: 4px;
  border-radius: 50%;
  background-color: transparent;
  transition: all 0.3s;
  svg {
    width: 24px;
    height: 24px;
    fill: #5f6368;
  }
  :hover {
    background-color: #dee1e2;
  }
`;
