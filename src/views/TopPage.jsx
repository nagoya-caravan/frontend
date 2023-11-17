import {Box, Typography} from "@mui/material";
import GoogleButton from "react-google-button";
import handleGoogleLogin from "../components/auth/handleGoogleLogin";
import {Navigate, useNavigate} from "react-router-dom";
import {firebaseAuth} from "../utils/firebaseConfig.js";
import {useState} from "react";

const TopPage = () => {
  const navigate = useNavigate();
  const handleListRedirect = async () => {
    try {
      await handleGoogleLogin();
      navigate("/calendar/7");
    } catch (error) {
      console.error("Google login failed:", error);
    }
  };
  const [firebaseUser, seuFirebaseUser] = useState(firebaseAuth.currentUser);
  return firebaseUser ? <Navigate to={"/calendar/7"}/>
    : (
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
          <Typography variant="h4">LeafSchedule</Typography>

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
            <GoogleButton onClick={handleListRedirect}/>
          </Box>
        </Box>
      </>
    );
};

export default TopPage;
