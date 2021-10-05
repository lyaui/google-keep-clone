import { useRef, useEffect, useReducer } from 'react';
import { useUIContextVal } from 'contexts/ui-context.js';
import { validator } from 'utils/validator.js';
import { SInputControl, SInput, SInputMessage } from 'components/UI/Input/style.js';

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

const inputReducer = (state = INIT_INPUT_STATES, action) => {
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
};

const Input = ({ label, type, validate }) => {
  const { CTX_FORM_MODE } = useUIContextVal();
  const [inputState, inputDispatch] = useReducer(inputReducer, INIT_INPUT_STATES);
  const { isTouched, isValid, value, errorMessage } = inputState;
  const inputRef = useRef();

  useEffect(() => {
    resetInputHandle();
  }, [CTX_FORM_MODE.formMode]);

  const blurInputHandler = () => {
    const { isValid, errorMessage } = validator(inputRef.current.value, validate);
    inputDispatch({
      type: INPUT_ACTIONS.BLUR,
      isValid,
      errorMessage,
    });
  };

  const changeInputHandler = () => {
    const { isValid, errorMessage } = validator(inputRef.current.value, validate);
    inputDispatch({
      type: INPUT_ACTIONS.CHANGE,
      value: inputRef.current.value,
      isValid,
      errorMessage,
    });
  };

  const resetInputHandle = () => {
    inputDispatch({ type: INPUT_ACTIONS.RESET });
  };

  return (
    <SInputControl>
      <SInput
        ref={inputRef}
        type={type}
        placeholder={label}
        onBlur={blurInputHandler}
        onChange={changeInputHandler}
        isInValid={(!isValid && isTouched) || false}
        value={value}
      />

      {errorMessage && <SInputMessage>{errorMessage}</SInputMessage>}
    </SInputControl>
  );
};

export default Input;
