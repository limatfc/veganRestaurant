import FormCalendar from "./FormCalendar";
import FormInput from "./FormInput";
import FormSelectBox from "./FormSelectBox";
import { useContactFormData } from "../hooks/use-contact-form-data";

export default function ContactForm() {
  const {
    onEnteredValueChangeHandler,
    onEmailChangeHandler,
    onCalendarChangeHandler,
    onSelectBoxChangeHandler,
    formData,
  } = useContactFormData();

  const { enteredName, enteredEmail, inputedTime } = formData;

  function onSubmitHandler(event) {
    event.preventDefault();
    enteredName.reset();
    enteredEmail.reset();
    inputedTime.reset();
  }

  let formIsValid = false;
  if (enteredName.isValid && enteredEmail.isValid && inputedTime.isValid) {
    formIsValid = true;
  }

  return (
    <form onSubmit={onSubmitHandler}>
      <FormInput
        label="First and last names"
        validateValue={(name) => name.trim() !== ""}
        onChangeHandler={onEnteredValueChangeHandler}
      />
      <FormInput
        label="Email address"
        validateValue={(email) => email.includes("@")}
        onChangeHandler={onEmailChangeHandler}
      />
      <FormCalendar onChangeHandler={onCalendarChangeHandler} />
      <FormSelectBox
        onChangeHandler={onSelectBoxChangeHandler}
        inputedDate={formData.inputedDate}
      />
      <button type="submit" disabled={!formIsValid}>
        Submit
      </button>
    </form>
  );
}
