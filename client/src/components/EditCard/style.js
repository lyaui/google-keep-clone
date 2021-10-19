import styled from 'styled-components/macro';

export const SEditCard = styled.div`
  overflow: hidden;
  width: 600px;
  margin: 32px auto 16px auto;
  box-shadow: 0 1px 2px 0 rgb(60 64 67 / 30%), 0 2px 6px 2px rgb(60 64 67 / 15%);
  border-radius: 8px;
  background-color: ${(props) => props.memoColor || '#fff'};
  border: 1px solid ${(props) => props.memoColor || '#fff'}; ;
`;

export const SEditCardBody = styled.div`
  overflow: scroll;
  max-height: 500px;
  padding: 0px 16px;
`;

export const SCardCreatedAt = styled.div`
  padding: 12px 0;
  color: rgba(0, 0, 0, 0.8);
  font-size: 12px;
  text-align: right;
`;

export const SEmptyEditor = styled.div`
  height: 179px;
`;
