import { TextField } from "@mui/material";
import imag from "../Assests/vectorlogin.jpg";
import apple from "../Assests/apple.png";
import google from "../Assests/google.png";
import micro from "../Assests/microsoft.png";
import flight from "../Assests/flight.png";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../redux/userSlice";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login() {
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .post(`http://localhost:8181/api/v1/auth/authenticate`, {
        email: email,
        password: pass,
      })
      .then((r) => {
        if (r.data !== null) {
          dispatch(
            login({
              username: email,
            })
          );
          localStorage.setItem(
            "user",
            JSON.stringify({
              email: email,
              pass: pass,
              token: r.data.token,
            })
          );
          navigate("/home");
        }
      })
      .catch((r) => {
        // alert(r.response.status);
        toast.error("Username or Password invalid");
      });
  };
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  return (
    <>
      <ToastContainer />
      <div className="loginHeader">
        <div className="loginHeader-title">
          <div className="loginHeader-title1">
            <img alt="flight" src={flight}></img>
            <h1>AirTrek</h1>
          </div>
          <div className="loginHeader-title2 login-container2-button">
            <Link to="/signup">
              <button>SignUp</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="login-container">
        <div className="container-child">
          <div className="login-container1">
            <img
              alt="login-vector"
              className="login-container-img"
              src={imag}
            ></img>
            {/* <h1>HAI</h1> */}
          </div>
          <div className="login-container2">
            <div className="login-container2-child">
              <div className="login-container2-title">
                <h1>Login</h1>
              </div>
              <div className="login-container2-field">
                <TextField
                  id="outlined-basic"
                  label="Username"
                  variant="outlined"
                  className="login-field"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.currentTarget.value);
                  }}
                />
              </div>
              <div className="login-container2-field">
                <TextField
                  id="outlined-basic"
                  label="Password"
                  variant="outlined"
                  className="login-field"
                  type="password"
                  value={pass}
                  onChange={(e) => {
                    setPass(e.currentTarget.value);
                  }}
                />
              </div>
              <div className="login-container2-button">
                <button
                  onClick={(e) => {
                    submitHandler(e);
                  }}
                >
                  Login
                </button>
              </div>
              <div className="login-container2-icons">
                <div>
                  <img alt="google" src={google}></img>
                  <img alt="apple" src={apple}></img>
                  <img alt="microsoft" src={micro}></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
