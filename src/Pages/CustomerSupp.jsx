import { NavBar2, Sidebar } from "../Components";
import send from "../Assests/send.png";
function CustomerSupp() {
  return (
    <>
      <NavBar2 />
      <Sidebar />
      <div
        style={{ marginLeft: "7%" }}
        className="home-container customer-supp"
      >
        <h1>Reach our customer service 24 / 7</h1>
        <div className="home-container2-search">
          <div style={{ width: "90%" }} className="Navbar-search2">
            <div className="Navbar-search1">
              <input
                type="text"
                placeholder="Type your querries"
                style={{ width: "90%" }}
              ></input>
              <button style={{ width: "10%" }}>
                <img style={{ width: "15px" }} src={send}></img>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CustomerSupp;
