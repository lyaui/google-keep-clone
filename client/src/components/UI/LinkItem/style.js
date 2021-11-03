import styled from 'styled-components/macro';

export const SLinkItem = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const SLinkItemImg = styled.img`
  width: var(--width);
  object-fit: cover;
`;

export const SLinkItemInfo = styled.div`
  width: var(--width);
  padding: 8px 0 8px 8px;
  margin: auto;
`;

export const SLinkItemTitle = styled.div`
  color: var(--color-text);
  font-weight: var(--font-bold);
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const SLinkItemUrl = styled.span`
  color: var(--color-link-url);
  font-size: var(--text-sm);
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;
