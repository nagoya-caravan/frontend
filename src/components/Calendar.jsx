import "moment";
import WeekCalendar from "./WeekCalendar";
import useCalendarDate from "./useCalendarDate";
// カレンダーコンポーネントの利用例
const Calendar = () => {
  const { currentYearMonth, handleNextMonth, handlePrevMonth } =
    useCalendarDate();
  return (
    <div>
      <WeekCalendar
        year={currentYearMonth.year()}
        month={currentYearMonth.month()}
      />
      <button onClick={handleNextMonth()}>Previous Month</button>
      <button onClick={handlePrevMonth()}>Next Month</button>
    </div>
  );
};

export default Calendar;
