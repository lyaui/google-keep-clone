import styled from 'styled-components/macro';

export const SCards = styled.section`
  display: grid;
  grid-gap: 8px;
  grid-template-columns: repeat(auto-fill, minmax(210px, 1fr));
  grid-auto-rows: 0;
  padding: 20px 60px;
`;
