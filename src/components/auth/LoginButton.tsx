import React from "react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import GoogleButton from "react-google-button";
import { Box, Button } from "@mui/material";
import { auth } from "../../utils/firebaseConfig";
const LoginButton: React.FC = () => {
  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    const user = auth.currentUser;
    try {
      await signInWithPopup(auth, provider);

      console.log("Google login successful");
    } catch (error) {
      console.error("Google login failed:", error);
    }
  };
  return (
    <GoogleButton onClick={handleGoogleLogin}>Login with Google</GoogleButton>
  );
};
export default LoginButton;
