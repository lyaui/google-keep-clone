import styled from 'styled-components/macro';
import { SEditCardText } from 'components/EditCard/EditCardText/style.js';

export const SEditCardTitle = styled(SEditCardText)`
  #contentEdit {
    font-size: 2rem;
    font-weight: 500;
    :empty:before {
      content: '標題';
      color: hsla(var(--color-gray-500));
    }
  }
`;
