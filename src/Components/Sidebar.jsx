import { Link, useNavigate } from "react-router-dom";
function Sidebar() {
  const navigate = useNavigate();
  return (
    <nav style={{ marginTop: "69px", position: "fixed" }} class="main-menu">
      <ul>
        <li class="has-subnav">
          <Link to="/home">
            <i class="fa fa-home"></i>
            <span class="nav-text">Home</span>
          </Link>
        </li>
        <li class="has-subnav">
          <Link to="/book-tickets">
            <i class="fa fa-compass"></i>
            <span class="nav-text">Book Tickets</span>
          </Link>
        </li>
        <li class="has-subnav">
          <Link to="/booked">
            <i class="fa fa-ticket"></i>
            <span class="nav-text">Booked Flights</span>
          </Link>
        </li>
        <li class="has-subnav">
          <Link to="/customer">
            <i class="fa fa-comments"></i>
            <span class="nav-text">Customer Support</span>
          </Link>
        </li>
      </ul>

      <ul class="logout">
        <li>
          <button
            style={{
              border: "none",
              borderRadius: "20px",
              backgroundColor: "transparent",
            }}
            onClick={(e) => {
              window.localStorage.clear();
              navigate("/");
            }}
          >
            <i class="fa fa-power-off fa-2x"></i>
            <span class="nav-text">Logout</span>
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Sidebar;
