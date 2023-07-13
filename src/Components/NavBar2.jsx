import Title from "../Components/Title";
import flight from "../Assests/flight.png";
import search from "../Assests/search.svg";
import user from "../Assests/user.png";
function NavBar2() {
  return (
    <div className="Navbar">
      <div className="Navbar-child">
        <div className="Navbar-title">
          <img alt="flight" src={flight}></img>
          <Title />
        </div>

        <div style={{ float: "right", width: "40%" }} className="NavBar-child2">
          <img src={user}></img>
        </div>
      </div>
    </div>
  );
}

export default NavBar2;
