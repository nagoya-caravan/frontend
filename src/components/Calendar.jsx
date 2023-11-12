import { useState } from "react";
import moment from "moment";
import { Box, Button } from "@mui/material";
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

const WeekCalendar = (year, month) => {
  const weeksOfMonth = getMonthData(year, month); // 月初めの日付と曜日を計算する

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

const Calendar = () => {
  const [currentYearMonth, setCurrentYearMonth] = useState(moment());

  return (
    <>
      <Button
        onClick={() =>
          setCurrentYearMonth(currentYearMonth.clone().subtract(1, "months"))
        }
      >
        Previous Month
      </Button>
      <Button
        onClick={() =>
          setCurrentYearMonth(currentYearMonth.clone().add(1, "months"))
        }
      >
        Next Month
      </Button>
      <Box
        sx={{
          width: "100%",
          display: "grid",
          gridAutoFlow: "row",
          gridTemplateColumns: "repeat(7, 1fr)",
          gap: 0,
          borderBottom: "solid 1px #111",
          borderLeft: "solid 1px #111",
          borderRight: "solid 1px #111",
        }}
      >
        <Box
          sx={{
            textAlign: "center",
            color: "#111",
            borderTop: "solid 1px #111",

            borderBottom: "1px solid #111",
          }}
        >
          日
        </Box>
        <Box
          sx={{
            textAlign: "center",
            borderTop: "solid 1px #111",

            borderBottom: "1px solid #111",
          }}
        >
          月
        </Box>
        <Box
          sx={{
            textAlign: "center",
            borderTop: "solid 1px #111",

            borderBottom: "1px solid #111",
          }}
        >
          火
        </Box>
        <Box
          sx={{
            textAlign: "center",
            borderTop: "solid 1px #111",
            borderBottom: "1px solid #111",
          }}
        >
          水
        </Box>
        <Box
          sx={{
            textAlign: "center",
            borderTop: "solid 1px #111",
            borderBottom: "1px solid #111",
          }}
        >
          木
        </Box>
        <Box
          sx={{
            textAlign: "center",
            borderTop: "solid 1px #111",

            borderBottom: "1px solid #111",
          }}
        >
          金
        </Box>
        <Box
          sx={{
            textAlign: "center",
            color: "#111",
            borderTop: "solid 1px #111",

            borderBottom: "1px solid #111",
          }}
        >
          土
        </Box>

        <WeekCalendar
          year={currentYearMonth.year()}
          month={currentYearMonth.month()}
        />
      </Box>
    </>
  );
};

export default Calendar;
