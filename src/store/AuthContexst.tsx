import { createContext, useEffect, useState, VFC, ReactNode } from "react";
import { auth } from "../utils/firebaseConfig";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import React from "react";

export type User = {
  uid: string;
  displayName?: string;
  photoURL?: string;
  token?: string;
};

type AuthContextProps = {
  currentUser: User | null | undefined;
  signInCheck: boolean;
  logout: () => void;
  login: () => Promise<void>;
};

const AuthContext = createContext<AuthContextProps>({
  currentUser: undefined,
  signInCheck: false,
  logout: () => {},
  login: async () => {},
});

const AuthProvider: VFC<{ children: ReactNode }> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  const [signInCheck, setSignInCheck] = useState(false);

  const logout = () => {
    try {
      auth.signOut();
      setSignInCheck(false);
      console.log("logout");
    } catch (err) {
      console.log(err);
    }
  };

  const login = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const res = await signInWithPopup(auth, provider);
      console.log(res.user);
    } catch (err) {
      console.log(err);
    }
  };

  // ログイン状態を確認する
  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        setCurrentUser({
          uid: user.uid || "",
          displayName: user.displayName || "",
          photoURL: user.photoURL || "",
        });
        localStorage.setItem("token", await user.getIdToken());
        setSignInCheck(true);
      } else {
        setSignInCheck(false);
      }
    });
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser, signInCheck, logout, login }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
