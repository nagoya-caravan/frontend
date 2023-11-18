import {
  Box,
  Grid,
  Typography,
  Paper,
  IconButton,
  Button,
} from "@mui/material";
import ShareIcon from "@mui/icons-material/Share";
import DeleteIcon from "@mui/icons-material/Delete";
import { getCalenderList } from "../../api/apis";
import { useState, useEffect } from "react";
import { firebaseAuth } from "../../utils/firebaseConfig";
import { Link } from "react-router-dom";

const CalendarListCard = () => {
  const firebaseUser = firebaseAuth.currentUser;
  const [calendars, setCalendars] = useState([]);

  useEffect(() => {
    getCalenderList(undefined, firebaseUser)
      .then((calendars) => {
        setCalendars(calendars);
      })
      .catch((reason) => {
        console.error(reason.apiErrorResponse.message);
      });
  }, [calendars]);

  console.log(calendars);
  const data = calendars;
  return (
    <Box>
      <Grid container spacing={5}>
        {data.map(
          (item) => (
            console.log(item.calender_id),
            (
              <Grid
                item
                key={item.calender_name}
                sx={{
                  width: "100%",
                  margin: "30px auto 30px auto",
                }}
              >
                <Paper
                  sx={{
                    margin: "0 auto 0 auto",
                    padding: "20px 100px 20px 30px",
                    width: "65%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    flexWrap: "wrap",
                  }}
                >
                  <Box>
                    <Typography
                      sx={{
                        display: "inline",
                        opacity: 0.65,
                        fontSize: "1.3rem",
                      }}
                    >
                      カレンダー名：
                    </Typography>
                    <Typography sx={{ display: "inline", fontSize: "1.3rem" }}>
                      {item.calender_name}
                    </Typography>
                  </Box>

                  <Box>
                    <IconButton>
                      <ShareIcon fontSize='large' />
                    </IconButton>
                  </Box>
                  <Box>
                    <IconButton>
                      <DeleteIcon fontSize='large' />
                    </IconButton>
                  </Box>
                  <Box>
                    <Link to={`/calendar/${item.calender_id}`}>
                      <Button>編集</Button>
                    </Link>
                  </Box>
                </Paper>
              </Grid>
            )
          )
        )}
      </Grid>
    </Box>
  );
};

export default CalendarListCard;
