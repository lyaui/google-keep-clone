import styled from 'styled-components/macro';

export const SEditCardLabels = styled.div`
  width: var(--width);
  padding: 12px;
  font-size: var(--text-base);
  border-radius: var(--rounded-md);
  background-color: var(--color-tooltip-bg);
  box-shadow: var(--shadow-sm);
`;

export const SEditCardLabelTitle = styled.div`
  font-size: var(--text-md);
  letter-spacing: 1px;
`;

export const SLabels = styled.div`
  max-height: var(--height);
  margin: 0 -12px;
  overflow: scroll;
  cursor: pointer;
`;

export const SLabelInput = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 0;
  svg {
    fill: var(--color-icon);
  }
  input {
    color: var(--color-text);
    margin: 10px 0px;
    background-color: var(--color-transparent);
  }
`;

export const SLabel = styled.div`
  padding: 8px 12px;
  display: flex;
  align-items: start;

  :hover {
    background-color: var(--hover);
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
  font-weight: var(--font-bold);
  color: var(--color-text);
  background: var(--color-transparent);
  border-bottom: 1px solid hsl(var(--color-gray-400));
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
  }
`;
export const SLabelValue = styled.div`
  width: 100%;
  margin-right: 2px;
  margin-left: 12px;
  display: flex;
  flex-direction: column;
`;

export const SLabelErrMsg = styled.div`
  margin-top: 8px;
  color: var(--color-warning);
`;

export const SAddNewLabel = styled.div`
  padding: 4px 12px;
  margin: -12px;
  word-wrap: break-word;
  border-top: 1px solid hsl(var(--color-gray-400));
  background-color: hsla(var(--color-black), 0.08);
  cursor: pointer;
`;
