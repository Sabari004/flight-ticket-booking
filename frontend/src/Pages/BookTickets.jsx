import { useEffect, useState } from "react";
import { FlightComp, NavBar2, Sidebar } from "../Components";
import SearchComp from "../Components/SearchComp";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
function BookTickets() {
  const [flights, setFlights] = useState([]);
  const [to, setTo] = useState("");
  const [from, setFrom] = useState("");
  useEffect(() => {
    if (from.length === 0) {
      axios
        .get("http://localhost:8181/api/v1/auth/flight", {
          headers: {
            Authorization: `Bearer ${
              JSON.parse(localStorage.getItem("user")).token
            }`,
          },
        })
        .then((r) => {
          setFlights(r.data);
          console.log(r.data);
        })
        .catch((r) => {
          console.log(r.data);
        });
    }
  }, []);
  const submitFrom = (fromi) => {
    if (fromi.length > 0) {
      axios
        .get(`http://localhost:8181/api/v1/auth/flight/from/${fromi}`, {
          headers: {
            Authorization: `Bearer ${
              JSON.parse(localStorage.getItem("user")).token
            }`,
          },
        })
        .then((r) => {
          setFlights(r.data);
        });
    } else {
      axios
        .get("http://localhost:8181/api/v1/auth/flight", {
          headers: {
            Authorization: `Bearer ${
              JSON.parse(localStorage.getItem("user")).token
            }`,
          },
        })
        .then((r) => {
          setFlights(r.data);
          console.log(r.data);
        })
        .catch((r) => {
          console.log(r.data);
        });
    }
  };
  const submitTo = (toi) => {
    if (toi.length > 0) {
      axios
        .get(`http://localhost:8181/api/v1/auth/flight/to/${toi}`, {
          headers: {
            Authorization: `Bearer ${
              JSON.parse(localStorage.getItem("user")).token
            }`,
          },
        })
        .then((r) => {
          setFlights(r.data);
        });
    } else {
      axios
        .get("http://localhost:8181/api/v1/auth/flight", {
          headers: {
            Authorization: `Bearer ${
              JSON.parse(localStorage.getItem("user")).token
            }`,
          },
        })
        .then((r) => {
          setFlights(r.data);
          console.log(r.data);
        })
        .catch((r) => {
          console.log(r.data);
        });
    }
  };
  return (
    <>
      <NavBar2 />
      <Sidebar />

      <div className="home-container">
        <h1 className="book-title">Book your's !</h1>
        <div className="book-cont">
          <div className="bookc">
            <div className="bookcard">
              <div className="ter">
                <h4 className="word">Leaving from</h4>
                <input
                  type="text"
                  className="ticket"
                  value={from}
                  onChange={(e) => {
                    setFrom(e.target.value);
                    submitFrom(e.target.value);
                  }}
                ></input>
              </div>
              <div className="ter">
                <h4 className="word">Going to</h4>
                <input
                  type="text"
                  className="ticket"
                  value={to}
                  onChange={(e) => {
                    setTo(e.target.value);
                    submitTo(e.target.value);
                  }}
                  // onDragEnter={submitFrom}
                ></input>
              </div>
              <div className="ter">
                <h4 className="word">Departure</h4>
                <input type="date" className="ticket"></input>
              </div>
              <div className="flight-comp-dest-child2 dummy">
                <button>Get Details</button>
              </div>
            </div>
          </div>
        </div>
        <hr
          style={{
            width: "10%",
            marginLeft: "5%",
            border: "3px solid rgb(11 ,83 ,184)",
          }}
        ></hr>
        <div className="flight-comp-align">
          {flights.map((m) => (
            <FlightComp mess={m} />
          ))}
          {flights.length == 0 && (
            <h1 style={{ marginTop: "40px" }} className="book-title">
              No match found
            </h1>
          )}
        </div>
      </div>
    </>
  );
}

export default BookTickets;
