import styled from 'styled-components/macro';

export const SLoginForm = styled.div`
  color: #475861;
  display: flex;
  flex-direction: column;
  padding: 60px 50px;
  width: 385px;
  p {
    font-weight: 300;
    display: block;
    padding-top: 20px;
    font-size: 20px;
    letter-spacing: 2px;
  }
  span {
    letter-spacing: 1px;
    text-align: center;
    font-weight: 300;
    font-size: 14px;
  }
`;

export const SLoginFormLogo = styled.img`
  width: 200px;
`;

export const SLoginFormSeperator = styled.div`
  color: #999;
  font-size: 12px;
  padding: 24px 0;
  width: 100%;

  :after {
    display: inline-block;
    margin: 0 0 4px 20px;
    height: 1px;
    content: ' ';
    background-color: #999;
    width: 40%;
  }
  :before {
    display: inline-block;
    margin: 0 20px 4px 0;
    height: 1px;
    content: ' ';
    background-color: #999;
    width: 40%;
  }
`;

export const SFormHint = styled.span`
  u {
    cursor: pointer;
  }
`;
