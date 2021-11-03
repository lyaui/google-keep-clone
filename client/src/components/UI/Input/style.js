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
  font-size: var(--text-base);
  border: 1px solid var(--border);
  border-radius: var(--rounded-sm);
  background-color: hsla(var(--color), 0.2);
  :focus {
    border: 2px solid hsl(var(--border-focus));
  }
  ::placeholder {
    font-weight: var(--font-light);
    color: hsla(var(--color-gray-400));
    font-size: var(--text-base);
  }
`;

export const SInputMessage = styled.span`
  margin-top: 4px;
  margin-right: auto;
  padding-left: 8px;
  color: hsl(var(--color-red-darker));
  font-size: var(--text-sm);
  font-weight: var(--font-light) !important;
`;
