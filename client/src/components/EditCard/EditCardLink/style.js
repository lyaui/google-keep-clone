import styled from 'styled-components/macro';
import { SLinkItem } from 'components/UI/LinkItem/style.js';

export const SEditCardLink = styled(SLinkItem)`
  height: 56px;
  border-radius: 8px;
  margin: 16px 0;
  cursor: pointer;
  box-shadow: rgb(0 0 0 / 12%) 0px 1px 2px 0px, rgb(0 0 0 / 12%) 0px 1px 1px 0px,
    rgb(0 0 0 / 12%) 0px 1px 4px 0px;
`;

export const SEditCardLinkButton = styled.button`
  color: #202124;
  opacity: 0.6;
  font-size: 14px;
  font-weight: bold;
  background-color: transparent;
  padding: 8px;
  margin-bottom: 20px;
  transition: all 0.3s;
  &:hover {
    opacity: 1;
  }
`;
