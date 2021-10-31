import styled from 'styled-components/macro';

export const SGoogleLoginButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  color: hsl(var(--color-gray-400));
  font-size: 1.4rem;
  border-radius: var(--rounded-sm);
  border: 1px solid hsl(var(--color-gray-400));
  background-color: var(--color-white);

  span {
    margin-top: -2px;
    font-weight: var(--font-normal) !important;
  }

  :hover svg {
    opacity: 0.95;
  }

  svg {
    margin-top: -2px;
    width: 38px;
    height: 38px;
    padding: 8px;
    background-color: var(--color-white);
  }
`;
