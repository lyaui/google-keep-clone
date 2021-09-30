import { SInputControl, SInput, SInputMessage } from 'components/UI/Input/style.js';

const Input = ({ label, type, errorMessage }) => {
  return (
    <SInputControl>
      <SInput type={type} placeholder={label} />
      {errorMessage && <SInputMessage>{errorMessage}</SInputMessage>}
    </SInputControl>
  );
};

export default Input;
