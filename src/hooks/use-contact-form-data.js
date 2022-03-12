import { useState, useCallback } from "react";

export function useContactFormData() {
  const [formData, setFormData] = useState({
    enteredName: {},
    enteredEmail: {},
    inputedDate: "",
    inputedTime: {},
  });

  const onNameChangeHandler = useCallback((enteredValue) => {
    setFormData((prev) => ({ ...prev, enteredName: enteredValue }));
  }, []);

  const onEmailChangeHandler = useCallback((enteredValue) => {
    setFormData((prev) => ({ ...prev, enteredEmail: enteredValue }));
  }, []);

  function onCalendarChangeHandler(enteredValue) {
    setFormData((prev) => ({ ...prev, inputedDate: enteredValue }));
  }

  const onSelectBoxChangeHandler = useCallback((enteredValue) => {
    setFormData((prev) => ({ ...prev, inputedTime: enteredValue }));
  }, []);

  return {
    onNameChangeHandler,
    onEmailChangeHandler,
    onCalendarChangeHandler,
    onSelectBoxChangeHandler,
    formData,
  };
}
