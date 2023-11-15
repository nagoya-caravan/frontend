import { Box } from "@mui/material";
import DetailModal from "./DetailModal";
const WeekRow = (props) => {
  const { year, month, week } = props;
  //  {year} {month + 1}

  //ここでapiからデータを取得
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
          <Box>{day.date}</Box>

          <Box>
            <DetailModal />
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default WeekRow;
