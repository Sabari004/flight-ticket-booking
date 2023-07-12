import { TextField } from "@mui/material";
import imag from "../Assests/sign.png";
import flight from "../Assests/flight.png";
import { Link, useNavigate } from "react-router-dom";
function SignUp() {
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
            <Link to="/" className="">
              <button>Login</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="login-container">
        <div className="container-child">
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
                />
              </div>
              <div className="login-container2-field">
                <TextField
                  id="outlined-basic"
                  label="Email"
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
