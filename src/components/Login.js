import React from "react";
import { auth, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Login = ({ setIsAuth }) => {
  const loginWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      // console.log(result);
      localStorage.setItem("isAuth", true);
      setIsAuth(true);
    });
  };

  return (
    <div>
      <p>ログインして始める</p>
      <button onClick={loginWithGoogle}>Googleでログイン</button>
    </div>
  );
};

export default Login;
