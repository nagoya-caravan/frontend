import { useContext } from "react";
import { Button } from "@mui/material";
import { AuthContext } from "@/store/AuthContext";

export const LoginButton = () => {
  const { login } = useContext(AuthContext);

  const handleLogin = async () => {
    try {
      await login();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Button
      sx={{
        color: "#fff",
        "&:hover": {
          backgroundColor: "transparent",
          opacity: [0.9, 0.8, 0.7],
        },
      }}
      onClick={handleLogin}
    >
      GoogleLogin
    </Button>
  );
};
