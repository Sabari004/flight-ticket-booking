import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import { BookNow, BookTickets, Home, Login, SignUp } from "./Pages";
import { Navbar } from "./Components";
import CustomerSupp from "./Pages/CustomerSupp";
import Ticket from "./Components/Ticket";
import { useEffect } from "react";

function App() {
  const navigate = useNavigate();
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("user"));
    if (data !== null) {
      navigate("/home");
    }
  }, []);
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/book-tickets" element={<BookTickets />} />
        <Route path="/book-tickets/:id" element={<BookNow />} />
        <Route path="/customer" element={<CustomerSupp />} />
        <Route path="/booked" element={<Ticket />} />

        <Route
          path="/home"
          element={
            <>
              <Navbar />
              <Home />
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;
