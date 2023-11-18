import { Box, Typography } from "@mui/material";
import GoogleButton from "react-google-button";
import handleGoogleLogin from "../components/auth/handleGoogleLogin";
import { Navigate, useNavigate } from "react-router-dom";
import { firebaseAuth } from "../utils/firebaseConfig.js";
import { useState } from "react";
import logo from "../assets/img/logo.png";
import outlook from "../assets/img/outlook_logo.png";
import googleCalerndar from "../assets/img/google_calendar.png";

const TopPage = () => {
  const navigate = useNavigate();
  const handleListRedirect = async () => {
    try {
      await handleGoogleLogin();
      navigate("/calendar/list");
    } catch (error) {
      console.error("Google login failed:", error);
    }
  };
  const [firebaseUser, seuFirebaseUser] = useState(firebaseAuth.currentUser);
  return firebaseUser ? (
    <Navigate to={"/calendar/list"} />
  ) : (
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
        <img src={logo} alt="ロゴ" />

        <Box
          sx={{
            margin: "20px 0",
            display: "flex",
            justifyContent: "space-between",
            alignContent: "center",
            alignItems: "center",
            p: 2,
          }}
        >
          <GoogleButton onClick={handleListRedirect} />
        </Box>

        <Box>
          <Typography variant="body1" color="text.secondary" align="center">
            このサービスはGoogleカレンダーを利用しています。
            <br />
            Googleアカウントでログインしてください。
          </Typography>
        </Box>

        <Box
          sx={{
            margin: "50px 0",
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <img
            src={googleCalerndar}
            alt="googleカレンダー"
            style={{
              padding: "0 20px",
            }}
          />
        </Box>
      </Box>
    </>
  );
};

export default TopPage;
