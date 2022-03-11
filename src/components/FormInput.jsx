import { useEffect } from "react";
import { useFormValidation } from "../hooks/use-form-validation";

export default function FormInput({
  label,
  type,
  validateValue,
  onChangeHandler,
}) {
  const {
    valueChangeHandler,
    inputBlurHandler,
    isValid,
    hasError,
    value,
    reset,
  } = useFormValidation(validateValue);

  useEffect(() => {
    onChangeHandler({
      isValid,
      reset,
      value,
    });
  }, [value, onChangeHandler, reset, isValid]);

  return (
    <label>
      {label}
      <input
        onChange={valueChangeHandler}
        onBlur={inputBlurHandler}
        type={type}
        value={value}
      />
      {hasError && <p>Sorry, {label.toLowerCase()} must be completed.</p>}
    </label>
  );
}
