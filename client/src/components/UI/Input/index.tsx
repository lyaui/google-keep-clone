import {
  useEffect,
  useRef,
  forwardRef,
  useImperativeHandler,
  useReducer,
} from 'react';
import type { ComponentPropsWithRef } from 'react';
import { useLocation } from 'react-router-dom';
import { validator } from '@/utils/validator';
import {
  SInputControl,
  SInput,
  SInputMessage,
} from '@/components/UI/Input/style';

const INIT_INPUT_STATES = {
  isTouched: false,
  isValid: false,
  value: '',
  errorMessage: '',
};

const INPUT_ACTIONS = {
  BLUR: 'BLUR',
  CHANGE: 'CHANGE',
  RESET: 'RESET',
} as const;

type InputAction =
  | {
      type: typeof INPUT_ACTIONS.BLUR;
      isValid: boolean;
      errorMessage: string;
    }
  | {
      type: typeof INPUT_ACTIONS.CHANGE;
      value: string;
      isValid: boolean;
      errorMessage: string;
    }
  | { type: typeof INPUT_ACTIONS.RESET };

function inputReducer(state = INIT_INPUT_STATES, action: InputAction) {
  switch (action.type) {
    case INPUT_ACTIONS.BLUR:
      return {
        ...state,
        isTouched: true,
        isValid: action.isValid,
        errorMessage: action.errorMessage,
      };
    case INPUT_ACTIONS.CHANGE:
      return {
        ...state,
        value: action.value,
        isValid: action.isValid,
        errorMessage: action.errorMessage,
      };
    case INPUT_ACTIONS.RESET:
      return INIT_INPUT_STATES;
    default:
      return state;
  }
}

export interface InputProps extends ComponentPropsWithRef<'input'> {
  validate: any;
  validFormHandler: any;
}

const Input = forwardRef<any, InputProps>(function Input(
  { validate, validFormHandler, ...others },
  ref
) {
  const { pathname } = useLocation();
  const [inputState, inputDispatch] = useReducer(
    inputReducer,
    INIT_INPUT_STATES
  );
  const { isTouched, isValid, value, errorMessage } = inputState;
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => resetInputHandle(), [pathname]);

  const blurInputHandler = () => {
    const { isValid, errorMessage } = validator(
      inputRef.current?.value,
      validate
    );
    inputDispatch({
      type: INPUT_ACTIONS.BLUR,
      isValid,
      errorMessage,
    });
  };

  const changeInputHandler = () => {
    const { isValid, errorMessage } = validator(
      inputRef.current?.value,
      validate
    );
    inputDispatch({
      type: INPUT_ACTIONS.CHANGE,
      value: inputRef.current?.value || '',
      isValid,
      errorMessage,
    });
    validFormHandler({ name, value: inputRef.current?.value || '', isValid });
  };

  const resetInputHandle = () => inputDispatch({ type: INPUT_ACTIONS.RESET });

  return (
    <SInputControl>
      <SInput
        ref={inputRef}
        onBlur={blurInputHandler}
        onChange={changeInputHandler}
        isInValid={(!isValid && isTouched) || false}
        value={value}
        {...others}
      />
      {errorMessage && isTouched && (
        <SInputMessage>{errorMessage}</SInputMessage>
      )}
    </SInputControl>
  );
});

export default Input;
