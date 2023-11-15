import { Details } from "@mui/icons-material";
import { Box, Grid, Typography, Paper } from "@mui/material";


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
    {
      id: 3,
      title: "test3",
    },
    {
      id: 4,
      title: "test4",
    },
    {
      id: 4,
      title: "test4",
    },
    {
      id: 4,
      title: "test4",
    },
  ];

  const example = [
    { id: 1, title: "apple" },
    { id: 2, title: "google" },
    { id: 3, title: "facebook" },
    { id: 4, title: "amazon" },
    { id: 5, title: "tesla" },
    { id: 6, title: "microsoft" },
  ];

  return (
    <DetailModal />
    <Box>
      <Typography>CalendarList</Typography>
      <Grid container xs={12} sx={{ width: "100%", textAlign: "center" }}>
        {data.map((item) => (
          <Grid item key={item.id} sx={3}>
            <Paper
              elevation={3}
              sx={{
                height: 50,
                width: 50,
                margin: "0 0 10px 10px",
                padding: "20px 20px 20px 20px",
              }}
            >
              {item.title}
            </Paper>
          </Grid>
        ))}
        {example.map((item) => (
          <Grid item key={item.id} sx={4}>
            <Paper
              elevation={3}
              sx={{
                height: 50,
                width: 50,
                margin: "0 0 10px 10px",
                padding: "20px 20px 20px 20px",
                textAlign: "center",
              }}
            >
              {item.title}
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CalendarList;
