import { useState } from "react";
import DatePicker from "react-date-picker";
import "react-calendar/dist/Calendar.css";
import "react-date-picker/dist/DatePicker.css";

function templateCalendar() {
  const [value, onChange] = useState(new Date());

  return (
    <div>
      <DatePicker
        onChange={onChange}
        value={value}
        className="custom-datepicker"
        calendarClassName="custom-tailwind-calendar"
        format="MM/dd/yyyy"
      />
    </div>
  );
}

export default templateCalendar;
