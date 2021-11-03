import styled from 'styled-components/macro';
import { SEditCardText } from 'components/EditCard/EditCardText/style.js';

export const SEditCardContent = styled(SEditCardText)`
  #contentEdit {
    font-size: var(--text-md);
    /* color: var(--color-text); */
    :empty:before {
      content: '新增記事...';
      color: hsl(var(--color-gray-500));
      font-size: var(--text-md);
      font-weight: var(--font-bold);
    }
  }
`;
