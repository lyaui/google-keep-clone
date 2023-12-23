import styled from 'styled-components';

export const SSearch = styled.form<{ isTouched: boolean }>`
  display: flex;
  height: 100%;
  width: 600px;
  margin-right: auto;
  border-radius: var(--rounded-lg);
  background-color: var(
    ${(props) =>
      props.isTouched ? '--color-input-focus-bg' : '--color-input-bg'}
  );
  overflow: hidden;
  transition: var(--transition);
  box-shadow: ${(props) => props.isTouched && 'var(--shadow-sm)'};
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
