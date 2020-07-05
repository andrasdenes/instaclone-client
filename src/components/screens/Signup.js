import React, { Component, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import M from "materialize-css";

const Signup = () => {
  const history = useHistory();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const postData = () => {
    fetch("auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, password, email }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          M.toast({ html: data.error, classes: "#e53935 red darken-1" });
          //console.log(JSON.stringify({ name, password, email }));
        } else {
          M.toast({ html: data.message, classes: "#00c853 green accent-4" });
          history.push("/signin");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="mycard">
      <div className="card auth-card input-field ">
        <h2 className="brand-logo">Sign up</h2>
        <input
          type="text"
          placeholder="username"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="btn waves-effect waves-light blue darken-1"
          style={{ marginTop: 20 }}
          onClick={() => postData()}
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
