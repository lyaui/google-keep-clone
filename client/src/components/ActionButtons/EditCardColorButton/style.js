import styled from 'styled-components/macro';
import { PALETTE_COLORS } from 'constants/paletteColors.js';
import { SCustomTooltip } from 'components/UI/CustomTooltip/style.js';

export const SEditCardColor = styled(SCustomTooltip)`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const SColor = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 28px;
  height: 28px;
  margin: 4px 2px;
  border-radius: 50%;
  background-color: ${(props) => props.color || PALETTE_COLORS.DEFAULT};
  border: 2px solid
    ${(props) => (props.color === '#fff' ? '#e0e0e0' : props.color || PALETTE_COLORS.DEFAULT)};
  cursor: pointer;
  :hover {
    border: 2px solid #000;
  }
  svg {
    width: 20px;
    height: 20px;
    fill: #202124;
    opacity: 0.4;
  }
`;
