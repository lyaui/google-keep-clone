import styled from 'styled-components';

export const SContainer = styled.div`
  display: flex;
  height: calc(100vh - 64px);
  main {
    width: 100%;
    overflow: scroll;
    padding: var(--padding);
  }
`;
