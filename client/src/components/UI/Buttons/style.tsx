import styled from 'styled-components';

import { ButtonProps } from '@/components/UI/Buttons';

export const SButton = styled.button<ButtonProps>`
  text-align: center;
  background-color: ${(props) => props.color || 'transparent'};
  transition: var(--transition);
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  svg {
    width: 90%;
    height: 90%;
  }
`;

export const SButtonRound = styled(SButton)<ButtonProps>`
  width: ${(props) => `${props?.size || 40}px`};
  height: ${(props) => `${props?.size || 40}px`};
  border-radius: var(--rounded-full);
  margin: 4px;
  svg {
    fill: var(--color-icon);
  }
  &:hover {
    background-color: rgba(95, 99, 104, 0.157);
  }
`;

export const SButtonSquare = styled(SButton)<ButtonProps>`
  border-radius: var(--rounded-md);
  background-color: rgba(0, 0, 0, 0.7);
  svg {
    fill: hsl(var(--color-white));
  }
`;

export const SButtonRect = styled(SButton)<ButtonProps>`
  color: hsl(var(--color-white));
  font-size: var(--text-base);
  background-color: hsl(var(--color-blue));
  border-radius: var(--rounded-sm);
  height: 40px;
  margin: 18px 0;
`;
