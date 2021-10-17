import styled from 'styled-components/macro';

export const SEditTaskItem = styled.div`
  display: flex;
  padding: 6px 0;
  line-height: 1.5em;
  background-color: ${(props) => props.color || '#fff'};
  :hover [name='drag'] {
    opacity: 1;
  }
  :hover [name='delete'] {
    opacity: 1;
  }
`;

export const SEditTaskItemIcon = styled.div`
  display: flex;
  margin-left: -10px;
  cursor: pointer;
  svg {
    width: 20px;
    height: 20px;
    fill: rgba(0, 0, 0, 0.6);
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
  margin-top: -3px;
  text-decoration: ${(props) => (props.isCompleted ? 'line-through' : 'unset')};
  color: ${(props) => (props.isCompleted ? 'rgba(0, 0, 0, 0.6)' : 'currentColor')};
  cursor: text;
  #contentEdit {
    width: 100%;
    word-break: break-all;
  }
`;
