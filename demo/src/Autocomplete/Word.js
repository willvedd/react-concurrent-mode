import React, { Suspense } from "react";

export default ({ word }) => {
  return <li key={word}>{word}</li>;
};
