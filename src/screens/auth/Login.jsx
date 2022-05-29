import React from "react";

import { loginEndpoint } from "../../spotify";
import { images } from "../../assets";
import "./Login.css";

const Login = () => {
  return (
    <div className="login__page">
      <img alt="Spotify Login" className="logo" src={images.spotify} />
      <a href={loginEndpoint}>
        <div className="login__btn">Login</div>
      </a>
    </div>
  );
};

export default Login;
