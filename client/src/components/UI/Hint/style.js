import styled from 'styled-components/macro';

export const SHint = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
  height: calc(100vh - 64px - 80px);
`;

export const SHintIcon = styled.div`
  svg {
    width: 120px;
    height: 120px;
    opacity: 0.2;
  }
`;

export const SHintText = styled.div`
  font-size: var(--text-xl);
  opacity: 0.6;
`;
