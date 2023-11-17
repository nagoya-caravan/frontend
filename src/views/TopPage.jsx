import { Box, Typography } from "@mui/material";
import GoogleButton from "react-google-button";
import handleGoogleLogin from "../components/auth/handleGoogleLogin";
import { navigate } from "react-router-dom";

const TopPage = () => {
  const handleListRedirect = async () => {
    try {
      await handleGoogleLogin();
      navigate("/list");
    } catch (error) {
      console.error("Google login failed:", error);
    }
  };

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
        <Typography variant='h4'>LeafSchedule</Typography>

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
          <GoogleButton onClick={handleListRedirect} />
        </Box>
      </Box>
    </>
  );
};

export default TopPage;
