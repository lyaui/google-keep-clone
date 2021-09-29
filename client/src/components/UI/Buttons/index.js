import { forwardRef } from 'react';
import { SButtonRound, SButtonSquare } from 'components/UI/Buttons/style.js';

export const ButtonRound = forwardRef(({ children, size, onClick, style }, ref) => {
  return (
    <SButtonRound ref={ref} size={size} onClick={onClick} style={style}>
      {children}
    </SButtonRound>
  );
});

export const ButtonSquare = forwardRef(({ children, size, onClick }, ref) => {
  return (
    <SButtonSquare ref={ref} size={size} onClick={onClick}>
      {children}
    </SButtonSquare>
  );
});
