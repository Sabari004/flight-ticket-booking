import { useEffect, useState } from "react";
import { FlightComp, NavBar2, Sidebar } from "../Components";
import SearchComp from "../Components/SearchComp";
import axios from "axios";
import FlightComponent from "./FlightComponent";
import "react-toastify/dist/ReactToastify.css";
function Ticket() {
  const [flights, setFlights] = useState([]);

  useEffect(() => {
    axios
      .get(
        `http://localhost:8181/api/v1/auth/seat/passenger/${
          JSON.parse(localStorage.getItem("user")).email
        }`,
        {
          headers: {
            Authorization: `Bearer ${
              JSON.parse(localStorage.getItem("user")).token
            }`,
          },
        }
      )
      .then((r) => {
        setFlights(r.data);
        console.log(r.data);
      })
      .catch((r) => {
        console.log(r.data);
      });
  }, []);

  return (
    <>
      <NavBar2 />
      <Sidebar />

      <div className="home-container">
        <h1 className="book-title">Your Tickets !</h1>

        <div className="flight-comp-align">
          {flights.map((m) => (
            <FlightComponent mess={m} />
          ))}
          {flights.length == 0 && (
            <h1
              style={{ marginTop: "40px", color: "black" }}
              className="book-title"
            >
              No Tickets Booked
            </h1>
          )}
        </div>
      </div>
    </>
  );
}

export default Ticket;
