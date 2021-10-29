import styled from 'styled-components/macro';
import { SEditCardText } from 'components/EditCard/EditCardText/style.js';

export const SEditCardContent = styled(SEditCardText)`
  #contentEdit {
    font-size: 1.6rem;
    /* color: var(--color-text); */
    :empty:before {
      content: '新增記事...';
      color: hsl(var(--color-gray-600));
      font-size: 1.6rem;
      font-weight: bold;
    }
  }
`;
