import Title from "../Components/Title";
import flight from "../Assests/flight.png";
import search from "../Assests/search.svg";
import user from "../Assests/user.png";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../redux/userSlice";
function Navbar() {
  const useri = useSelector(selectUser);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  let menuRef = useRef();
  useEffect(() => {
    console.log(useri);
  });
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
          {/* <img
            src={user}
            style={{ cursor: "pointer" }}
            onClick={(e) => {
              window.localStorage.clear();
              navigate("/");
            }}
          ></img> */}
          <div className="menu-container" ref={menuRef}>
            <div
              className="menu-trigger"
              onClick={() => {
                setOpen(!open);
              }}
            >
              <img src={user} />
            </div>

            <div className={`dropdown-menu ${open ? "active" : "inactive"}`}>
              <div className="dd-flex">
                <h2>{useri?.username}</h2>
                <hr></hr>
                <div
                  className="flight-comp-dest-child2"
                  style={{
                    display: "flex",
                    justifyContent: "space-around",
                    marginTop: "20px",
                  }}
                >
                  <button
                    style={{ backgroundColor: "red" }}
                    onClick={(e) => {
                      window.localStorage.clear();
                      navigate("/");
                    }}
                  >
                    Logout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
