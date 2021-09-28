import styled from 'styled-components/macro';
import { PALETTE_COLORS } from 'constants/paletteColors.js';

export const SEditCardColor = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 140px;
  padding: 4px;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: rgb(0 0 0 / 12%) 0px 1px 2px 0px, rgb(0 0 0 / 12%) 0px 1px 1px 0px,
    rgb(0 0 0 / 12%) 0px 1px 4px 0px;
`;

export const SEditCardColorUnit = styled.div`
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
