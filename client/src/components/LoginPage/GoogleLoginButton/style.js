import styled from 'styled-components/macro';

export const SGoogleLoginButton = styled.button`
  display: flex;
  height: 40px;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 14px;
  border-radius: var(--rounded-sm);
  border: 1px solid #999;
  color: #999;
  background-color: #fff;

  span {
    font-weight: normal !important;
  }

  :hover svg {
    opacity: 0.95;
  }
  svg {
    width: 38px;
    height: 38px;
    padding: 8px;
    background-color: #fff;
  }
`;
