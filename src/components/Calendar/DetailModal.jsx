import * as React from "react";
import {useState} from "react";
import {Box, Button, CardContent, Chip, Grid, Modal, Typography} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import EventIcon from "@mui/icons-material/Event";
import {editEvent} from "../../api/apis";
import {firebaseAuth} from "../../utils/firebaseConfig.js";
import {Navigate} from "react-router-dom";

// タイトル、日付、要件、一般公開（チェックボックスをつける）、submitボタンをつける

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

export default function DetailModal(props) {
  const {eventData, editable,reload} = props;
  const [open, setOpen] = React.useState(false);
  const firebaseUser = firebaseAuth.currentUser;
  if (firebaseUser == null) return <Navigate to={"/"}/>;
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (<>
    <Chip
      onClick={handleOpen}
      sx={{
        width: "90%", mt: 1, mx: "auto", zIndex: 1,
      }}
      label={eventData.event_title || "予定"}
    />

    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="parent-modal-title"
      aria-describedby="parent-modal-description"
    >
      <Box sx={{...style, width: 400}}>
        <Grid item xs={3}>
          {/* カードのペーパーコンポーネント */}

          <Box sx={{textAlign: "right", margin: "0 30px -20px 0"}}>
            <CloseIcon
              sx={{
                display: "inline-block", position: "absolute", color: "white",
              }}
            />
          </Box>

          <CardContent>
            <Typography
              variant="h4"
              gutterBottom
              sx={{margin: "10px 0 30px 0"}}
            >
              {eventData.event_title || "予定"}
            </Typography>
            {/* 日付 */}
            <Box
              sx={{
                display: "flex", alignItems: "center", marginTop: "20px",
              }}
            >
              <CalendarMonthIcon
                sx={{
                  display: "flex", alignItems: "center", marginRight: "10px",
                }}
              />
              <Typography>開始：{eventData.start.toString()}</Typography>
            </Box>

            {/* 日付 */}
            <Box
              sx={{
                display: "flex", alignItems: "center", marginTop: "20px",
              }}
            >
              <CalendarMonthIcon
                sx={{
                  display: "flex", alignItems: "center", marginRight: "10px",
                }}
              />
              <Typography>終了：{eventData.end.toString()}</Typography>
            </Box>

            {/* 説明 */}
            {eventData.description && <Box
              sx={{
                display: "flex", alignItems: "center", marginTop: "20px",
              }}
            >
              <EventIcon sx={{marginRight: "10px"}}/>
              <Typography variant="h6">予定内容： {eventData.description}</Typography>
            </Box>}
            {/* 場所 */}
            {eventData.location && <Box
              sx={{
                display: "flex", alignItems: "center", marginTop: "20px",
              }}
            >
              <EventIcon sx={{marginRight: "10px"}}/>
              <Typography variant="h6">場所： {eventData.location}</Typography>
            </Box>}

            {editable && (eventData.is_show
                ? <Button
                  onClick={() => setIsShowEvent(eventData.event_id, firebaseUser, false, reload)}
                >非公開にする</Button>
                : <Button
                  onClick={() => setIsShowEvent(eventData.event_id, firebaseUser, true, reload)}
                >公開する</Button>
            )}

          </CardContent>
        </Grid>
      </Box>
    </Modal>
  </>);
}

function setIsShowEvent(event_id, firebaseUser, isShow, reload) {
  editEvent(event_id, firebaseUser, isShow).then(() => reload()).catch(reason =>
    console.error(reason.apiErrorResponse ? reason.apiErrorResponse.message : reason),
  );
}