import styled from 'styled-components/macro';

export const SCards = styled.section`
  display: grid;
  justify-content: center;
  grid-gap: var(--gap);
  grid-template-columns: var(--columns);
  grid-auto-rows: 0;
`;

export const SCardsTitle = styled.div`
  color: var(--color-text);
  margin-top: 60px;
  padding: var(--padding);
`;
