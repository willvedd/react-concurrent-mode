import React, { Suspense } from "react";
import Loader from "./Loader";

export default props => {
  const { name } = props.data;

  return (
    <>
      <div>
        <p>
          <Suspense fallback={<Loader />}>
            <b>User: </b>
            {name.read()}
          </Suspense>
        </p>
      </div>
    </>
  );
};
