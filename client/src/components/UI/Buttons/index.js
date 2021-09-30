import { forwardRef } from 'react';
import { SButtonRound, SButtonSquare, SButtonRect } from 'components/UI/Buttons/style.js';

export const ButtonRound = forwardRef(({ children, size, color, onClick, style }, ref) => {
  return (
    <SButtonRound ref={ref} size={size} color={color} onClick={onClick} style={style}>
      {children}
    </SButtonRound>
  );
});

export const ButtonSquare = forwardRef(({ children, size, color, onClick }, ref) => {
  return (
    <SButtonSquare ref={ref} size={size} color={color} onClick={onClick}>
      {children}
    </SButtonSquare>
  );
});

export const ButtonRect = forwardRef(({ children, size, color, onClick }, ref) => {
  return (
    <SButtonRect ref={ref} size={size} color={color} onClick={onClick}>
      {children}
    </SButtonRect>
  );
});
