import { SButtonRound } from 'components/UI/Buttons/style.js';

export const ButtonRound = ({ children, size, onClick }) => {
  return (
    <SButtonRound size={size} onClick={onClick}>
      {children}
    </SButtonRound>
  );
};
