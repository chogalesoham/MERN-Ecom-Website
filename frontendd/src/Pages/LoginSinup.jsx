import React, { useState } from "react";
import "./css/LoginSinup.css";
const baseurl = window.location.origin;

const LoginSinup = () => {
  const [state, setState] = useState("Login");
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
    cartData: "",
  });

  const changeHandelar = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const Login = async () => {
    console.log("log in", formData);

    let responsData;
    await fetch(`${baseurl}/login`, {
      method: "POST",
      headers: {
        Accept: "application/form-data",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((respons) => respons.json())
      .then((data) => (responsData = data));

    if (responsData.success) {
      localStorage.setItem("auth-token", responsData.token);
      window.location.replace("/");
    } else {
      alert(responsData.errors);
    }
  };

  const Sinup = async () => {
    console.log("Sinup", formData);

    let responsData;
    await fetch(`${baseurl}/signup`, {
      method: "POST",
      headers: {
        Accept: "application/form-data",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((respons) => respons.json())
      .then((data) => (responsData = data));

    if (responsData.success) {
      localStorage.setItem("auth-token", responsData.token);
      window.location.replace("/");
    } else {
      alert(responsData.errors);
    }
  };

  return (
    <div className="loginSinup">
      <div className="loginSinup-container">
        <h1>{state}</h1>
        <div className="loginSignup-fields">
          {state === "Sinup" ? (
            <input
              name="username"
              value={formData.username}
              onChange={changeHandelar}
              type="text"
              placeholder="Enter Your Name"
            />
          ) : (
            <></>
          )}
          <input
            name="email"
            value={formData.email}
            onChange={changeHandelar}
            type="email"
            placeholder="Enter Your Email Address"
          />

          <input
            name="password"
            value={formData.password}
            onChange={changeHandelar}
            type="pssword"
            placeholder="Enter Your Password"
          />
        </div>
        <button
          onClick={() => {
            state === "Login" ? Login() : Sinup();
          }}
        >
          Continue
        </button>

        {state === "Sinup" ? (
          <p className="loginSignup">
            Create an Account?{" "}
            <span onClick={() => setState("Login")}>Click here..</span>
          </p>
        ) : (
          <p className="loginSignup">
            Alredy have an account?{" "}
            <span onClick={() => setState("Sinup")}>Login here</span>
          </p>
        )}

        <div className="loginsignup-agree">
          <input type="checkbox" name="" id="" />
          <p>By Continuing, i agree to the terms of use & privacy poliysic</p>
        </div>
      </div>
    </div>
  );
};

export default LoginSinup;
