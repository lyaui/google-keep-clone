import styled from 'styled-components/macro';
import backgroundImage from 'assets/images/login-background.jpeg';

export const SLoginImage = styled.div`
  flex: 1;
  padding: 50px;
  background-image: url(${backgroundImage});
  background-repeat: no-repeat;
  background-position: center;

  > div {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }
`;

export const SLoginImageTitle = styled.div`
  font-size: 50px;
  font-weight: 300;
  letter-spacing: 2px;
  color: #fff;
  text-shadow: 0 0 10px rgb(0 0 0 / 50%);
`;

export const SLoginImageText = styled.div`
  padding: 32px 0;
  line-height: 1.5em;
  font-weight: 300;
  color: #fff;
  text-shadow: 0 0 20px rgb(0 0 0 / 80%);
`;

export const SLoginImageButton = styled.button`
  background-color: #f8bc1a;
  padding: 16px;
  border-radius: 8px;
  cursor: pointer;
  box-shadow: 0 1px 2px 0 rgb(60 64 67 / 30%), 0 2px 6px 2px rgb(60 64 67 / 15%);
  transition: all 0.3s;
  :hover {
    background-color: #f7b401;
    box-shadow: 0 1px 2px 0 rgb(60 64 67 / 30%), 0 2px 6px 2px rgb(60 64 67 / 30%);
  }
`;
