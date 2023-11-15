import { signInWithPopup } from "firebase/auth";
import GoogleButton from "react-google-button";
import { auth } from "../../utils/firebaseConfig";
const LoginButton = () => {
  const handleGoogleLogin = async () => {
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
