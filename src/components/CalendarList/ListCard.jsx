import { Box, Grid, Typography, Paper, IconButton } from "@mui/material";
import ShareIcon from "@mui/icons-material/Share";
import DeleteIcon from "@mui/icons-material/Delete";
const CalendarListCard = () => {
  const data = [
    {
      calender_name: "name",
      create_user: "user",
    },

    {
      calender_name: "name2",
      create_user: "user2",
    },
  ];
  return (
    <Box>
      <Grid container spacing={2}>
        {data.map((item) => (
          <Grid
            item
            key={data.calender_name}
            sx={{
              width: "80%",
            }}
          >
            <Paper
              sx={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                flexWrap: "wrap",
              }}
            >
              <Typography>{item.calender_name}</Typography>
              <Typography>{item.create_user}</Typography>
              <Box>
                <IconButton>
                  <ShareIcon />
                </IconButton>
              </Box>
              <Box>
                <IconButton>
                  <DeleteIcon />
                </IconButton>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CalendarListCard;
