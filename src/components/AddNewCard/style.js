import styled from 'styled-components/macro';

export const SAddNewCard = styled.div`
  overflow: hidden;
  width: 600px;
  margin: 32px auto 16px auto;
  box-shadow: 0 1px 2px 0 rgb(60 64 67 / 30%), 0 2px 6px 2px rgb(60 64 67 / 15%);
  border-radius: 8px;
  background-color: #fff;
  border: 1px solid #fff;
`;

export const SAddNewCardBody = styled.div`
  overflow: scroll;
  max-height: 500px;
`;

export const SAddNewCardTitle = styled.div`
  width: 100%;
  padding: 16px;
  :empty:before {
    content: '標題';
    color: rgba(0, 0, 0, 0.702);
  }
  :focus:before {
    content: none;
  }
`;

export const SAddNewCardContent = styled.div`
  width: 100%;
  padding: 12px 16px;
  :empty:before {
    content: '新增記事...';
    color: rgba(0, 0, 0, 0.702);
    font-size: 0.875rem;
    font-weight: bold;
  }
  :focus:before {
    content: none;
  }
`;
