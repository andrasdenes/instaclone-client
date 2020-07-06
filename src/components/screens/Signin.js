import React, { Component, useState, useContext } from "react";
import { UserContext } from "../../App";
import { Link, useHistory } from "react-router-dom";
import M from "materialize-css";
import { reducer } from "../../reducers/userReducer";

const Signin = () => {
  const { state, dispatch } = useContext(UserContext);

  const history = useHistory();
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const postCredentials = () => {
    fetch("auth/signin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          M.toast({ html: data.error, classes: "#e53935 red darken-1" });
        } else {
          localStorage.setItem("jwt", "Bearer " + data.token);
          localStorage.setItem("user", JSON.stringify(data.user));
          dispatch({ type: "USER", payload: data.user });
          M.toast({
            html: "Succesful login",
            classes: "#00c853 green accent-4",
          });
          history.push("/");
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="mycard">
      <div className="card auth-card input-field">
        <h2 className="brand-logo">Welcome back!</h2>
        <input
          type="text"
          placeholder="e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="btn waves-effect waves-light blue darken-1"
          style={{ marginTop: 20 }}
          onClick={() => postCredentials()}
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
