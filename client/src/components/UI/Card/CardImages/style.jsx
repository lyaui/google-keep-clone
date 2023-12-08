import styled from 'styled-components';
import { VIEW_MODE } from '@/constants/UI.js';

export const SCardImages = styled.div`
  display: grid;
  border-radius: ${(props) => (props.noCardBody ? '8px' : '8px 8px 0 0')};
  overflow: hidden;
  grid-template-columns: repeat(6, 1fr);
  grid-auto-rows: ${(props) =>
    props.isEditMode || props.viewMode === VIEW_MODE.LIST ? '60px' : '40px'};
  grid-gap: ${(props) =>
    props.isEditMode || props.viewMode === VIEW_MODE.LIST ? '3px' : '1px'};
`;

const SCardImage = styled.div`
  position: relative;
  cursor: pointer;
  :hover button {
    opacity: 1;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  button {
    position: absolute;
    bottom: 0;
    right: 0;
    opacity: 0;
  }
`;

export const SCardImage1 = styled(SCardImage)`
  &.img-0 {
    grid-column: 1/7;
    grid-row: 1/5;
  }
`;

export const SCardImage2 = styled(SCardImage)`
  &.img-0 {
    grid-column: 1/4;
    grid-row: 1/4;
  }
  &.img-1 {
    grid-column: 4/7;
    grid-row: 1/4;
  }
`;

export const SCardImage3 = styled(SCardImage)`
  &.img-0 {
    grid-column: 1/3;
    grid-row: 1/3;
  }
  &.img-1 {
    grid-column: 3/5;
    grid-row: 1/3;
  }
  &.img-2 {
    grid-column: 5/7;
    grid-row: 1/3;
  }
`;

export const SCardImage4 = styled(SCardImage)`
  &.img-0 {
    grid-column: 1/7;
    grid-row: 1/7;
  }
  &.img-1 {
    grid-column: 1/3;
    grid-row: 7/9;
  }
  &.img-2 {
    grid-column: 3/5;
    grid-row: 7/9;
  }
  &.img-3 {
    grid-column: 5/7;
    grid-row: 7/9;
  }
`;

export const SCardImage5 = styled(SCardImage)`
  &.img-0 {
    grid-column: 1/4;
    grid-row: 1/4;
  }
  &.img-1 {
    grid-column: 4/7;
    grid-row: 1/4;
  }
  &.img-2 {
    grid-column: 1/3;
    grid-row: 4/6;
  }
  &.img-3 {
    grid-column: 3/5;
    grid-row: 4/6;
  }
  &.img-4 {
    grid-column: 5/7;
    grid-row: 4/6;
  }
`;

export const SCardImage6 = styled(SCardImage)`
  &.img-0 {
    grid-column: 1/3;
    grid-row: 1/3;
  }
  &.img-1 {
    grid-column: 3/5;
    grid-row: 1/3;
  }
  &.img-2 {
    grid-column: 5/7;
    grid-row: 1/3;
  }
  &.img-3 {
    grid-column: 1/3;
    grid-row: 3/5;
  }
  &.img-4 {
    grid-column: 3/5;
    grid-row: 3/5;
  }
  &.img-5 {
    grid-column: 5/7;
    grid-row: 3/5;
  }
`;
