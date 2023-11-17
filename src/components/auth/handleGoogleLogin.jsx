import {
  signInWithPopup,
  GoogleAuthProvider,
  setPersistence,
  browserLocalPersistence,
} from "firebase/auth";
import { firebaseAuth } from "../../utils/firebaseConfig";
import { getUser } from "../../api/apis";

const handleGoogleLogin = async () => {
  const provider = new GoogleAuthProvider();

  // ログイン状態の永続化を設定
  try {
    // ログイン状態をローカルで永続化
    await setPersistence(firebaseAuth, browserLocalPersistence);

    // Googleでのログイン処理
    await signInWithPopup(firebaseAuth, provider);
    const firebaseUser = firebaseAuth.currentUser;

    if (!firebaseUser) throw new Error("No current user");
    // ユーザー情報の取得
    await getUser(firebaseUser);
    //リダイレクト処理
    window.location.href = "/calendar";
    console.log("Google login successful");
  } catch (error) {
    console.error("Google login failed:", error);
  }
};

export default handleGoogleLogin;
