import { createContext, useReducer } from "react";

export const LoginContext = createContext();

const initialState = {
  isLogin: false,
  user: {},
};

const reducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    // case "USER_success"
    case "USER_SUCCESS":
    case "LOGIN_SUCCESS":
      // Set localstorage item with key "token"
      localStorage.setItem("token", payload.token);
      return {
        isLogin: true,
        user: payload,
      };

    // add case "AUTH_ERROR"
    case "AUTH_ERROR":
    case "LOGOUT":
      // remove localstorage item eith key "token"
      localStorage.removeItem("token");

      return {
        isLogin: false,
        user: {},
      };

    default:
      throw new console.error();
  }
};

export const LoginContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <LoginContext.Provider value={[state, dispatch]}>
      {children}
    </LoginContext.Provider>
  );
};
