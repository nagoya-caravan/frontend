import { signInWithPopup } from "firebase/auth";
import GoogleButton from "react-google-button";
import { auth } from "../../utils/firebaseConfig";
import { GoogleAuthProvider } from "firebase/auth";
const LoginButton = () => {
  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    const user = auth.currentUser;
    console.log(user);
    try {
      await signInWithPopup(auth, provider);

      const postUser = async () => {
        const firebaseUser = auth.currentUser;
        if (!firebaseUser) throw new Error("No current user");

        try {
          const existingUser = await getUser(); // getUser関数を呼び出して結果を取得します

          if (existingUser) {
            console.log("user already exists");
            return existingUser;
          } else {
         
      postUser();
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
