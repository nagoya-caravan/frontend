import { Box, Typography } from "@mui/material";
import Calendar from "../components/Calendar/Calendar";
const CalendarPage = () => {
  return (
    <Box>
      <Box sx={{ margin: "0 36px 36px 100px" }}>
        <Calendar />
      </Box>
    </Box>
  );
};

export default CalendarPage;
