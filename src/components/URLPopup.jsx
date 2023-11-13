import { useState } from "react";

import { Button, Input, Typography, Modal, Box } from "@mui/material";

export const URLPopup = () => {
  const [open, setOpen] = useState(false);
  const [inputURL, setInputURL] = useState("");
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const urlValidation = /^(https?:\/\/).*/;
  const isValidURL = urlValidation.test(inputURL);

  return (
    <div>
      <Button onClick={handleOpen}>Open Modal</Button>
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
        </Box>
      </Modal>
    </div>
  );
};
