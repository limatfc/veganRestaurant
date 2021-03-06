import { useEffect } from "react";
import { useFormValidation } from "../hooks/use-form-validation";
import classes from "../styles/components/FormSelectBox.module.css";

export default function FormSelectBox({ inputedDate, onChangeHandler }) {
  const {
    valueChangeHandler,
    inputBlurHandler,
    isValid,
    hasError,
    value,
    reset,
  } = useFormValidation((selectedValue) => selectedValue.trim().length !== 0);

  useEffect(() => {
    onChangeHandler({
      isValid,
      reset,
      value,
    });
  }, [value, reset, isValid, onChangeHandler]);

  const chosenDay = inputedDate.slice(0, 3);

  let availableTime = false;
  if (chosenDay === "Fri" || chosenDay === "Sat") {
    availableTime = true;
  }
  return (
    <label className={classes.selectBoxWrapper}>
      Select a time
      <select
        onChange={valueChangeHandler}
        onBlur={inputBlurHandler}
        name="availableTimes"
        value={value}
        className={hasError ? classes.errorInput : null}
      >
        <option value="">--Select an option--</option>
        <option value="17" disabled={!availableTime}>
          17:00
        </option>
        <option value="18">18:00</option>
        <option value="19">19:00</option>
        <option value="20">20:00</option>
        <option value="21">21:00</option>
        <option value="22">22:00</option>
        <option value="23" disabled={!availableTime}>
          23:00
        </option>
      </select>
      <p>{hasError && "A time must be selected."}</p>
    </label>
  );
}
