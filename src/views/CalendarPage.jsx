import { Box } from "@mui/material";
import Calendar from "../components/Calendar/Calendar";
const CalendarPage = () => {
  return (

    <Box
      sx={{
        width: "85%",
        height: "100vh",
        margin: "auto",
      }}
    >
      <Calendar />
    </Box>
  );
};

export default CalendarPage;
