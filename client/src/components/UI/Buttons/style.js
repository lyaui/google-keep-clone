import styled from 'styled-components/macro';

export const SButton = styled.button`
  text-align: center;
  background-color: ${(props) => props.color || 'transparent'};
  transition: var(--transition);
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  svg {
    width: 90%;
    height: 90%;
  }
`;

export const SButtonRound = styled(SButton)`
  width: ${(props) => `${props.size}px` || '40px'};
  height: ${(props) => `${props.size}px` || '40px'};
  border-radius: var(--rounded-full);
  margin: 4px;
  svg {
    fill: var(--color-icon);
  }
  :hover {
    background-color: rgba(95, 99, 104, 0.157);
  }
`;

export const SButtonSquare = styled(SButton)`
  border-radius: var(--rounded-md);
  background-color: rgba(0, 0, 0, 0.7);
  svg {
    fill: hsl(var(--color-white));
  }
`;

export const SButtonRect = styled(SButton)`
  color: hsl(var(--color-white));
  font-size: 14px;
  background-color: hsl(var(--color-blue));
  border-radius: var(--rounded-sm);
  height: 40px;
  margin: 18px 0;
`;

export const SButtonRectDisabled = styled(SButtonRect)`
  color: rgba(0, 0, 0, 0.2);
  background-color: #eeeeee;
  cursor: not-allowed;
  pointer-events: all !important;
`;
