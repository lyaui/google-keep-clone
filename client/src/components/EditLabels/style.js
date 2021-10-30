import styled from 'styled-components/macro';

export const SEditCardLabels = styled.div`
  z-index: 100;
  padding: 12px;
  font-size: 14px;
  width: ${(props) => `${props.width}px` || '200px'};
  border-radius: 4px;
  background-color: #fff;
  box-shadow: rgb(0 0 0 / 12%) 0px 1px 2px 0px, rgb(0 0 0 / 12%) 0px 1px 1px 0px,
    rgb(0 0 0 / 12%) 0px 1px 4px 0px;
`;

export const SEditCardLabelTitle = styled.div`
  font-size: 16px;
  letter-spacing: 1px;
`;

export const SLabels = styled.div`
  margin: 0 -12px;
  max-height: ${(props) => `${props.maxHeight}px` || '200px'};
  overflow: scroll;
  cursor: pointer;
`;

export const SSearchLabel = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 0;
  svg {
    fill: var(--color-icon);
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
  padding: 8px 12px;
  display: flex;
  align-items: start;
  cursor: ${(props) => (props.isSideMenu ? 'text' : 'pointer')};

  :hover {
    background-color: ${(props) => (props.isSideMenu ? 'unset' : 'rgba(0, 0, 0, 0.06)')};
  }
  :hover svg[name='label'] {
    display: none;
  }

  :hover svg[name='delete'] {
    display: block;
  }
  span {
    display: block;
    margin-top: 2px;
    width: 100%;
    word-break: break-all;
  }
`;

export const SLabelEditInput = styled.input`
  width: 100%;
  margin: 0 12px;
  padding: 2px 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`;

export const SLabelIcon = styled.div`
  svg[name='delete'] {
    display: none;
  }
  svg {
    width: 20px;
    height: 20px;
    fill: var(--color-icon);
    cursor: pointer;
    :hover {
      fill: #202124;
    }
  }
`;
export const SLabelValue = styled.div`
  width: 100%;
  margin-top: ${(props) => (props.isSideMenu ? '0' : '2px')};
  margin-right: 2px;
  margin-left: 12px;
  display: flex;
  flex-direction: column;
`;

export const SLabelErrMsg = styled.div`
  margin-top: 8px;
  color: red;
`;

export const SAddNewLabel = styled.div`
  padding: 4px 12px;
  margin: -12px;
  word-wrap: break-word;
  line-height: 1.5em;
  border-top: 1px solid #cccccc;
  background-color: rgba(0, 0, 0, 0.08);
  cursor: pointer;
`;
