import styled from 'styled-components';

export const SCardLinks = styled.div<{
  isOnlyLinks?: boolean;
}>`
  background-color: var(--color-link-bg);
  border-radius: ${(props) =>
    props.isOnlyLinks
      ? 'var(--rounded-lg)'
      : '0 0px var(--rounded-lg) var(--rounded-lg)'};
  overflow: hidden;
`;

export const SCardLink = styled.div<{ isOnlyLinks?: boolean; index?: number }>`
  height: ${(props) => (props.isOnlyLinks ? 88 : 56)};
  border-top: ${(props) =>
    !props.index && props.isOnlyLinks
      ? 'unset'
      : '1px solid var(--color-link-border)'};
`;

export const SCardLinkMore = styled.div`
  padding: 8px 12px;
  border-top: 1px solid var(--color-link-border);
  color: var(--color-text);
  font-size: var(--text-sm);
  font-weight: var(--font-bold);
  letter-spacing: 1px;
`;
