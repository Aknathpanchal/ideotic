import React, { useState } from "react";
import { registerAPI } from "../Redux/auth/auth.actions";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const dispatch = useDispatch();
  // const location = useLocation();
  const navigate = useNavigate();

  const [loginCreds, setLoginCreds] = useState({
    name: "",
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
    dispatch(registerAPI(loginCreds));
    navigate("/login");
  };
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
          name="name"
          type="text"
          placeholder="Enter Your Name"
          value={loginCreds.name}
          onChange={hanldeChange}
        />
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
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
