import React, { useState } from "react";
import LogoButton from "./components/LogoButton";
import { GoogleLogin } from "@react-oauth/google";

import './Authen.css'
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = () => {
    return navigate("/");
  };

  return (
    <div className="authen-container">
      {/* <Navbar2/> */}
      <LogoButton></LogoButton>
      <div className="authen-card">
        <h2 className="font">เข้าสู่ระบบ</h2>
        <div className="form-group">
          <p htmlFor="email">อีเมล</p>
          <input
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <p htmlFor="password">รหัสผ่าน</p>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="btn btn-4" onClick={handleLogin}>
          เข้าสู่ระบบ
        </button>
      </div>
      <div className="GoogleLogin">
        <span className="with-line or-text"> or </span>
        <GoogleLogin
          onSuccess={(credentialResponse) => {
            handleLogin();
          }}
          onError={() => {
            console.log("Login Failed");
          }}
        />
      </div>
    </div>
  );
}
