import styled from 'styled-components/macro';
import { SEditCardText } from 'components/EditCard/EditCardText/style.js';

export const SEditCardTitle = styled(SEditCardText)`
  #contentEdit {
    font-size: 20px;
    font-weight: 500;
    :empty:before {
      content: '標題';
      color: rgba(0, 0, 0, 0.702);
    }
  }
`;
