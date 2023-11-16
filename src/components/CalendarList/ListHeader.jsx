import { Box, Typography } from "@mui/material";

const CalendarListHeader = () => {
  return (
    <>
    <Box sx={{position:"fix", margin:"100px 0 30px 0", textAlign:"center"}}>
      <Typography variant='h3'>Calendar List</Typography>

      {/* <Box
        sx={{
          margin:"60px auto 30px auto",
          padding:"0 0px 0 20px",
          width: "85%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          opacity: 0.6
        }}
      >
        <Typography>カレンダー名</Typography>
        <Typography>作成者</Typography>
        <Typography>共有</Typography>
        <Typography>削除</Typography>
      </Box> */}
      
    </Box>
    </>
  );
};

export default CalendarListHeader;
