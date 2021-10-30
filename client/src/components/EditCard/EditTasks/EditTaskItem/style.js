import styled from 'styled-components/macro';

export const SEditTaskItem = styled.div`
  display: flex;
  padding: 6px 0;
  line-height: 1.5em;
  background-color: hsl(var(--color));
  transition: all 0.3s;
  :hover [name='drag'] {
    opacity: 1;
  }
  :hover [name='delete'] {
    opacity: 1;
  }
`;

export const SEditTaskItemIcon = styled.div`
  display: flex;
  margin-left: var(--margin);
  cursor: pointer;
  svg {
    width: 20px;
    height: 20px;
    fill: var(--color-icon);
    &[name='drag'] {
      margin-top: -2px;
      width: 24px;
      height: 24px;
      opacity: 0;
      cursor: move;
    }
    &[name='delete'] {
      opacity: 0;
    }
  }
`;

export const SEditTaskItemText = styled.div`
  width: 100%;
  padding-right: 16px;
  margin-left: 10px;
  text-decoration: var(--text-decoration);
  color: var(--color);
  cursor: text;
  #contentEdit {
    width: 100%;
    word-break: break-all;
  }
`;
