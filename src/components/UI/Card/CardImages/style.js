import styled from 'styled-components/macro';

export const SCardImages = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-auto-rows: ${(props) => (props.isOnlyImages ? '40px' : '50px')};
  grid-gap: 1px;
`;

const SCardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  padding: 0;
  margin: 0;
`;

export const SCardImage1 = styled(SCardImage)`
  &.img-0 {
    grid-column: 1/7;
    grid-row: 1/4;
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
    grid-row: 1/8;
  }
  &.img-1 {
    grid-column: 1/3;
    grid-row: 8/10;
  }
  &.img-2 {
    grid-column: 3/5;
    grid-row: 8/10;
  }
  &.img-3 {
    grid-column: 5/7;
    grid-row: 8/10;
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
