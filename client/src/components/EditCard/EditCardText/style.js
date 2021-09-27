import styled from 'styled-components/macro';

export const SEditCardText = styled.div`
  #contentEdit {
    width: 100%;
    line-height: 1.5em;
    padding: 8px 16px;
    white-space: pre-wrap;

    :focus:before {
      content: none;
    }

    a {
      color: mediumblue;
      text-decoration: underline;
    }
  }
`;
