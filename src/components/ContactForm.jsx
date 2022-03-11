import { useState, useCallback } from "react";
import FormCalendar from "./FormCalendar";
import FormInput from "./FormInput";
import FormSelectBox from "./FormSelectBox";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    enteredName: {},
    enteredEmail: {},
    inputedDate: "",
    inputedTime: {},
  });

  const onEnteredValueChangeHandler = useCallback((enteredValue) => {
    setFormData((prev) => ({ ...prev, enteredName: enteredValue }));
  }, []);
  console.log(formData);

  const onEmailChangeHandler = useCallback((enteredValue) => {
    setFormData((prev) => ({ ...prev, enteredEmail: enteredValue }));
  }, []);

  function onCalendarChangeHandler(enteredValue) {
    setFormData((prev) => ({ ...prev, inputedDate: enteredValue }));
  }

  const onSelectBoxChangeHandler = useCallback((enteredValue) => {
    setFormData((prev) => ({ ...prev, inputedTime: enteredValue }));
  }, []);

  function onSubmitHandler(event) {
    event.preventDefault();
    formData.enteredName.reset();
    formData.enteredEmail.reset();
    formData.inputedTime.reset();
  }

  let formIsValid = false;
  if (
    formData.enteredName.isValid &&
    formData.enteredEmail.isValid &&
    formData.inputedTime.isValid
  ) {
    formIsValid = true;
  }
  return (
    <form onSubmit={onSubmitHandler}>
      <FormInput
        label="First and last names"
        type="text"
        validateValue={(name) => name.trim() !== ""}
        onChangeHandler={onEnteredValueChangeHandler}
      />
      <FormInput
        label="Email address"
        type="email"
        validateValue={(email) => email.includes("@")}
        onChangeHandler={onEmailChangeHandler}
      />
      <FormCalendar onChangeHandler={onCalendarChangeHandler} />
      <FormSelectBox
        onChangeHandler={onSelectBoxChangeHandler}
        inputedDate={formData.inputedDate}
      />
      <button type="submit" disabled={formIsValid}>
        Submit
      </button>
    </form>
  );
}
