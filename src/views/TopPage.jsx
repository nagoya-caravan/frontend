import {Box, Typography} from "@mui/material";
import GoogleButton from "react-google-button";
import handleGoogleLogin from "../components/auth/handleGoogleLogin";
import {firebaseAuth} from "../utils/firebaseConfig.js";
import {Navigate} from "react-router-dom";
import {useState} from "react";

const TopPage = () => {
  const [firebaseUser, seuFirebaseUser] = useState(firebaseAuth.currentUser);
  return firebaseUser ? <Navigate to={"/calendar/3"}/>
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
            <GoogleButton onClick={async () => {
              await handleGoogleLogin(seuFirebaseUser);
            }}/>
          </Box>
        </Box>
      </>
    );
};

export default TopPage;
