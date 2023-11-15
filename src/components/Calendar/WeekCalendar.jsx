import { Box } from "@mui/material";
import WeekRow from "./WeekRow";
import moment from "moment";

const WeekCalendar = (props) => {
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

    //月初めの週の日付が七日間に満たない場合、先月の日付を配列に格納する

    if (firstDayOfWeek !== 0) {
      const daysToAdd = firstDayOfWeek;
      for (let day = 1; day <= daysToAdd; day++) {
        weeks[0].unshift({ date: daysInMonth, dayOfWeek: daysToAdd - day });
        daysInMonth--;
      }
    }
    // 月末の週の日付が七日間に満たない場合、翌月の日付を配列に格納する// 月末の週の日付が七日間に満たない場合、翌月の日付を配列に格納する
    if (weeks[weeks.length - 1].length !== 7) {
      let lastDayOfWeek =
        weeks[weeks.length - 1][weeks[weeks.length - 1].length - 1].dayOfWeek;
      const daysToAdd = 7 - weeks[weeks.length - 1].length;
      for (let day = 1; day <= daysToAdd; day++) {
        lastDayOfWeek = (lastDayOfWeek + 1) % 7;
        weeks[weeks.length - 1].push({ date: day, dayOfWeek: lastDayOfWeek });
      }
    }
    console.log(weeks);

    return weeks;
  };

  const { year, month } = props;
  const weeksOfMonth = getMonthData(year, month); // 月初めの日付と曜日を計算する関数
  return (
    <Box>
      {weeksOfMonth.map((week, index) => (
        <WeekRow key={index} week={week} />
      ))}
    </Box>
  );
};

export default WeekCalendar;
