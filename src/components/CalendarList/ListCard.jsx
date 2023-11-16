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
      <Grid container spacing={5}>
        {data.map((item) => (
          <Grid
            item
            key={data.calender_name}
            sx={{
              width: "100%",
              margin:"30px auto 30px auto",
            }}
          >
            <Paper
              sx={{
                margin:"0 auto 0 auto",
                padding:"20px 100px 20px 30px",                
                width: "65%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                flexWrap: "wrap",
              }}
            >

                <Box>
                  <Typography sx={{display:'inline', opacity:0.65, fontSize:"1.3rem"}}>カレンダー名：</Typography>
                  <Typography sx={{display:"inline", fontSize:"1.3rem"}}>{item.calender_name}</Typography>
                </Box>
    
                <Box>
                <Typography sx={{display:'inline', opacity:0.65, fontSize:"1.3rem"}}>作成者：</Typography>
                  <Typography sx={{display:"inline", fontSize:"1.3rem"}}>{item.create_user}</Typography>
                </Box>              
                
                <Box>
                  <IconButton>
                    <ShareIcon fontSize="large"/>
                  </IconButton>
                </Box>
                <Box sx={{}}>
                  <IconButton>
                    <DeleteIcon fontSize="large"/>
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
