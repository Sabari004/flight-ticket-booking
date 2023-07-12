import Title from "../Components/Title";
import flight from "../Assests/flight.png";
import search from "../Assests/search.svg";
import user from "../Assests/user.png";
function Navbar() {
  return (
    <div className="Navbar">
      <div className="Navbar-child">
        <div className="Navbar-title">
          <img alt="flight" src={flight}></img>
          <Title />
        </div>
        <div className="Navbar-child1">
          <div className="Navbar-search">
            <div className="Navbar-search1">
              <input type="text" placeholder="Search Destination"></input>
              <button>
                <img height={13} src={search}></img>
              </button>
            </div>
          </div>
        </div>
        <div className="NavBar-child2">
          <img src={user}></img>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
