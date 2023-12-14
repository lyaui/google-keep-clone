import styled from 'styled-components';

import { SEditMemoText } from '@/components/EditCard/EditMemoText/style';

export const SEditMemoContent = styled(SEditMemoText)`
  #contentEdit {
    font-size: var(--text-md);
    &:empty:before {
      content: '新增記事...';
      color: hsl(var(--color-gray-500));
      font-size: var(--text-md);
      font-weight: var(--font-bold);
    }
  }
`;
