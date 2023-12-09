export const VALIDATOR_TYPES = {
  REQUIRE: 'REQUIRE',
  MINLENGTH: 'MINLENGTH',
  EMAIL: 'EMAIL',
};

export const validator = (value, validators) => {
  let isValid = true;
  let errorMessage = '';

  validators.forEach((validator) => {
    if (validator === VALIDATOR_TYPES.REQUIRE) {
      isValid = isValid && value.trim().length > 0;
      errorMessage = !isValid && !errorMessage ? '此欄為必填' : errorMessage;
    }
    if (validator === VALIDATOR_TYPES.MINLENGTH) {
      isValid = isValid && value.length >= 6;
      errorMessage =
        !isValid && !errorMessage ? '字數需大於等於 6 字元' : errorMessage;
    }
    if (validator === VALIDATOR_TYPES.EMAIL) {
      isValid = isValid && /^\S+@\S+\.\S+$/.test(value);
      errorMessage =
        !isValid && !errorMessage ? '請輸入正確信箱格式' : errorMessage;
    }
  });
  return { isValid, errorMessage };
};
