import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Loader from "./Loader";
import AutoComplete from "./Autocomplete";

ReactDOM.render(<App label="Conventional" />, document.getElementById("root"));

ReactDOM.createRoot(document.getElementById("root--concurrent")).render(
  <Suspense fallback={<Loader />}>
    <App label="Concurrent" />
  </Suspense>
);

// ReactDOM.render(
//   <AutoComplete label="Conventional" />,
//   document.getElementById("root")
// );

// ReactDOM.createRoot(document.getElementById("root--concurrent")).render(
//   <Suspense fallback={<Loader />}>
//     <AutoComplete label="Concurrent" />
//   </Suspense>
// );
