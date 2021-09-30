import styled from 'styled-components/macro';

export const SGoogleLoginButton = styled.button`
  position: relative;
  display: flex;
  height: 40px;
  align-items: center;
  justify-content: center;
  color: #fff;
  border-radius: 2px;
  background-color: rgb(66, 133, 244);

  span {
    margin-left: 40px;
  }
  :hover {
    background-color: rgb(53, 120, 231);
  }
  :hover svg {
    opacity: 0.95;
  }
  svg {
    position: absolute;
    left: 0;
    width: 40px;
    height: 40px;
    border: 1px solid rgb(66, 133, 244);
    padding: 8px;
    border-radius: 2px;
    background-color: #fff;
  }
`;
