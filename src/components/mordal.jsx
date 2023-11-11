import * as React from "react";
import { Box, Button, Modal, Typography } from "@mui/material";
import HighlightOffSharpIcon from "@mui/icons-material/HighlightOffSharp";

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

export default function NestedModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button onClick={handleOpen}>ここをクリック</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 400 }}>
          <Box>
            <HighlightOffSharpIcon
              onClick={handleClose}
              sx={{ position: "absolute", right: "30px" }}
            />
          </Box>
          <Typography>
            これであってますか?
            <br /> あってたらボタンを入力してください。
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
