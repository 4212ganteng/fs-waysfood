import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { setAuthToken, API } from "../../config/api";
import { LoginContext } from "../context/LoginContext";

export const Cekauth = () => {
  // Get API config & setAuthToken here ...

  // Init token on axios every time the app is refreshed here ...

  let navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  // Init user context here ...
  const [state, dispatch] = useContext(LoginContext);

  // Create function for check user token here ...

  // Call function check user with useEffect didMount here ...
  const checkUser = async () => {
    try {
      const response = await API.get("/check-auth");

      // If the token incorrect
      if (response.status === 404) {
        return dispatch({
          type: "AUTH_ERROR",
        });
      }

      // Get user data
      let payload = response.data.data;
      console.log("isi payload auth", payload);
      // Get token from local storage
      payload.token = localStorage.token;

      // Send data to useContext
      dispatch({
        type: "USER_SUCCESS",
        payload,
      });
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    checkUser();
  }, []);
};
