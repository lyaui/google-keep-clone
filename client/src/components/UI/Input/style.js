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
  font-size: 14px;
  display: block;
  border: 1px solid #ccc;
  border-radius: 2px;
  :focus {
    border: 2px solid rgb(66, 133, 244);
    opacity: 0.9;
  }
  ::placeholder {
    font-weight: 300;
    font-size: 14px;
  }
`;

export const SInputMessage = styled.span`
  color: red;
  font-size: 12px;
  font-weight: unset;
`;
