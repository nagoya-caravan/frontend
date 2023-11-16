import {
  signInWithPopup,
  GoogleAuthProvider,
  setPersistence,
  browserLocalPersistence,
} from "firebase/auth";
import { auth } from "../../utils/firebaseConfig";
import { getUser } from "../../api/apis";

const LoginButton = () => {
  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();

    // ログイン状態の永続化を設定
    await setPersistence(auth, browserLocalPersistence);

    try {
      // Googleでのログイン処理
      await signInWithPopup(auth, provider);
      const firebaseUser = auth.currentUser;

      if (!firebaseUser) throw new Error("No current user");
      // ユーザー情報の取得
      await getUser(firebaseUser);
      console.log("Google login successful");
    } catch (error) {
      console.error("Google login failed:", error);
    }
  };

  return handleGoogleLogin;
};

export default LoginButton;
