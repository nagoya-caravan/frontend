import { useState } from "react";

import { IconButton, Input, Typography, Modal, Box } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const URLPopup = () => {
  const [open, setOpen] = useState(false);
  const [inputURL, setInputURL] = useState("");
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const urlValidation = /^(https?:\/\/).*/;
  const isValidURL = urlValidation.test(inputURL);

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
            p: 4,
          }}
        >
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
            CalendarURL
          </Typography>
          <Input
            placeholder='CalendarURL'
            value={inputURL}
            onChange={(e) => setInputURL(e.target.value)} // 3. Detecting input changes
          />
          {!isValidURL && inputURL && (
            <Typography color='error'>URLが間違っています</Typography>
          )}
          <Button
            variant='contained'
            onClick={handleClose}
            disabled={!isValidURL}
          >
            作成
          </Button>
        </Box>
      </Modal>
    </>
  );
};

export default URLPopup;
