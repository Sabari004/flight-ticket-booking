import { FlightComp, NavBar2, Sidebar } from "../Components";

function BookTickets() {
  return (
    <>
      <NavBar2 />
      <Sidebar />

      <div className="home-container">
        <FlightComp />
        <FlightComp />
      </div>
    </>
  );
}

export default BookTickets;
