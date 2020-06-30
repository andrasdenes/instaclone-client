import React, { Component } from "react";
import { Link } from "react-router-dom";

const Signin = () => {
  return (
    <div className="mycard">
      <div className="card auth-card input-field">
        <h2 className="brand-logo">Welcome back!</h2>
        <input type="text" placeholder="e-mail" />
        <input type="text" placeholder="password" />
        <button
          className="btn waves-effect waves-light blue darken-1"
          style={{ marginTop: 20 }}
        >
          Log in
        </button>
        <h5>
          <Link to="/signup">Don't have an account? Sign up!</Link>
        </h5>
      </div>
    </div>
  );
};

export default Signin;
