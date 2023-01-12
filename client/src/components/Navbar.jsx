import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { logoutAPI } from "../Redux/auth/auth.actions";
import style from "../style/Navbar.module.css"

const Navbar = () => {
  const dispatch = useDispatch();
  const { isAuth } = useSelector((state) => state.auth);
  const handleLoginClick = () => {
    dispatch(logoutAPI());
    
  };
  return (
    <div className={style.nav}>
      <Link to="/login">
        <div>Login</div>
      </Link>
      <Link to="/">
        <div>Breeds</div>
      </Link>
      <div onClick={handleLoginClick}>{isAuth ? "Logout" : "Login"}</div>
    </div>
  );
};

export default Navbar;
