import { Route, Routes } from "react-router-dom";
import "./App.css";
import { BookTickets, Home, Login, SignUp } from "./Pages";
import { Navbar } from "./Components";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/book-tickets" element={<BookTickets />} />

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
