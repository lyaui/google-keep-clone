import styled from 'styled-components/macro';

export const SCardLinks = styled.div`
  background-color: var(--color-link-bg);
  border-radius: var(--rounded);
  overflow: hidden;
`;

export const SCardLink = styled.div`
  height: var(--height);
  border-top: var(--border);
`;

export const SCardLinkMore = styled.div`
  padding: 8px 12px;
  border-top: 1px solid var(--color-link-border);
  color: var(--color-text);
  font-size: 1.2rem;
  font-weight: var(--font-bold);
  letter-spacing: 1px;
`;
