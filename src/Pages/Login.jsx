import { TextField } from "@mui/material";
import imag from "../Assests/vectorlogin.jpg";
import apple from "../Assests/apple.png";
import google from "../Assests/google.png";
import micro from "../Assests/microsoft.png";
import flight from "../Assests/flight.png";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  return (
    <>
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
                />
              </div>
              <div className="login-container2-field">
                <TextField
                  id="outlined-basic"
                  label="Password"
                  variant="outlined"
                  className="login-field"
                />
              </div>
              <div className="login-container2-button">
                <button
                  onClick={(e) => {
                    navigate("/home");
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
