import styled from 'styled-components';
import { SEditCardText } from '@/components/EditCard/EditCardText/style.jsx';

export const SEditCardTitle = styled(SEditCardText)`
  #contentEdit {
    font-size: var(--text-lg);
    :empty:before {
      content: '標題';
      color: hsla(var(--color-gray-500));
    }
  }
`;
