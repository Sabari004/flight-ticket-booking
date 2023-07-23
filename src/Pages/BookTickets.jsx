import { useEffect, useState } from "react";
import { FlightComp, NavBar2, Sidebar } from "../Components";
import SearchComp from "../Components/SearchComp";
import axios from "axios";

function BookTickets() {
  const [flights, setFlights] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8080/flight").then((r) => {
      setFlights(r.data);
    });
  }, []);
  return (
    <>
      <NavBar2 />
      <Sidebar />

      <div className="home-container">
        <h1 className="book-title">Book your's !</h1>
        <div className="book-cont">
          <SearchComp />
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
        </div>
      </div>
    </>
  );
}

export default BookTickets;
