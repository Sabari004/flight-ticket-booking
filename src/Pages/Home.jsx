import React from "react";
import flight from "../Assests/flight1.png";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";

function Home() {
  return (
    <>
      <Sidebar />
      <div className="home-container">
        <div className="home-container1">
          <div className="home-container1-child">
            <div className="home-container1-title">
              <h1>Say yes to the world</h1>
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
                Why book on airtrek.com ?
              </div>
              <div className="home-container2-main2">
                <h3>No hidden costs</h3>
                <p>
                  You save yourself the booking fees and always obtain the
                  best-value flights.
                </p>
              </div>
              <div className="home-container2-main3">
                <h3>More comfort</h3>
                <p>
                  Create your trip flexibly and to suit your own individual
                  preferences: whether it's last-minute changes, a second
                  suitcase or a window seat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
