import { SButtonRound, SButtonSquare } from 'components/UI/Buttons/style.js';

export const ButtonRound = ({ children, size, onClick }) => {
  return (
    <SButtonRound size={size} onClick={onClick}>
      {children}
    </SButtonRound>
  );
};

export const ButtonSquare = ({ children, size, onClick }) => {
  return (
    <SButtonSquare size={size} onClick={onClick}>
      {children}
    </SButtonSquare>
  );
};
