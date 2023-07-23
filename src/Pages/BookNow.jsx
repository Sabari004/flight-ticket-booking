import { useEffect, useState } from "react";
import { NavBar2, Sidebar } from "../Components";
// import PatternComponent from "../Components/PatternComponent";
import { TextField, colors } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
function BookNow() {
  const [request, setRequest] = useState("");
  const [passName, setPassName] = useState("");
  const [gender, setGender] = useState("");
  const navigate = useNavigate();
  let params = useParams();
  const submitHandle = () => {
    axios
      .post("http://localhost:8080/seat", {
        seatId: JSON.parse(localStorage.getItem("seatId")).seatId,
        seatNo: JSON.parse(localStorage.getItem("seatId")).seatNo,
        seatStatus: true,
        flightid: params.id,
        passName: passName,
        gender: gender,
        request: request,
        username: JSON.parse(localStorage.getItem("user")).username,
      })
      .then((r) => {
        alert("Your seat is Booked");
        navigate("/book-tickets");
      });
    // alert(params.id);
  };

  return (
    <>
      <NavBar2 />
      <Sidebar />
      <div className="home-container">
        <h1 style={{ marginLeft: "5%", paddingBottom: "70px" }}>
          Make your journey better
        </h1>
        <div className="booknow-comp">
          <PatternComponent fid={params.id} />
          <div className="booknow-cont">
            <h1 style={{ marginTop: "30px" }}>Confirm Yours</h1>
            <div className="passenger-form">
              <TextField
                id="outlined-basic"
                label="Passenger Name"
                variant="outlined"
                className="login-field"
                value={passName}
                onChange={(e) => {
                  setPassName(e.target.value);
                }}
              />
              <TextField
                id="outlined-basic"
                label="Gender"
                variant="outlined"
                className="login-field"
                value={gender}
                onChange={(e) => {
                  setGender(e.target.value);
                }}
              />
              <TextField
                id="outlined-basic"
                label="Request"
                variant="outlined"
                className="login-field"
                value={request}
                onChange={(e) => {
                  setRequest(e.target.value);
                }}
              />
            </div>
            <div className="login-container2-button confirm">
              <button onClick={(e) => submitHandle()}>BookNow</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const PatternComponent = (props) => {
  const [seats, setSeats] = useState([]);
  const [colour, setColor] = useState(1);
  const colourSet = (e) => {
    setColor(e.seatId);
    localStorage.setItem(
      "seatId",
      JSON.stringify({ seatId: e.seatId, seatNo: e.seatNo })
    );
  };
  useEffect(() => {
    axios.get(`http://localhost:8080/seat/flight/${props.fid}`).then((r) => {
      console.log(r.data);
      setSeats(r.data);
    });
  }, []);
  function styling(id) {
    if (id.seatId === colour && id.seatStatus === false) return "green";
    else if (id.seatStatus === false) return "blue";
    else if (id.seatStatus === true) return "booked";
  }
  function stylingBooked(id) {
    if (id === true) return "booked";
  }
  const renderPattern = () => {
    const rows = 10;
    const cols = 8;
    const pattern = [];

    for (let i = 0; i < rows; i++) {
      const row = [];
      for (let j = 0; j < cols; j++) {
        if ((j === 2 || j === 6) && i >= 0) {
          row.push(<div style={{ width: "100px" }} />);
        }
        row.push(
          <button
            className={`seat-button ${styling(seats[i * 8 + j])} }`}
            disabled={seats[i * 8 + j].seatStatus}
            onClick={(e) => {
              colourSet(seats[i * 8 + j]);

              // setSeatsId(e);

              console.log(colour);
            }}
          ></button>
        );
      }

      pattern.push(<div className="row">{row}</div>);
    }

    return pattern;
  };

  return (
    <>
      {seats.length > 0 && (
        <div className="pattern-column">{renderPattern()}</div>
      )}
    </>
  );
};

export default BookNow;
