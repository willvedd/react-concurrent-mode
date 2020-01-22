//import words from "./words.json";
import words from "./words-short.json";

// Suspense integrations like Relay implement
// a contract like this to integrate with React.
// Real implementations can be significantly more complex.
// Don't copy-paste this into your project!
function wrapPromise(promise) {
  let status = "pending";
  let result;
  let suspender = promise.then(
    r => {
      status = "success";
      result = r;
    },
    e => {
      status = "error";
      result = e;
    }
  );
  return {
    read() {
      if (status === "pending") {
        throw suspender;
      } else if (status === "error") {
        throw result;
      } else if (status === "success") {
        return result;
      }
    }
  };
}

export function fetchWords(text) {
  console.log("fetch words", text);
  return new Promise(resolve =>
    setTimeout(() => {
      resolve(
        words
          .filter(word => word.toLowerCase().indexOf(text.toLowerCase()) >= 0)
          .map(word => {
            return word.charAt(0).toUpperCase() + word.slice(1);
          })
      );
    }, 400)
  );
}

export function fetchAutoComplete(text) {
  let wordsPromise = fetchWords(text);

  return {
    words: wrapPromise(wordsPromise)
  };
}
