import { useState } from "react";
import moment from "moment";
import { Button, Box, Typography } from "@mui/material";
import styled from "styled-components";
import useYearMonth from "../hooks/useYearMonth";
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

  //月初めの週の日付が七日間に満たない場合、先月の日付を配列に格納する
  if (firstDayOfWeek !== 0) {
    const daysToAdd = firstDayOfWeek;
    for (let day = 1; day <= daysToAdd; day++) {
      weeks[0].unshift({ date: daysInMonth, dayOfWeek: currentWeek });
      daysInMonth--;
    }
    // 月末の週の日付が七日間に満たない場合、翌月の日付を配列に格納する
    if (weeks[weeks.length - 1].length !== 7) {
      const daysToAdd = 7 - weeks[weeks.length - 1].length;
      for (let day = 1; day <= daysToAdd; day++) {
        weeks[weeks.length - 1].push({ date: day, dayOfWeek: currentWeek });
      }
    }

    return weeks;
  }
};
const WeekRow = ({ week, lastWeek }) => {
  return (
    <Box display={{ xs: "none", md: "flex" }}>
      {week.map((day) =>
        lastWeek ? (
          <Box
            key={day.date}
            sx={{
              aspectRatio: "1 / 1",
              border: "1px #111 solid",
              width: "100%",
              backgroundColor: "#eee",
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            {day.date}
          </Box>
        ) : (
          <Box
            key={day.date}
            sx={{
              aspectRatio: "1 / 1",
              border: "1px #111 solid",
              width: "40%",
            }}
          >
            {day.date}
          </Box>
        )
      )}
    </Box>
  );
};

const WeekCalendar = ({ year, month }) => {
  const weeksOfMonth = getMonthData(year, month); // 月初めの日付と曜日を計算する関数
  return (
    <Box>
      {weeksOfMonth.map((week, index) => (
        <WeekRow key={index} week={week} />
      ))}
    </Box>
  );
};

// カレンダーコンポーネントの利用例
const Calendar = () => {
  const {
    currentYearMonth,
    handleNextMonth,
    handlePrevMonth,
    handleNextYear,
    handlePrevYear,
  } = useYearMonth();

  return (
    <>
      <Box>
        <Typography variant='h4'>
          {currentYearMonth.format("YYYY年MM月")}
        </Typography>
        <Button variant='outlined' onClick={handlePrevYear}>
          Previous Year
        </Button>
        <Button variant='outlined' onClick={handlePrevMonth}>
          Previous Month
        </Button>

        <Button variant='outlined' onClick={handleNextMonth}>
          Next Month
        </Button>
        <Button variant='outlined' onClick={handleNextYear}>
          Next Year
        </Button>
      </Box>
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
        <DayOfTheWeek>日</DayOfTheWeek>
        <DayOfTheWeek>月</DayOfTheWeek>
        <DayOfTheWeek>火</DayOfTheWeek>
        <DayOfTheWeek>水</DayOfTheWeek>
        <DayOfTheWeek>木</DayOfTheWeek>
        <DayOfTheWeek>金</DayOfTheWeek>
        <DayOfTheWeek>土</DayOfTheWeek>
      </Box>
      <WeekCalendar
        year={currentYearMonth.year()}
        month={currentYearMonth.month()}
      />
    </>
  );
};

export default Calendar;

const DayOfTheWeek = styled(Box)`
  text-align: center;
  border-top: solid 1px #111;
  border-bottom: 1px solid #111;
`;
