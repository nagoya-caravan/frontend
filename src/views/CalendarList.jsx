import { Box, Grid, Typography } from "@mui/material";

const CalendarList = () => {
  //apiあらデータ取得した時のことを想定して打mーデータをmapで回す
  const data = [
    {
      id: 1,
      title: "test",
    },
    {
      id: 2,
      title: "test2",
    },
  ];
  return (
    <Box>
      <Typography>CalendarList</Typography>
      <Grid container>
        {data.map((item) => (
          <Grid item key={item.id}></Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CalendarList;
