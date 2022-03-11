import { useState, useCallback } from "react";

export function useFormValidation(validateValue) {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const reset = useCallback(function reset() {
    setEnteredValue("");
    setIsTouched(false);
  }, []);

  const valueIsValid = validateValue(enteredValue);
  const hasError = !valueIsValid && isTouched;

  function valueChangeHandler(event) {
    setEnteredValue(event.target.value);
  }

  function inputBlurHandler() {
    setIsTouched(true);
  }

  return {
    value: enteredValue,
    hasError,
    isValid: valueIsValid,
    valueChangeHandler,
    inputBlurHandler,
    reset,
  };
}
