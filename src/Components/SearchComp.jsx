function SearchComp() {
  return (
    <>
      <div className="bookc">
        <div className="bookcard">
          <div className="ter">
            <h4 className="word">Leaving from</h4>
            <input type="text" className="ticket"></input>
          </div>
          <div className="ter">
            <h4 className="word">Going to</h4>
            <input type="text" className="ticket"></input>
          </div>
          <div className="ter">
            <h4 className="word">Departure</h4>
            <input type="date" className="ticket"></input>
          </div>
          <div className="flight-comp-dest-child2 dummy">
            <button>Get Details</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default SearchComp;
