import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { AuthContext } from "./AuthContext";
import { auth } from "../firebase/firebase.config";
import { useEffect, useState } from "react";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [myCarLoading, setMyCarLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();

  const createUserWithEmail = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const updateUser = (updateInfo) => {
    return updateProfile(auth.currentUser, updateInfo);
  };

  const logOut = () => {
    return signOut(auth);
  };

  const logIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logInWithGoogel = () => {
    return signInWithPopup(auth, googleProvider);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const authInfo = {
    user,
    setUser,
    createUserWithEmail,
    updateUser,
    logOut,
    logIn,
    loading,
    setLoading,
    myCarLoading,
    setMyCarLoading,
    logInWithGoogel,
  };

  return <AuthContext value={authInfo}>{children}</AuthContext>;
};
export default AuthProvider;
