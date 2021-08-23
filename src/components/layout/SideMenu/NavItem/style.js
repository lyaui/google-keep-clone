import styled from 'styled-components/macro';

export const SNavItem = styled.li`
  border-radius: 0 25px 25px 0;
  font-size: 14px;
  font-weight: 500;
  list-style: none;
  cursor: pointer;
  overflow: hidden;
  transition: all 0.3s;

  :hover {
    background-color: #f2f3f4;
  }

  button {
    margin-left: 12px;
  }

  a {
    color: #202124;
    display: flex;
    align-items: center;
  }
`;
