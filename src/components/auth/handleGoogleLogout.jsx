import { auth } from "../../utils/firebaseConfig";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const handleGoogleLogout = () => {
  const handleGoogleLogout = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      // not use
      // use <Navigate to={"/login"}/>
      // window.location.href = "/login";
      console.log("Google logout successful");
    } catch (error) {
      console.error("Google logout failed:", error);
    }
  };

  return handleGoogleLogout;
};

export default handleGoogleLogout;
