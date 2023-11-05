import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { GoogleLogin } from "@react-oauth/google";

import "./Authen.css";
import LogoButton from "./components/LogoButton";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  const handleRegister = () => {
    return navigate("/PersonalInfo");
  };

  return (
    <div className="authen-container">
      <LogoButton></LogoButton>
      <div className="authen-card">
        <h2>สมัครสมาชิก</h2>
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
        <div className="form-group">
          <p htmlFor="confirmpassword">ยืนยันรหัสผ่าน</p>
          <input
            type="password"
            id="confirmpassword"
            value={confirmpassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <button className="authen btn btn-4" onClick={handleRegister}>
          สมัครสมาชิก
        </button>
      </div>
      <div className="GoogleLogin">
        <span className="with-line or-text"> or </span>
        <GoogleLogin
          onSuccess={(credentialResponse) => {
            handleRegister();
          }}
          onError={() => {
            console.log("Login Failed");
          }}
        />
      </div>
    </div>
  );
}
