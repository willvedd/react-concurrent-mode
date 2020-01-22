import React, { Suspense } from "react";
import Loader from "./Loader";

export default props => {
  const { favorite } = props.data;

  return (
    <Suspense fallback={<Loader />}>
      <p>
        <b>Favorite thing: </b>
        {favorite.read()}
      </p>
    </Suspense>
  );
};
