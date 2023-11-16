import { Box, Typography } from "@mui/material";

const CalendarListHeader = () => {
  return (
    <>
      <Typography variant='h4'>カレンダー一覧</Typography>

      <Box
        sx={{
          width: "80%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        <Typography>カレンダー名</Typography>
        <Typography>作成者</Typography>
        <Typography>共有</Typography>
        <Typography>削除</Typography>
      </Box>
    </>
  );
};

export default CalendarListHeader;
