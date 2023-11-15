import * as React from "react";
import {
  Box,
  Button,
  Modal,
  Typography,
  Grid,
  Paper,
  CardMedia,
  CardContent,
} from "@mui/material";
import HighlightOffSharpIcon from "@mui/icons-material/HighlightOffSharp";
import CloseIcon from "@mui/icons-material/Close";

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
      <Button onClick={handleOpen}>ここをクリック</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 400 }}>
          <Grid item xs={3} key={index}>
            {/* カードのペーパーコンポーネント */}
            <Paper
              elevation={5}
              style={{ borderRadius: "8px", backgroundColor: "white" }}
            >
              <Typography
                sx={{
                  fontSize: "40px",
                  margin: "0 0 -60px 10px",
                  position: "relative",
                  zIndex: 2,
                  color: "white",
                }}
              >
                {item}
              </Typography>
              <Box sx={{ textAlign: "right", margin: "0 30px -20px 0" }}>
                <CloseIcon
                  sx={{
                    display: "inline-block",
                    position: "absolute",
                    color: "white",
                  }}
                />
              </Box>

              {/* カードメディア */}
              <CardMedia
                component="img"
                height="150"
                src={picture}
                alt={`Card Image ${item}`}
                style={{
                  borderTopLeftRadius: "8px",
                  borderTopRightRadius: "8px",
                }}
              />
              {/* カードコンテンツ */}
              <CardContent>
                {/* 日付 */}
                <Typography>日付： {"2023/11/15"}</Typography>
                {/* カードタイトル */}
                <Typography variant="h6">予定内容： {item}</Typography>
                {/* カード詳細 */}
                <Typography variant="h7" color="textSecondary">
                  公開：
                  <input type="checkbox" style={{ lineHeight: 0 }} />
                </Typography>
                <Box sx={{ textAlign: "right" }}>
                  <Button
                    variant="outlined"
                    sx={{ display: "inline-block", position: "relative" }}
                  >
                    設定
                  </Button>
                </Box>
              </CardContent>
            </Paper>
          </Grid>
        </Box>
      </Modal>
    </div>
  );
}
