import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import URLPopup from "../components/URLPopup";
import LoginButton from "../components/auth/LoginButton";

const TopPage = () => {
  return (
    <>
      <Box
        sx={{
          margin: "auto",
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          flexDirection: "column",
          alignItems: "center",
          p: 2,
        }}
      >
        <LoginButton />
        <Typography variant='h4'>LeafSchedule</Typography>
        <LoginButton />

        <Box
          sx={{
            width: "30%",
            display: "flex",
            justifyContent: "space-between",
            alignContent: "center",
            alignItems: "center",
            p: 2,
          }}
        >
          <URLPopup />
          <Box>
            <Link to='/list'>
              <Button variant='outlined'>カレンダー編集</Button>
            </Link>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default TopPage;
