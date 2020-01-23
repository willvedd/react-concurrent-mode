import React, {
  useState,
  useTransition,
  useDeferredValue,
  Suspense,
  SuspenseList
} from "react";
import { fetchUserData } from "./mockAPI";
import User from "./User";
import Loader from "./Loader";

const getNextId = id => {
  return id === 7 ? 0 : id + 1;
};

const initialUser = fetchUserData(0);

export default ({ label }) => {
  const [startTransition, isPending] = useTransition({
    timeoutMs: 1750
  });

  const [data, setData] = useState(initialUser);
  const deferredData = useDeferredValue(data, {
    timeoutMs: 1000
  });

  return (
    <>
      <h1>{label}</h1>
      <button
        disabled={isPending}
        onClick={() => {
          startTransition(() => {
            const nextUserId = getNextId(data.userId);
            setData(fetchUserData(nextUserId));
          });
        }}
        // onClick={() => {
        //   const nextUserId = getNextId(data.userId);
        //   setData(fetchUserData(nextUserId));
        // }}
      >
        Next User
      </button>
      {isPending ? " Pending..." : null}
      <Suspense fallback={<Loader />}>
        <SuspenseList revealOrder="forwards">
          <User data={data} />
        </SuspenseList>
      </Suspense>
    </>
  );
};
