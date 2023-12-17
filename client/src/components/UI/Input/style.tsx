import styled from 'styled-components';

export const SInputControl = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 12px;
`;

export const SInput = styled.input<{ isInValid: boolean }>`
  height: 40px;
  padding: 8px;
  font-size: var(--text-base);
  border: 1px solid
    hsl(
      var(${(props) => (props.isInValid ? '--color-red' : '--color-gray-300')})
    );
  border-radius: var(--rounded-sm);
  background-color: hsla(
    var(
      ${(props) =>
        props.isInValid ? '--color-red-lighter' : '--color-transparent'}
    ),
    0.2
  );
  &:focus {
    border: 2px solid
      hsl(var(${(props) => (props.isInValid ? '--color-red' : '--color-blue')}));
  }
  &::placeholder {
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
