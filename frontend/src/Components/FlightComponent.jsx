import { useNavigate } from "react-router-dom";
import air from "../Assests/airplane.png";
import { useEffect, useState } from "react";
import axios from "axios";
function FlightComponent(props) {
  const navigate = useNavigate();
  const [flight, setFlight] = useState({});
  const solve = (timestamp) => {
    const date = new Date(timestamp);

    // Extracting hours, minutes, and seconds from the Date object
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    // Formatting the time to HH:MM:SS format (e.g., 08:35:21)
    const formattedTime = `${hours}:${minutes}:${seconds}`;
    return formattedTime;
  };
  useEffect(() => {
    axios
      .get(`http://localhost:8181/api/v1/auth/flight/id/${props.mess.flightid}`)
      .then((r) => {
        setFlight(r.data);
      });
  }, []);
  const submitHandler = () => {
    axios
      .post(
        "http://localhost:8181/api/v1/auth/seat",
        {
          seatId: props.mess.seatId,
          seatNo: props.mess.seatNo,
          seatStatus: false,
          flightid: props.mess.flightid,
          passName: null,
          gender: null,
          request: null,
          email: null,
        },
        {
          headers: {
            Authorization: `Bearer ${
              JSON.parse(localStorage.getItem("user")).token
            }`,
          },
        }
      )
      .then((r) => {
        alert("Your seat is Cancelled");
        navigate("/book-tickets");
      });
  };

  return (
    <>
      <div className="flight-comp">
        <div className="flight-comp-child">
          <div className="flight-comp-img">
            <img src={flight.imgUrl}></img>
          </div>
          <div className="flight-comp-cont">
            <h2>{flight.flightName}</h2>
            <div className="flight-comp-dest">
              <div className="flight-comp-dest-child1">
                <div className="flight-comp-dest-child">
                  <h3>From</h3>
                  <p>{flight.fromDest}</p>
                </div>
                <div className="flight-flight">
                  <div className="tag">
                    <hr className="hr-tag"></hr>
                  </div>
                  <img src={air}></img>
                  <div className="tag">
                    <hr className="hr-tag"></hr>
                  </div>
                </div>

                <div className="flight-comp-dest-child">
                  <h3>To</h3>
                  <p>{flight.toDest}</p>
                </div>
              </div>
              <div className="flight-comp-dest-child1">
                <div
                  style={{ borderLeft: "2px solid black" }}
                  className="flight-comp-dest-child"
                >
                  <h3>Start</h3>
                  <p>{solve(flight.stTime)}</p>
                </div>
                <div className="flight-flight">
                  <div className="tag">
                    <hr className="hr-tag"></hr>
                  </div>
                  <img src={air}></img>
                  <div className="tag">
                    <hr className="hr-tag"></hr>
                  </div>
                </div>

                <div className="flight-comp-dest-child">
                  <h3>End</h3>
                  <p>{solve(flight.stTime)}</p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="flight-comp-cont1"
            style={{ borderLeft: "2px solid gray" }}
          >
            <div className="flight-comp-dest-child2 ">
              <h3>Flight No: {props.mess.flightid}</h3>
              <h3>Seat No: {props.mess.seatNo}</h3>
              <div className="flight-comp-dest-child2-button ">
                <button
                  style={{ backgroundColor: "red", cursor: "pointer" }}
                  onClick={() => {
                    // navigate(`${props.mess.flightId}`);
                    submitHandler();
                  }}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FlightComponent;
