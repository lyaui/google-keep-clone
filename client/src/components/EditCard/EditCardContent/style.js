import styled from 'styled-components/macro';
import { SEditCardText } from 'components/EditCard/EditCardText/style.js';

export const SEditCardContent = styled(SEditCardText)`
  #contentEdit {
    :empty:before {
      content: '新增記事...';
      color: rgba(0, 0, 0, 0.702);
      font-size: 0.875rem;
      font-weight: bold;
    }
  }
`;
