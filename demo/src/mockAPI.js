export function fetchUserData(userId) {
  let namePromise = fetchUser(userId);
  let favoritePromise = fetchFavorite(userId);
  return {
    userId,
    name: wrapPromise(namePromise),
    favorite: wrapPromise(favoritePromise)
  };
}

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

export function fetchUser(userId) {
  return new Promise(resolve => {
    setTimeout(() => {
      switch (userId) {
        case 0:
          resolve("Isaac");
          break;
        case 1:
          resolve("Nicole");
          break;
        case 2:
          resolve("Marcel");
          break;
        case 3:
          resolve("Peter");
          break;
        case 4:
          resolve("Nick");
          break;
        case 5:
          resolve("Lindsay");
          break;
        case 6:
          resolve("Tommy");
          break;
        case 7:
          resolve("Matt");
          break;
        default:
          throw Error("Unknown user.");
      }
    }, 2000 * Math.random());
  });
}

export function fetchFavorite(userId) {
  return new Promise(resolve => {
    setTimeout(() => {
      switch (userId) {
        case 0:
          resolve("Vegemite");
          break;
        case 1:
          resolve("Sass");
          break;
        case 2:
          resolve("His tiny desk plant");
          break;
        case 3:
          resolve("Working at Sidecar");
          break;
        case 4:
          resolve("Folding oragami");
          break;
        case 5:
          resolve("React");
          break;
        case 6:
          resolve("Being a Taurus");
          break;
        case 7:
          resolve("Del Frisco's");
          break;
        default:
          throw Error("Unknown user.");
      }
    }, 3000 * Math.random());
  });
}
