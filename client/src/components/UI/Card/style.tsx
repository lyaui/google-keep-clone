import styled from 'styled-components';
import { SCardPin } from '@/components/ActionButtons/EditCardPinButton/style';
import { PALETTE_COLORS } from '@/constants/paletteColors';

export const SCard = styled.div<{ color: string; gridRowSpan: number }>`
  position: relative;
  height: fit-content;
  grid-row-end: auto;
  background-color: ${(props) => `hsl(${props.color})`};
  border: 1px solid
    hsl(
      ${(props) => {
        if (props.color === PALETTE_COLORS.DEFAULT.LIGHT)
          return 'var(--color-gray-200)';
        if (props.color === PALETTE_COLORS.DEFAULT.DARK)
          return 'var(--color-gray-600)';
        return props.color;
      }}
    );
  visibility: ${(props) => (props.gridRowSpan === 0 ? 'hidden' : 'visible')};
  font-size: var(--text-base);
  border-radius: var(--rounded-lg);
  cursor: pointer;
  transition: var(--transition);
  &:hover {
    box-shadow: var(--shadow-md);
  }
  &:hover ${SCardPin} {
    opacity: 0.9;
  }
`;

export const SEmptyText = styled.p`
  margin: 0;
  margin-top: 8px;
  padding: 0 12px;
  font-size: var(--text-xl);
  color: var(--color-text);
  opacity: 0.5;
`;
