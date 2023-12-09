import { forwardRef } from 'react';
import {
  SButtonRound,
  SButtonSquare,
  SButtonRect,
  SButtonRectDisabled,
} from '@/components/UI/Buttons/style.jsx';

export const ButtonRound = forwardRef(
  ({ children, size, color, onClick, style, disabled = false }, ref) => {
    return (
      <SButtonRound
        ref={ref}
        size={size}
        color={color}
        onClick={onClick}
        style={style}
        disabled={disabled}
      >
        {children}
      </SButtonRound>
    );
  }
);

export const ButtonSquare = forwardRef(
  ({ children, size, color, onClick, disabled = false }, ref) => {
    return (
      <SButtonSquare
        ref={ref}
        size={size}
        color={color}
        onClick={onClick}
        disabled={disabled}
      >
        {children}
      </SButtonSquare>
    );
  }
);

export const ButtonRect = forwardRef(
  (
    { children, size, color, isFormValid = true, onClick, disabled = false },
    ref
  ) => {
    const SButton = isFormValid ? SButtonRect : SButtonRectDisabled;
    return (
      <SButton
        ref={ref}
        size={size}
        color={color}
        onClick={onClick}
        disabled={!isFormValid || disabled}
      >
        {children}
      </SButton>
    );
  }
);
