<<<<<<< HEAD
import { createContext } from "react";

const authContext = createContext({
  authenticated: false,
  setAuthenticated: () => {},
  nickname: "",
  setNickname: () => {}
});

const { Provider, Consumer } = authContext;
export { Provider, Consumer };

export default authContext;
=======
import { createContext } from "react";

const authContext = createContext({
  authenticated: false,
  setAuthenticated: () => {},
  nickname: "",
  setNickname: () => {}
});

const { Provider, Consumer } = authContext;
export { Provider, Consumer };

export default authContext;
>>>>>>> 973fa2255342cbb8a6f14570d4a0141fab4752a0
