import { useRef, useEffect, useReducer } from 'react';
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
};

function inputReducer(state = INIT_INPUT_STATES, action) {
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

function Input({ name, label, type, validate, validFormHandler }) {
  const { pathname } = useLocation();
  const [inputState, inputDispatch] = useReducer(
    inputReducer,
    INIT_INPUT_STATES,
  );
  const { isTouched, isValid, value, errorMessage } = inputState;
  const inputRef = useRef();

  useEffect(() => resetInputHandle(), [pathname]);

  const blurInputHandler = () => {
    const { isValid, errorMessage } = validator(
      inputRef.current.value,
      validate,
    );
    inputDispatch({
      type: INPUT_ACTIONS.BLUR,
      isValid,
      errorMessage,
    });
  };

  const changeInputHandler = () => {
    const { isValid, errorMessage } = validator(
      inputRef.current.value,
      validate,
    );
    inputDispatch({
      type: INPUT_ACTIONS.CHANGE,
      value: inputRef.current.value,
      isValid,
      errorMessage,
    });
    validFormHandler({ name, value: inputRef.current.value, isValid });
  };

  const resetInputHandle = () => inputDispatch({ type: INPUT_ACTIONS.RESET });

  return (
    <SInputControl>
      <SInput
        ref={inputRef}
        type={type}
        placeholder={label}
        onBlur={blurInputHandler}
        onChange={changeInputHandler}
        style={{
          '--border':
            !isValid && isTouched
              ? 'hsl(var(--color-red))'
              : 'hsla(var(--color-gray-400),.5)',
          '--border-focus':
            !isValid && isTouched ? 'var(--color-red)' : 'var(--color-blue)',
          '--color':
            !isValid && isTouched
              ? 'var(--color-red-lighter)'
              : 'var(--color-transparent)',
        }}
        isInValid={(!isValid && isTouched) || false}
        value={value}
      />
      {errorMessage && isTouched && (
        <SInputMessage>{errorMessage}</SInputMessage>
      )}
    </SInputControl>
  );
}

export default Input;
