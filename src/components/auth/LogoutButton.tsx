import React from "react";
import { auth } from "../../utils/firebaseConfig";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { Button } from "@mui/material";

const LogoutButton: React.FC = () => {
  const handleGoogleLogout = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      window.location.href = "/login";
      console.log("Google logout successful");
    } catch (error) {
      console.error("Google logout failed:", error);
    }
  };

  return <Button onClick={handleGoogleLogout}>Logout</Button>;
};

export default LogoutButton;
