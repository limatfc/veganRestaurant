import Calendar from "react-calendar";
import classes from "../styles/components/ContactForm.module.css";
import "react-calendar/dist/Calendar.css";

export default function FormCalendar({ onChangeHandler }) {
  function onCalendarChangeHandler(event) {
    const stringifiedEvent = event.toString();
    const clickedDay = stringifiedEvent.slice(0, 15);
    onChangeHandler(clickedDay);
  }
  return (
    <>
      <label>
        Choose a date
        <Calendar
          className={classes.calendar}
          calendarType="US"
          locale="english"
          minDate={new Date()}
          onChange={onCalendarChangeHandler}
        />
      </label>
    </>
  );
}
