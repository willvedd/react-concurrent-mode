import React, { Suspense } from "react";
import UserName from "./UserMetadata";
import UserBio from "./UserBio";
import Loader from "./Loader";

export default props => {
  return (
    <div>
      {
        <p>
          <b>ID: </b>
          {props.data.userId}
        </p>
      }

      <Suspense fallback={<Loader />}>
        <UserName data={props.data} />
      </Suspense>

      <Suspense fallback={<Loader />}>
        <UserBio data={props.data} />
      </Suspense>
    </div>
  );
};
