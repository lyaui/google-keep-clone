import styled from 'styled-components';

export const SHeader = styled.header`
  width: 100%;
  height: 64px;
  display: flex;
  align-items: center;
  padding: 8px;
  border-bottom: 1px solid var(--color-border);
  position: sticky;
  z-index: var(--zindex-header);
  box-shadow: var(--shadow-sm);
`;

export const SHeaderLogo = styled.img`
  height: 40px;
  cursor: pointer;
`;

export const SHeaderTitle = styled.div`
  width: 0px;
  min-width: 200px;
  padding: 0 8px;
  font-size: var(--text-xl);
  color: var(--color-text);
  opacity: 0.7;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;
