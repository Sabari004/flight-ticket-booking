import { TextField } from "@mui/material";
import imag from "../Assests/sign.png";
import flight from "../Assests/flight.png";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { login } from "../redux/userSlice";
function SignUp() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const submitHandle = (e) => {
    axios.get(`http://localhost:8080/user/${username}`).then((r) => {
      if (r.data !== null) {
        toast.error("User Already exists");
      } else {
        axios
          .post("http://localhost:8080/user", {
            username,
            name,
            email,
            password,
          })
          .then((r) => {
            dispatch(
              login({
                username: username,
              })
            );
            localStorage.setItem(
              "user",
              JSON.stringify({ username: username })
            );

            navigate("/home");
          });
      }
    });
  };
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
            <Link to="/" className="">
              <button>Login</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="login-container">
        <div className="container-child" style={{ height: "70vh" }}>
          <div className="login-container2">
            <div className="login-container2-child">
              <div className="login-container2-title">
                <h1>Sign Up</h1>
              </div>
              <div className="login-container2-field">
                <TextField
                  id="outlined-basic"
                  label="Username"
                  variant="outlined"
                  className="login-field"
                  value={username}
                  onChange={(e) => {
                    setUsername(e.target.value);
                  }}
                />
              </div>
              <div className="login-container2-field">
                <TextField
                  id="outlined-basic"
                  label="Name"
                  variant="outlined"
                  className="login-field"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </div>
              <div className="login-container2-field">
                <TextField
                  id="outlined-basic"
                  label="Email"
                  variant="outlined"
                  className="login-field"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>
              <div className="login-container2-field">
                <TextField
                  id="outlined-basic"
                  label="Password"
                  variant="outlined"
                  className="login-field"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </div>
              <div className="login-container2-button">
                <button
                  onClick={(e) => {
                    submitHandle(e);
                  }}
                >
                  SignUp
                </button>
              </div>
            </div>
          </div>
          <div className="login-container1">
            <img
              alt="login-vector"
              className="login-container-img"
              src={imag}
            ></img>
            {/* <h1>HAI</h1> */}
          </div>
        </div>
      </div>
    </>
  );
}
export default SignUp;
