import React from "react";
import { useSelector } from "react-redux";
import Login from "./components/Login";
import GoogleOAuth from "./components/GoogleOAuth";
import "./App.css";

const App = () => {
  const user = useSelector((state) => state.user);

  return (
    <div>
      <h1>User Authentication App</h1>
      {user ? (
        <div>
          <h2>Welcome, {user.name}!</h2>
          <button>Logout</button>
        </div>
      ) : (
        <div>
          <Login />
          <GoogleOAuth />
        </div>
      )}
    </div>
  );
};

export default App;
