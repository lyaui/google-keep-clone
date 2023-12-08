import styled from 'styled-components';

export const SCards = styled.section`
  display: grid;
  justify-content: center;
  grid-gap: var(--gap);
  grid-template-columns: var(--columns);
  grid-auto-rows: 0;
`;

export const SCardsTitle = styled.div`
  display: grid;
  justify-content: var(--justify-content);
  color: var(--color-text);
  margin-top: 60px;
  padding: 20px 12px;
`;
