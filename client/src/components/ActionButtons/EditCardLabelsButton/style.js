import styled from 'styled-components/macro';

export const SEditCardLabels = styled.div`
  padding: 12px;
  font-size: 14px;
  width: ${(props) => `${props.width}px` || '140px'};
  border-radius: 4px;
  background-color: #fff;
  box-shadow: rgb(0 0 0 / 12%) 0px 1px 2px 0px, rgb(0 0 0 / 12%) 0px 1px 1px 0px,
    rgb(0 0 0 / 12%) 0px 1px 4px 0px;
`;

export const SLabels = styled.div`
  margin: 0 -12px;
  height: 200px;
  overflow: scroll;
  cursor: pointer;
`;

export const SSearchLabel = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  svg {
    fill: gray;
  }
  input {
    font-size: 13px;
    color: gray;
    margin: 10px 0px;
    ::placeholder {
      opacity: 0.5;
    }
  }
`;

export const SLabel = styled.div`
  padding: 6px 12px;
  display: flex;
  align-items: start;
  cursor: pointer;
  :hover {
    background-color: rgba(0, 0, 0, 0.06);
  }
  svg {
    width: 20px;
    height: 20px;
    fill: gray;
  }
  span {
    margin-top: 2px;
    width: 100%;
    word-break: break-all;
    margin-left: 4px;
  }
`;
