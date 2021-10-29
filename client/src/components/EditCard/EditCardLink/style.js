import styled from 'styled-components/macro';
import { SLinkItem } from 'components/UI/LinkItem/style.js';

export const SEditCardLink = styled(SLinkItem)`
  height: 56px;
  margin: 16px 0;
  font-size: 1.4rem;
  border-radius: 8px;
  cursor: pointer;
  box-shadow: rgb(0 0 0 / 12%) 0px 1px 2px 0px, rgb(0 0 0 / 12%) 0px 1px 1px 0px,
    rgb(0 0 0 / 12%) 0px 1px 4px 0px;
  background-color: var(--color-link-bg);
`;

export const SEditCardLinkButton = styled.button`
  color: var(--color-text);
  opacity: 0.6;
  font-size: 1.4rem;
  font-weight: bold;
  background-color: transparent;
  padding: 8px;
  margin-bottom: 16px;
  transition: all 0.3s;
  &:hover {
    opacity: 1;
  }
`;
