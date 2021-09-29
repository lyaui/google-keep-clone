import styled from 'styled-components/macro';

export const SCustomTooltip = styled.div`
  width: ${(props) => `${props.width}px` || '140px'};
  padding: 4px;
  border-radius: 4px;
  background-color: #fff;
  box-shadow: rgb(0 0 0 / 12%) 0px 1px 2px 0px, rgb(0 0 0 / 12%) 0px 1px 1px 0px,
    rgb(0 0 0 / 12%) 0px 1px 4px 0px;
`;
