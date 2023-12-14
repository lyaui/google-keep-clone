import type { ReactNode } from 'react';
import { SHint, SHintIcon, SHintText } from '@/components/UI/Hint/style';

interface HintProps {
  icon: ReactNode;
  text: string;
}

function Hint({ icon, text }: HintProps) {
  return (
    <SHint>
      <SHintIcon> {icon}</SHintIcon>
      <SHintText>{text}</SHintText>
    </SHint>
  );
}

export default Hint;
