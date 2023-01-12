import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { loginAPI } from "../Redux/auth/auth.actions";

const Login = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const {isAuth,token} = useSelector((state) => state.auth);
  
  const [loginCreds, setLoginCreds] = useState({
    email: "",
    password: "",
  });

  const hanldeChange = (e) => {
    const { name, value } = e.target;
    setLoginCreds({
      ...loginCreds,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!isAuth){
      dispatch(loginAPI(loginCreds));
      if(token.msg="Wrong"){
        alert("Some")
        navigate("/login")
      }
     } else {
      alert("You are already logged in");
     }
  };
  useEffect(() => {
  
     if (isAuth) {
       navigate(location.state.pathname || "/", { replace: true });
     }
  }, [navigate, isAuth]);

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          margin: "auto",
          maxWidth: "200px",
          gap: "10px",
        }}
      >
        <input
          name="email"
          type="email"
          placeholder="Enter Email"
          value={loginCreds.email}
          onChange={hanldeChange}
        />
        <input
          name="password"
          type="password"
          placeholder="Enter Password..."
          value={loginCreds.password}
          onChange={hanldeChange}
        />
        <button type="submit">Login</button>
      </form>
      <Link to="/register">Don't have account</Link>
    </div>
  );
};

export default Login;
