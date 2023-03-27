import React, { useState } from "react";
import "./register.css";
import axios from "axios";

const Register = () => {
  const [user, setUser] = useState({
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setUser({ ...user, [e.target.name]: value });
  };

  const register = (e) => {
    e.preventDefault();
    const newUser = {
      userName: user.userName,
      email: user.email,
      password: user.password,
      confirmPassword: user.confirmPassword,
    };

    axios.post("http://localhost:8000/register", newUser).then((res) => {
      console.log(res.data);
    });
    setUser({
      userName: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  return (
    <form className="register" onSubmit={register} method="POST">
      <h1>Register</h1>
      <input
        type="text"
        name="userName"
        value={user.userName}
        placeholder="Your Name"
        onChange={handleChange}
      />
      <input
        type="text"
        name="email"
        value={user.email}
        placeholder="Your Email"
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        value={user.password}
        placeholder="Your Password"
        onChange={handleChange}
      />
      <input
        type="password"
        name="confirmPassword"
        value={user.confirmPassword}
        placeholder="Re-enter Password"
        onChange={handleChange}
      />
      <button className="button">Register</button>
    </form>
  );
};
export default Register;
