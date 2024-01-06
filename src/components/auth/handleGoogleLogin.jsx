import { Avatar, Box, Button, Typography } from "@mui/material";
import { useContext } from "react";
import { AuthContext } from "@/store/AuthContext";
import useTransition from "@/hooks/useTransition";
import GeneralModal from "../commons/GeneralModal";

const LogoutButton = () => {
  const { logout, currentUser } = useContext(AuthContext);
  const { transitionPage } = useTransition();

  const handleLogout = async () => {
    try {
      await logout();
      transitionPage("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <GeneralModal
        buttonContent={
          <Avatar
            alt={currentUser?.displayName || ""}
            src={currentUser?.photoURL || ""}
          />
        }
      >
        <Box
          sx={{
            textAlign: "center",
          }}
        >
          <Typography>
            {currentUser?.displayName}からログアウトしますか？
          </Typography>
          <Button
            onClick={handleLogout}
            color='error'
            variant='outlined'
            sx={{
              mt: 2,
              "&:hover": {
                opacity: [0.9, 0.8, 0.7],
                color: "#fff",
                backgroundColor: "#f44336",
              },
            }}
          >
            Logout
          </Button>
        </Box>
      </GeneralModal>
    </>
  );
};

export default LogoutButton;
