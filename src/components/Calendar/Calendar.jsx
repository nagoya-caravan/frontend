import moment from "moment";
import { Button, Box, Typography, TextField, IconButton } from "@mui/material";
import styled from "styled-components";
import useYearMonth from "../../hooks/useYearMonth";
import { useState } from "react";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
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
    setCurrentYearMonth,
    handleNextMonth,
    handlePrevMonth,
    handleNextYear,
    handlePrevYear,
  } = useYearMonth();

  const [clickedDate, setClickedDate] = useState(false);

  return (
    <>
      <Box sx={{}}>
        {clickedDate === false ? (
          <IconButton
            onClick={() => {
              setClickedDate(true);
            }}
          >
            <Typography variant='h4'>
              {currentYearMonth.format("YYYY年MM月")}
            </Typography>
          </IconButton>
        ) : (
          <TextField
            onBlur={() => {
              setClickedDate(false);
            }}
            placeholder={currentYearMonth.format("YYYY/MM")}
            typeof='text'
            variant='standard'
            //enterキーで年月を変更する
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                const inputYearMonth = e.target.value;
                const year = inputYearMonth.slice(0, 4);
                const month = inputYearMonth.slice(5, 7);
                if (year && month) {
                  setCurrentYearMonth(moment([year, month - 1]));
                  setClickedDate(false);
                } else {
                  alert("正しい年月を入力してください");
                }
              }
            }}
          />
        )}
        <IconButton variant='outlined' onClick={handlePrevYear}>
          <KeyboardDoubleArrowLeftIcon />
        </IconButton>
        <IconButton variant='outlined' onClick={handlePrevMonth}>
          <KeyboardArrowLeftIcon />
        </IconButton>

        <IconButton variant='outlined' onClick={handleNextMonth}>
          <KeyboardArrowRightIcon />
        </IconButton>
        <IconButton variant='outlined' onClick={handleNextYear}>
          <KeyboardDoubleArrowRightIcon />
        </IconButton>
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
