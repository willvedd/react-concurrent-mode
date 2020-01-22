import React, {
  useState,
  useEffect,
  useDeferredValue,
  Suspense,
  useTransition
} from "react";
import AutoComplete from "./AutoComplete";
import { fetchAutoComplete } from "./mockApi";

const initialSuggetsions = fetchAutoComplete("");

export default ({ label }) => {
  const [text, setText] = useState("");
  const [suggestions, setSuggestions] = useState(initialSuggetsions);
  const deferredText = useDeferredValue(text, {
    timeoutMs: 1000
  });

  const [startTransition, isPending] = useTransition({
    timeoutMs: 5000
  });

  return (
    <Suspense fallback={<h1>Loading app</h1>}>
      <h2>{label}</h2>
      <input
        type="text"
        value={text}
        onChange={e => {
          const newText = e.target.value;
          setText(newText);
          //With transition
          startTransition(() => {
            setSuggestions(fetchAutoComplete(newText));
          });
        }}
      />
      <p>
        <b>Term:</b>
        {text}
      </p>
      <p>
        <b>Deferred:</b>
        {deferredText}
      </p>
      <Suspense fallback={<h1>Loading results </h1>}>
        <AutoComplete suggestions={suggestions} isPending={isPending} />
      </Suspense>
    </Suspense>
  );
};
