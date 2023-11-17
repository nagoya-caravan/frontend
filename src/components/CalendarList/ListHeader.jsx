import { Box, Typography } from "@mui/material";

const CalendarListHeader = () => {
  return (
    <>
      <Box
        sx={{ position: "fix", margin: "100px 0 30px 0", textAlign: "center" }}
      >
        <Typography variant='h3'>Calendar List</Typography>
      </Box>
    </>
  );
};

export default CalendarListHeader;
