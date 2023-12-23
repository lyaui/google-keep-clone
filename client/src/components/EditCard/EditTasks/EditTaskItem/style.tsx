import styled from 'styled-components';

export const SEditTaskItem = styled.div<{ color: string }>`
  display: flex;
  align-items: start;
  padding: 6px 0;
  line-height: 1.5em;
  background-color: ${(props) => `hsl(${props.color})`};
  transition: var(--transition);
  &:hover [name='drag'] {
    opacity: 1;
  }
  &:hover [name='delete'] {
    opacity: 1;
  }
`;

export const SEditTaskItemIcon = styled.div`
  display: flex;
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

export const SEditTaskItemText = styled.div<{ isComplete: boolean }>`
  width: 100%;
  padding-right: 16px;
  margin-left: 10px;
  text-decoration: ${(props) => (props.isComplete ? 'line-through' : 'unset')};
  opacity: ${(props) => (props.isComplete ? 0.7 : 1)};
  cursor: text;
  #contentEdit {
    width: 100%;
    word-break: break-all;
  }
`;
