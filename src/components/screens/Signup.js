import React, { Component } from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="mycard">
      <div className="card auth-card input-field ">
        <h2 className="brand-logo">Sign up</h2>
        <input type="text" placeholder="username" />
        <input type="text" placeholder="e-mail" />
        <input type="text" placeholder="password" />
        <button
          className="btn waves-effect waves-light blue darken-1"
          style={{ marginTop: 20 }}
        >
          Sign up
        </button>
        <h5>
          <Link to="/signin">Already a memeber? Log in!</Link>
        </h5>
        <Link to="#">Forgot your password?</Link>
      </div>
    </div>
  );
};

export default Signup;
