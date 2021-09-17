import styled from 'styled-components/macro';

export const SButton = styled.button`
  width: ${(props) => `${props.size}px` || '40px'};
  height: ${(props) => `${props.size}px` || '40px'};
  margin: 4px;
  background-color: transparent;
  transition: all 0.3s;
  svg {
    width: 90%;
    height: 90%;
  }
`;

export const SButtonRound = styled(SButton)`
  border-radius: 50%;
  svg {
    fill: #202124;
    opacity: 0.6;
  }
  :hover {
    background-color: rgba(95, 99, 104, 0.157);
  }
`;

export const SButtonSquare = styled(SButton)`
  border-radius: 5px;
  background-color: rgba(0, 0, 0, 0.7);
  svg {
    fill: #fff;
  }
`;
