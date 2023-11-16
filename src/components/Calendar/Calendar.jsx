import moment from "moment";
import { useState } from "react";
import { Box, Typography, TextField, IconButton } from "@mui/material";
import styled from "styled-components";
import useYearMonth from "../../hooks/useYearMonth";
import WeekCalendar from "./WeekCalendar";

import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
// 月初めの日付と曜日を計算する関数

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
      <Box sx={{ margin: "100px 0 0 0" }}>
        <IconButton variant="outlined" onClick={handlePrevYear}>
          <KeyboardDoubleArrowLeftIcon fontSize="large" />
        </IconButton>
        <IconButton variant="outlined" onClick={handlePrevMonth}>
          <KeyboardArrowLeftIcon fontSize="large" />
        </IconButton>

        {clickedDate === false ? (
          <IconButton
            onClick={() => {
              setClickedDate(true);
            }}
          >
            <Typography variant="h5">
              {currentYearMonth.format("YYYY年MM月")}
            </Typography>
          </IconButton>
        ) : (
          <TextField
            onBlur={() => {
              setClickedDate(false);
            }}
            placeholder={currentYearMonth.format("YYYY/MM")}
            typeof="text"
            variant="standard"
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
            size="large"
            sx={{ margin: "8.49px 10px 8.49px 10px" }}
          />
        )}

        <IconButton variant="outlined" onClick={handleNextMonth}>
          <KeyboardArrowRightIcon fontSize="large" />
        </IconButton>
        <IconButton variant="outlined" onClick={handleNextYear}>
          <KeyboardDoubleArrowRightIcon fontSize="large" />
        </IconButton>
      </Box>
      <Box
        sx={{
          width: "100%",
          display: "grid",
          gridAutoFlow: "row",
          gridTemplateColumns: "repeat(7, 1fr)",
          gap: 0,
          // borderBottom: "solid 1px #111",
          // borderLeft: "solid 1px #111",
          // borderRight: "solid 1px #111",
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
  margin: 30px 0 10px 0;
`;
