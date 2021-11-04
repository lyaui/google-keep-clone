import styled from 'styled-components/macro';

export const SHint = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20vh;
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
