import { Box } from "@mui/material";
import { CalendarEvents } from "./CalendarEvents.jsx";
import { useRef } from "react";

const WeekRow = (props) => {
  const { year, month, week, isFirstWeek, isLastWeek } = props;
  const weekElementRef = useRef();

  //ここでapiからデータを取得
  return (
    <Box
      sx={{
        border: "2px #999 solid",
        margin: "0 0 -2px",
        position: "relative",
      }}
    >
      <Box display={{ xs: "none", md: "flex" }} ref={weekElementRef}>
        {week.map((day) => (
          <Box
            key={day.date}
            sx={{
              aspectRatio: "1 / 1",
              border: "1px #ccc solid",
              width: "40%",
            }}
          >
            <Box sx={{ padding: "10px 0 0 10px" }}>{day.date}</Box>

            {/*<Box sx={{textAlign: "center"}}>*/}
            {/*  <DetailModal/>*/}
            {/*</Box>*/}
          </Box>
        ))}
      </Box>
      <CalendarEvents
        year={year}
        month={month}
        week={week}
        isFirstWeek={isFirstWeek}
        isLastWeek={isLastWeek}
        weekElementRef={weekElementRef}
      />
    </Box>
  );
};

export default WeekRow;
