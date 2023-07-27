import { useNavigate } from "react-router-dom";
import air from "../Assests/airplane.png";
function FlightComp(props) {
  const navigate = useNavigate();
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

  return (
    <>
      <div className="flight-comp">
        <div className="flight-comp-child">
          <div className="flight-comp-img">
            <img src={props.mess.imgUrl}></img>
          </div>
          <div className="flight-comp-cont">
            <h2>{props.mess.flightName}</h2>
            <div className="flight-comp-dest">
              <div className="flight-comp-dest-child1">
                <div className="flight-comp-dest-child">
                  <h3>From</h3>
                  <p>{props.mess.fromDest}</p>
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
                  <p>{props.mess.toDest}</p>
                </div>
              </div>
              <div className="flight-comp-dest-child1">
                <div
                  style={{ borderLeft: "2px solid black" }}
                  className="flight-comp-dest-child"
                >
                  <h3>Start</h3>
                  <p>{solve(props.mess.stTime)}</p>
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
                  <p>{solve(props.mess.endTime)}</p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="flight-comp-cont1"
            style={{ borderLeft: "2px solid gray" }}
          >
            <div className="flight-comp-dest-child2 ">
              <h3>Price : ${props.mess.price}</h3>
              {/* <h3>3,000</h3> */}
              <div className="flight-comp-dest-child2-button ">
                <button
                  onClick={() => {
                    navigate(`${props.mess.flightId}`);
                  }}
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FlightComp;
