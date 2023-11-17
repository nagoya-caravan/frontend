import { useState } from "react";
import {
  IconButton,
  Button,
  Input,
  Typography,
  Modal,
  Box,
} from "@mui/material";
import { createCalender } from "../api/apis";
import AddIcon from "@mui/icons-material/Add";
import { firebaseAuth } from "../utils/firebaseConfig";
const URLPopup = () => {
  const [open, setOpen] = useState(false);
  const [inputURL, setInputURL] = useState("");
  const [calenderName, setCalenderName] = useState("");

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const urlValidation = /^(https?:\/\/).*/;
  const isValidURL = urlValidation.test(inputURL);

  const firebaseUser = firebaseAuth.currentUser;
  if (!firebaseUser) {
    console.error("No current user");
  }
  function handleCreateCalendar() {
    createCalender(
      {
        ical_url: inputURL,
        calender_name: calenderName,
      },
      firebaseUser
    )
      .then(() => {
        console.log("カレンダーを作成しました");
      })
      .catch((error) => {
        console.error(error);
      });
  }
  return (
    <>
      <IconButton variant='outlined' onClick={handleOpen}>
        <AddIcon />
      </IconButton>
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
            display: "flex",
            p: 4,
          }}
        >
          <Box>
            <Typography
              variant='h6'
              component='h2'
              sx={{
                fontSize: "24px",
                fontWeight: "bold",
                color: "black",
                mb: 2,
              }}
            >
              カレンダー作成
            </Typography>
            <Input
              placeholder='カレンダーURL'
              value={inputURL}
              onChange={(e) => setInputURL(e.target.value)} // 3. Detecting input changes
            />
            {!isValidURL && inputURL && (
              <Typography color='error'>URLが間違っています</Typography>
            )}
            <Input
              sx={{ mt: 3 }}
              placeholder='カレンダー名'
              value={calenderName}
              onChange={(e) => setCalenderName(e.target.value)}
            />
          </Box>
          <Box>
            <Button
              sx={{
                position: "relative",
                top: "85%",
                left: "30%",
              }}
              variant='contained'
              onClick={() => {
                handleCreateCalendar();
                handleClose();
                //りだいれくと
              }}
              disabled={!isValidURL || calenderName === ""}
              type='submit'
            >
              作成
            </Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default URLPopup;
