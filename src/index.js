import React from "react";
import ReactDOM from "react-dom/client";
//import { useState } from "react";
import "./index.css";
//import App from "./App";
import App from "./App-v1";
// import StarRating from "./StarRating";

// function Test() {
//   const [movieRating, setMovieRating] = useState(0);

//   return (
//     <div>
//       <StarRating color="blue" maxRating={10} onsetRating={setMovieRating} />
//       <p>This movie is rated {movieRating} stars</p>
//     </div>
//   );
// }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <App /> */}
    {/* <StarRating
      maxRating={5}
      messages={["Terible", "Bed", "Okay", "Good", "Amazing"]}
    />
    <Test /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
