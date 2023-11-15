import { Box } from "@mui/material";
const WeekRow = (props) => {
  const { year, month, week } = props;
  //  {year} {month + 1}
  return (
    <Box display={{ xs: "none", md: "flex" }}>
      {week.map((day) => (
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
      ))}
    </Box>
  );
};
export default WeekRow;
