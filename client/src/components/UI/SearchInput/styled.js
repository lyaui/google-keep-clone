import styled from 'styled-components';

export const SSearch = styled.form`
  display: flex;
  height: 100%;
  width: 600px;
  margin-right: auto;
  border-radius: 8px;
  background-color: var(--color);
  overflow: hidden;
  transition: all 0.3s;
  box-shadow: var(--shadow);
`;

export const SSreachInput = styled.input`
  font-size: 1.6rem;
  width: 110%;
  padding: 0 4px;
  background: hsl(var(--color-transparent));
  transition: all 0.3s;
  ::placeholder {
    color: hsl(var(--color-gray-400));
  }
`;
