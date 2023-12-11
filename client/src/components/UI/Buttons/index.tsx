import type {
  ReactNode,
  CSSProperties,
  ComponentPropsWithoutRef,
  MouseEvent,
  MouseEventHandler,
} from 'react';

import {
  SButtonRound,
  SButtonSquare,
  SButtonRect,
} from '@/components/UI/Buttons/style';

type Size = 'small' | 'medium' | 'large';
type Variant = 'round' | 'square' | 'rectangle';

export interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  children: ReactNode;
  variant?: Variant;
  size?: number | Size;
  color?: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
  style?: CSSProperties;
  disabled?: boolean;
}

function Button({
  children,
  variant = 'round',
  size = 'medium',
  color = 'transparent',
  onClick,
  style = {},
  disabled = false,
  ...others
}: ButtonProps) {
  const StyledButton =
    {
      round: SButtonRound,
      square: SButtonSquare,
      rectangle: SButtonRect,
    }[variant] || SButtonRound;

  const propSize =
    typeof size === 'number'
      ? size
      : { small: 28, medium: 34, large: 40 }[size] || 34;

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    if (disabled) return;
    onClick(event);
  };

  return (
    <StyledButton
      size={propSize}
      color={color}
      onClick={handleClick}
      style={style}
      disabled={disabled}
      {...others}
    >
      {children}
    </StyledButton>
  );
}

export default Button;
