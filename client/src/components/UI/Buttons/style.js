import styled from 'styled-components/macro';

export const SButton = styled.button`
  text-align: center;
  background-color: ${(props) => props.color || 'transparent'};
  transition: all 0.3s;
  svg {
    width: 90%;
    height: 90%;
  }
`;

export const SButtonRound = styled(SButton)`
  width: ${(props) => `${props.size}px` || '40px'};
  height: ${(props) => `${props.size}px` || '40px'};
  border-radius: 50%;
  margin: 4px;
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

export const SButtonRect = styled(SButton)`
  color: #fff;
  font-size: 14px;
  background-color: rgb(66, 133, 244);
  border-radius: 2px;
  height: 40px;
  margin: 18px 0;
`;

export const SButtonRectDisabled = styled(SButtonRect)`
  color: rgba(0, 0, 0, 0.2);
  background-color: #eeeeee;
  cursor: not-allowed;
  pointer-events: all !important;
`;
