import "mount";
const WeekCalendar = ({ year, month }) => {
  const weeksOfMonth = getMonthData(year, month); // 月初めの日付と曜日を計算する

  // 月初めの日付と曜日を計算する関数
  const getMonthData = (year, month) => {
    const firstDayOfMonth = moment([year, month]);
    const firstDayOfWeek = firstDayOfMonth.day();

    let currentWeek = firstDayOfWeek; // 月初めの日の曜日
    let daysInMonth = firstDayOfMonth.daysInMonth(); // その月の日数
    let weeks = []; // 週の配列
    let days = [];

    // 月の日数分だけループ
    for (let day = 1; day <= daysInMonth; day++) {
      days.push({ date: day, dayOfWeek: currentWeek });
      if (currentWeek === 6 || day === daysInMonth) {
        // 土曜日または月末の場合、週をリセット
        weeks.push(days);
        days = []; // 新しい週の配列を開始
        currentWeek = 0; // 曜日カウンターをリセット
      } else {
        currentWeek++; // 曜日カウンターを進める
      }
    }
    return weeks; // 週の配列を返す
  };
  return (
    <div>
      {weeksOfMonth.map((week, index) => (
        <div key={index} className='week-row'>
          {week.map((day) => (
            <div key={day.date} className='day'>
              {day.date} ({moment().day(day.dayOfWeek).format("ddd")})
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default WeekCalendar;
