// import axios from "axios";
// import React from "react";

// class PatternComponent extends React.Component {
//   componentDidMount = () => {
//     axios
//       .get(`http://localhost:8080/seat/flight/${this.props.fid}`)
//       .then((r) => {
//         console.log(r.data);
//       });
//   };
//   renderPattern() {
//     const rows = 10; // Number of rows in the pattern
//     const cols = 8; // Number of columns in the pattern
//     const pattern = [];

//     for (let i = 0; i < rows; i++) {
//       const row = [];
//       for (let j = 0; j < cols; j++) {
//         // Add a space of 100px between the 2nd and 3rd column, and 6th and 7th column
//         if ((j === 2 || j === 6) && i >= 0) {
//           row.push(<div key={j} style={{ width: "100px" }} />);
//         }

//         // Add a seat icon button
//         row.push(
//           <button
//             key={j}
//             id={i * cols + j}
//             className="seat-button"
//             onClick={(e) => {
//               alert(
//                 "Seat no : " +
//                   (1 + i * cols + j) +
//                   ` is Booked ${this.props.fid}`
//               );
//             }}
//           >
//             {/* <i className="fa fa-chair" /> */}
//           </button>
//         );
//       }
//       pattern.push(
//         <div key={i} className="row" st>
//           {row}
//         </div>
//       );
//     }

//     return pattern;
//   }

//   render() {
//     return <div className="pattern-column">{this.renderPattern()}</div>;
//   }
// }

// export default PatternComponent;

// import React, { useEffect, useState } from "react";
// import axios from "axios";

// export default PatternComponent;
