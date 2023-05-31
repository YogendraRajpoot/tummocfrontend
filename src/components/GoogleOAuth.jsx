import React from "react";

const GoogleOAuth = () => {
  const handleGoogleLogin = () => {
    // Code to initiate Google OAuth login process
  };

  return (
    <div className="google-oauth-container">
      <h2>Google OAuth</h2>
      <button onClick={handleGoogleLogin}>Login with Google</button>
    </div>
  );
};

export default GoogleOAuth;
