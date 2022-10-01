import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";
import "./App.css";
import Axios from "axios";

const api_url = "http://localhost:3001/";
var datap;

async function getapi(api_url) {
  const response = await fetch(api_url);
  var data = await response.json();
  showdata(data);
}

function showdata(data) {
  console.log(data.data);
  datap = data.username;
}

getapi(api_url);

function Login() {
  let navigate = useNavigate();

  const [usernameReg, setUsernameReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");
  const [usernameLogin, setUsernameLogin] = useState("");
  const [passwordLogin, setPasswordLogin] = useState("");

  const register = () => {
    Axios.post(api_url + "register", {
      username: usernameReg,
      password: passwordReg,
    }).then((response) => {
      console.log(response);
    });
  };

  const login = () => {
    Axios.post(api_url + "login", {
      username: usernameLogin,
      password: passwordLogin,
    }).then((response) => {
      if (response.data.count === 0) {
        alert("no use found");
      }
      if (response.data.count === 1) {
        navigate("/main");
      }
    });
  };

  return (
    <div className="body1">
      <div className="header3">
        <h1 className="login">Login</h1>
      </div>
      <br></br>
      <div className="grid">
      <div className="body2">
      <div className="box">
        <h3>Login</h3>
            <input
            type={"text"}
            value={usernameLogin}
            placeholder="enter username"
            onChange={(e) => setUsernameLogin(e.target.value)}
            ></input>
        <br></br>
        <br></br>
            <input
            type={"password"}
            value={passwordLogin}
            placeholder="enter password"
            onChange={(e) => setPasswordLogin(e.target.value)}
            ></input>
        <br></br>
        <br></br>
            <button onClick={login}>login</button>
        <br></br>
        <br></br>
        </div>
      </div>
      <div className="body3">
      <div className="box">
        <h3>Register</h3>
            <input
            type={"text"}
            value={usernameReg}
            placeholder="enter username"
            onChange={(e) => setUsernameReg(e.target.value)}
            ></input>
        <br></br>
        <br></br>
            <input
            type={"password"}
            value={passwordReg}
            placeholder="enter password"
            onChange={(e) => setPasswordReg(e.target.value)}
            ></input>
        <br></br>
        <br></br>
            <button className="" onClick={register}>register</button>
        <br></br>
        <br></br>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
