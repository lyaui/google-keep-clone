import styled from 'styled-components';

export const SEditMemoText = styled.div`
  #contentEdit {
    width: 100%;
    padding: 8px 0px;
    white-space: pre-wrap;

    &:focus:before {
      content: none;
    }

    a {
      text-decoration: underline;
    }
  }
`;
