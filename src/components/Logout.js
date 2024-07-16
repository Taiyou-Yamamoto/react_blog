import React from "react";
import { auth, provider } from "../firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Logout = ({ setIsAuth }) => {
  const navigate = useNavigate();
  const logout = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      navigate("/login");
    });
  };

  return (
    <div>
      <p>ログアウト</p>
      <button onClick={logout}>ログアウト</button>
    </div>
  );
};

export default Logout;
