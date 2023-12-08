import styled from 'styled-components';

export const SSearch = styled.form`
  display: flex;
  height: 100%;
  width: 600px;
  margin-right: auto;
  border-radius: var(--rounded-lg);
  background-color: var(--color);
  overflow: hidden;
  transition: var(--transition);
  box-shadow: var(--shadow);
`;

export const SSreachInput = styled.input`
  font-size: var(--text-md);
  width: 110%;
  padding: 0 4px;
  background: hsl(var(--color-transparent));
  transition: var(--transition);
  ::placeholder {
    color: hsl(var(--color-gray-400));
  }
`;
