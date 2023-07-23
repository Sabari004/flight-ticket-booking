import React, { useEffect } from "react";
import flight from "../Assests/flight1.png";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import budget from "../Assests/budget.png";
import res from "../Assests/booking.png";
import up from "../Assests/up-arrow.png";
import com from "../Assests/sofa.png";
import visa from "../Assests/visa.svg";
import upi from "../Assests/upi.png";
import amex from "../Assests/amex.png";
import phone from "../Assests/phone.png";
import gpay from "../Assests/gpay.png";
import paytm from "../Assests/paytm.png";
import { useSelector } from "react-redux";
import { selectUser } from "../redux/userSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Home() {
  // const user = useSelector(selectUser);
  useEffect(() => {
    toast.success("Successfully Signed in");
  }, []);
  return (
    <>
      <ToastContainer />
      <Sidebar />
      <div className="home-container">
        <div className="home-container1">
          <div className="home-container1-child">
            <div className="home-container1-title">
              <h1> Say yes to the world</h1>
            </div>
            <div className="home-container1-para">
              Find your flight and explore the world with us <br />
              We will take care of the rest.
            </div>
            <div className="home-container1-line">
              <hr></hr>
            </div>
            <div className="home-container1-img">
              {/* <ScrollAnimation animateIn="fadeIn"> */}
              <img src={flight}></img>
              {/* ldkmqeiofj */}
              {/* </ScrollAnimation> */}
            </div>
          </div>
        </div>
        <div className="home-container2">
          <div className="home-container2-child">
            <h1>All services at a glance</h1>
            <p>
              You can book the offers conveniently from home before you start
              your
              <br />
              trip. You can opt for further services during your trip too.
            </p>
            <div className="home-container2-main">
              <div className="home-container2-main1">
                <h2>
                  Why book
                  <br /> on airtrek.com ?
                </h2>
              </div>
              <div className="home-container2-main2">
                <div className="home-container2-main-icon">
                  <img src={budget}></img>
                </div>
                <div className="home-container2-main-cont">
                  <h3>No hidden costs</h3>
                  <p>
                    You save yourself the booking fees and always obtain the
                    best-value flights.
                  </p>
                </div>
              </div>
              <div className="home-container2-main2">
                <div className="home-container2-main-icon">
                  <img src={com}></img>
                </div>
                <div className="home-container2-main-cont">
                  <h3>More comfort</h3>
                  <p>
                    Create your trip flexibly and to suit your own individual
                    preferences: whether it's last-minute changes, a second
                    suitcase or a window seat.
                  </p>
                </div>
              </div>
            </div>
            <div className="home-container2-main">
              <div className="home-container2-main1">
                <h2>
                  Even more comfort
                  <br /> during your flight.
                </h2>
              </div>
              <div className="home-container2-main2">
                <div className="home-container2-main-icon">
                  <img src={res}></img>
                </div>
                <div className="home-container2-main-cont">
                  <h3>Advance seat reservation</h3>
                  <p>
                    Reserve your seat before you start your journey exactly
                    according to your preferences — from a window seat to seats
                    with more legroom.
                  </p>
                </div>
              </div>
              <div className="home-container2-main2">
                <div className="home-container2-main-icon">
                  <img src={up}></img>
                </div>
                <div className="home-container2-main-cont">
                  <h3>Upgrade</h3>
                  <p>
                    Treat yourself to an upgrade and enjoy the amenities of
                    Premium Economy Class or Business Class or the luxury of
                    First Class and arrive at your destination more relaxed.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="home-container3">
          <div className="home-container3-child">
            <div className="home-container3-cont1">
              <h1>Payment options</h1>
              <p>
                You can easily book and securely pay for your flight at
                Lufthansa-com. The methods of payment available and much more
                information can be found in the following sections.
              </p>
              <button>Learn more</button>
            </div>
            <div className="home-container3-cont2">
              <div className="home-container3-row1">
                <div className="home-container3-icon">
                  <img src={visa}></img>
                </div>
                <div className="home-container3-icon">
                  <img src={upi}></img>
                </div>
                <div className="home-container3-icon">
                  {" "}
                  <img src={amex}></img>
                </div>
              </div>
              <div className="home-container3-row1">
                <div className="home-container3-icon">
                  <img src={gpay}></img>
                </div>
                <div className="home-container3-icon">
                  <img src={phone}></img>
                </div>
                <div className="home-container3-icon">
                  <img src={paytm}></img>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="home-container2">
          <div
            style={{ backgroundColor: "transparent", boxShadow: "none" }}
            className="home-container2-child"
          >
            <h1>Stay Connected</h1>
            <p>
              Save with our latest fares and offers. Leave us your e-mail
              <br />
              address and receive information about our special offers.
            </p>
            <div className="home-container2-search">
              <div style={{ width: "30%" }} className="Navbar-search2">
                <div className="Navbar-search1">
                  <input
                    type="text"
                    placeholder="Type your e-mail address"
                  ></input>
                  <button>Subscribe</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
