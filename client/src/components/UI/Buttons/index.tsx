import {
  forwardRef,
  type FC,
  type ReactNode,
  type CSSProperties,
  type ComponentPropsWithRef,
  type MouseEvent,
  type MouseEventHandler,
} from 'react';

import {
  SButton,
  SButtonRound,
  SButtonSquare,
  SButtonRect,
} from '@/components/UI/Buttons/style';

type Size = 'small' | 'medium' | 'large';
type Variant = 'round' | 'square' | 'rectangle' | 'text';

export interface ButtonProps extends ComponentPropsWithRef<'button'> {
  children: ReactNode;
  variant?: Variant;
  size?: number | Size;
  color?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  style?: CSSProperties;
  disabled?: boolean;
}

const Button: FC<ButtonProps> = forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(
    {
      children,
      variant = 'round',
      size = 'medium',
      color = 'transparent',
      onClick,
      style = {},
      disabled = false,
      ...others
    },
    ref
  ) {
    const StyledButton =
      {
        round: SButtonRound,
        square: SButtonSquare,
        rectangle: SButtonRect,
        text: SButton,
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
        ref={ref}
        {...others}
      >
        {children}
      </StyledButton>
    );
  }
);

export default Button;
