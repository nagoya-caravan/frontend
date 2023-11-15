import * as React from "react";
import { Box, Button, Modal, Typography, Grid, CardContent } from "@mui/material";
import HighlightOffSharpIcon from "@mui/icons-material/HighlightOffSharp";
import CloseIcon from "@mui/icons-material/Close";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import EventIcon from '@mui/icons-material/Event';
import LockOpenIcon from '@mui/icons-material/LockOpen';

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

export default function DetailModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button onClick={handleOpen} sx={{ backgroundColor: "green" }}>
        Click Here
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 400 }}>
        <Grid item xs={3}>
            {/* カードのペーパーコンポーネント */}

            <Box sx={{ textAlign: "right", margin: "0 30px -20px 0" }}>
              <CloseIcon
                sx={{
                  display: "inline-block",
                  position: "absolute",
                  color: "white",
                }}
              />
            </Box>

            {/* カードコンテンツ */}
            <CardContent sx={{}}>
              {/* タイトル */}
              {/* displaybox, あらいんアイテムずセンター */}

              <Typography variant='h4' gutterBottom sx={{margin:"10px 0 30px 0"}}>
                予定タイトル
              </Typography>
              {/* 日付 */}
              <Box sx={{display:"flex", alignItems:"center", marginTop:"20px"}}> 
                <CalendarMonthIcon sx={{display:"flex", alignItems:"center", marginRight:"10px"}}/>
                <Typography>日付：{"2023/11/15"}</Typography>
              </Box>
              
              {/* カードタイトル */}
              <Box sx={{display:"flex", alignItems:"center", marginTop:"20px"}}>
              <EventIcon sx={{marginRight:"10px"}}/>
              <Typography variant='h6'>
                予定内容： </Typography>
              </Box>

              {/* カード詳細 */}
              <Box sx={{display:"flex", alignItems:"center", marginTop:"20px"}}>
              <LockOpenIcon sx={{marginRight:"10px"}}/>
              <Typography variant='h7' color='textSecondary'>
                公開：
                <input type='checkbox' style={{ lineHeight: 0 }} />
              </Typography>
              </Box>
              
              <Box sx={{ textAlign: "right" }}>
                <Button
                  variant='outlined'
                  sx={{ display: "inline-block", position: "relative" }}
                >
                  設定
                </Button>
              </Box>
            </CardContent>
          </Grid>
        </Box>
      </Modal>
    </div>
  );
}
