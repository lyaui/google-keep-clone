import styled from 'styled-components';

import { PALETTE_COLORS } from '@/constants/paletteColors';

export const SEditCardColor = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 140px;
  padding: 4px;
  border-radius: var(--rounded-md);
  background-color: var(--color-tooltip-bg);
  box-shadow: var(--shadow-sm);
`;

export const SColor = styled.div<{ color?: string; borderColor?: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 28px;
  height: 28px;
  margin: 4px 2px;
  border-radius: var(--rounded-full);
  background-color: hsl(
    ${(props) => props.color || PALETTE_COLORS.DEFAULT.LIGHT}
  );
  border: 2px solid
    hsl(${(props) => props.borderColor || 'var(--color-gray-700)'});
  cursor: pointer;
  &:hover {
    border: 2px solid var(--color-text);
  }
  svg {
    width: 20px;
    height: 20px;
    fill: var(--color-text);
    opacity: 0.4;
  }
`;
