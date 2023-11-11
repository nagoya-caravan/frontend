import React, { useState, useEffect } from "react";
import moment from "moment";
import Box from "@mui/material/Box";
import { Button, Chip, Typography } from "@mui/material";
import { ChangeMonth } from "../hooks/useChangeMonth";
const CalendarComponent = () => {
  const { currentMonth, handleNextMonth, handlePrevMonth } = ChangeMonth();

  const [calendar, setCalendar] = useState([]);

  useEffect(() => {
    const start = currentMonth.clone(); //ここで月初を取得
    const end = moment(start).endOf("month"); //ここで月末を取得
    const newCalendar = [];
    console.log(start);
    console.log(end);
    const dayOfWeek = start.day(); //ここで月初の曜日を取得

    const prevMonthEnd = start.clone().subtract(1, "day"); //ここで先月末を取得
    const prevMonthStart = prevMonthEnd.clone().subtract(dayOfWeek - 1, "days"); //ここで先月初を取得

    let iterDate = prevMonthStart.clone(); //ここで先月初をイテレータに代入
    while (iterDate.isSameOrBefore(prevMonthEnd)) {
      //ここで先月末まで繰り返す
      newCalendar.push(
        <Box
          sx={{ aspectRatio: "1 / 1", border: "1px #111 solid" }}
          key={iterDate.format("MD")}
        >
          <Typography
            sx={{
              ml: 1,
              mt: 1,
              fontSize: "16px",
              color: "rgba(1, 1, 1, 0.5)",
            }}
          >
            {iterDate.format("D")}
          </Typography>
        </Box>
      );
      iterDate.add(1, "days"); //ここでイテレータを1日進める
    }

    iterDate = start.clone();

    //ここから月初から月末まで繰り返す
    while (iterDate.isSameOrBefore(end)) {
      //ここで月末まで繰り返す
      newCalendar.push(
        <Box
          sx={{
            aspectRatio: "1 / 1",
            border: "1px #111 solid",
          }}
          key={iterDate.format("MD")}
        >
          <Box>
            <Typography
              sx={{
                ml: 1,
                mt: 1,
                fontSize: "16px",
              }}
            >
              {iterDate.format("D")}
            </Typography>
          </Box>
          <Box
            sx={{
              width: "100%",
            }}
          >
            <Chip
              sx={{
                mt: 1,
                width: "100%",
              }}
            />
          </Box>
        </Box>
      );
      iterDate.add(1, "days");
    }

    //ここから月末の翌日から繰り返す
    iterDate = end.clone().add(1, "days"); //ここで月末の翌日をイテレータに代入
    while (newCalendar.length % 7 !== 0) {
      newCalendar.push(
        <Box
          sx={{ aspectRatio: "1 / 1", border: "1px #111 solid" }}
          key={iterDate.format("MD")}
        >
          <Typography
            sx={{
              ml: 1,
              mt: 1,
              fontSize: "16px",
              color: "rgba(1, 1, 1, 0.5)",
            }}
          >
            {iterDate.format("D")}
          </Typography>
        </Box>
      );
      iterDate.add(1, "days");
    }

    setCalendar(newCalendar);
  }, [currentMonth]);

  return (
    <Box
      sx={{
        mt: 3,
        background: "#fff",
      }}
    >
      <Box
        sx={{
          width: "30%",
          textAlign: "center",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Button
          variant='outlined'
          sx={{
            my: 2,
          }}
          onClick={() => handleNextMonth()}
        >
          {"<"}
        </Button>
        {currentMonth.format("YYYY年M月")}
        <Button
          variant='outlined'
          sx={{
            my: 2,
          }}
          onClick={() => handlePrevMonth()}
        >
          {">"}
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
        {calendar}
      </Box>
    </Box>
  );
};
const Calendar = React.memo(CalendarComponent, () => "Calendar");
export default Calendar;
