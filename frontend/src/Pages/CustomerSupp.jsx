import { NavBar2, Sidebar } from "../Components";
import send from "../Assests/send.png";
import { TextField } from "@mui/material";
import { useState } from "react";
import axios from "axios";
import flight from "../Assests/flight.png";
import "react-toastify/dist/ReactToastify.css";

import { ToastContainer, toast } from "react-toastify";
function CustomerSupp() {
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8181/api/v1/users/addUserFeedback", {
        email,
        feedback,
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <NavBar2 />
      <Sidebar />
      <ToastContainer />
      <div className="home-container">
        {/* <h1>Reach our customer service 24 / 7</h1>
        <div className="home-container2-search">
          <div style={{ width: "90% " }} className="Navbar-search2">
            <div className="Navbar-search1">
              <input
                type="text"
                placeholder="Type your querries"
                style={{ width: "90%" }}
              ></input>
              <button style={{ width: "10%" }}>
                <img style={{ width: "15px" }} src={send}></img>
              </button>
            </div>
          </div>
        </div> */}
        <div className="feedback">
          <div className="feedback-container">
            <h1>
              <img
                alt="flight"
                style={{ width: "50px", height: "40px" }}
                src={flight}
              ></img>
              Feed
              <span
                style={{
                  color: "rgb(71, 181, 255)",
                  fontFamily: "'Lexend', sans-serif",
                }}
              >
                Back
              </span>
            </h1>
            <div className="feedback-container1">
              <table>
                <tr>
                  <td>
                    <h2>Email </h2>
                  </td>
                  <td>
                    <input
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                    ></input>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h2>Feedback </h2>
                  </td>
                  <td>
                    <textarea
                      rows={7}
                      cols={30}
                      value={feedback}
                      onChange={(e) => {
                        setFeedback(e.target.value);
                      }}
                    ></textarea>
                  </td>
                </tr>
              </table>
            </div>
            <div className="feedback-button flight-comp-dest-child2">
              <button
                onClick={(e) => {
                  submitHandler(e);
                  toast.success("Feedback added");
                }}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CustomerSupp;
