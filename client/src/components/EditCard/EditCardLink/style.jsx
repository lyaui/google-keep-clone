import styled from 'styled-components';
import { SLinkItem } from '@/components/UI/LinkItem/style.jsx';

export const SEditCardLink = styled(SLinkItem)`
  height: 56px;
  margin: 16px 0;
  font-size: var(--text-base);
  border-radius: var(--rounded-lg);
  cursor: pointer;
  box-shadow: var(--shadow-sm);
  background-color: var(--color-link-bg);
`;

export const SEditCardLinkButton = styled.button`
  color: var(--color-text);
  opacity: 0.6;
  font-size: var(--text-base);
  font-weight: var(--font-bold);
  background-color: transparent;
  padding: 8px;
  margin-bottom: 16px;
  transition: var(--transition);
  &:hover {
    opacity: 1;
  }
`;
