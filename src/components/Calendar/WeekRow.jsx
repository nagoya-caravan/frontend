import { Box } from "@mui/material";
const WeekRow = (props) => {
  const { week, lastWeek } = props;
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

export default WeekRow;
