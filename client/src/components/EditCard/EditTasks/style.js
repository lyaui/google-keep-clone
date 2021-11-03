import styled from 'styled-components/macro';

export const SEditTasks = styled.div`
  font-size: var(--text-md);
  padding-bottom: 8px;
`;
export const SEditNewTask = styled.div`
  display: flex;
  align-items: center;
  margin-left: 14px;
  padding: 8px 0;
  color: var(--color-text);

  svg {
    width: 20px;
    height: 20px;
    fill: var(--color-icon);
    margin-right: 8px;
  }

  #contentEdit {
    font-size: var(--text-md);
    :empty:before {
      content: '清單項目';
      color: hsla(var(--color-gray-500));
    }
  }
`;
