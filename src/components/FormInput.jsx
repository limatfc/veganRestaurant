import { useEffect } from "react";
import { useFormValidation } from "../hooks/use-form-validation";
import classes from "../styles/components/FormInput.module.css";

export default function FormInput({ label, validateValue, onChangeHandler }) {
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
    <label className={classes.formInputWrapper}>
      {label}
      <input
        className={hasError ? classes.errorInput : null}
        onChange={valueChangeHandler}
        onBlur={inputBlurHandler}
        value={value}
      />
      <p>{hasError && `${label} must be completed.`}</p>
    </label>
  );
}
