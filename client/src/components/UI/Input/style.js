import styled from 'styled-components/macro';

export const SInputControl = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 12px;
`;

export const SInput = styled.input`
  height: 40px;
  padding: 8px;
  font-size: 1.4rem;
  border: 1px solid var(--border);
  border-radius: var(--rounded-sm);
  background-color: hsla(var(--color), 0.2);
  :focus {
    border: 2px solid hsl(var(--border-focus));
  }
  ::placeholder {
    font-weight: 300;
    font-size: 1.4rem;
  }
`;

export const SInputMessage = styled.span`
  margin-top: 4px;
  margin-right: auto;
  padding-left: 8px;
  color: hsl(var(--color-red-darker));
  font-size: 12px;
`;
