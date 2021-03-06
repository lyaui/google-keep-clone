import { SHint, SHintIcon, SHintText } from 'components/UI/Hint/style.js';

const Hint = ({ icon, text }) => {
  return (
    <SHint>
      <SHintIcon> {icon}</SHintIcon>
      <SHintText>{text}</SHintText>
    </SHint>
  );
};

export default Hint;
