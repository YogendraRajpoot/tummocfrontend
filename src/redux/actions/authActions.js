import axios from "axios";

export const loginUser = (credentials) => {
  return (dispatch) => {
    axios
      .post("/api/login", credentials)
      .then((response) => {
        // Dispatch success action
        dispatch({ type: "LOGIN_SUCCESS", payload: response.data });
      })
      .catch((error) => {
        // Dispatch error action
        dispatch({ type: "LOGIN_ERROR", payload: error.response.data.error });
      });
  };
};
