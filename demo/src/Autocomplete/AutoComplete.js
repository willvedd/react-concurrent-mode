import React, { Suspense } from "react";
import Word from "./Word";

export default ({ suggestions, isPending }) => {
  return (
    <Suspense fallback={<b>Loading words</b>}>
      <ul
        style={
          isPending
            ? {
                opacity: ".4"
              }
            : null
        }
      >
        {suggestions.words.read().map(item => {
          return <li key={item}>{item} </li>;
        })}
      </ul>
    </Suspense>
  );
};
