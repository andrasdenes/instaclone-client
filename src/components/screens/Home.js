import React, { Component } from "react";

const Home = () => {
  return (
    <div className="home">
      <div className="card home-card">
        <h5>andras</h5>
        <div className="card-image">
          <img src="https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80" />
        </div>
        <div className="card-content">
          <i className="material-icons" style={{ color: "red" }}>
            favorite
          </i>
          <h6>Post Title</h6>
          <p>Caption this!</p>
          <input type="text" placeholder="Add comment...." />
        </div>
      </div>
    </div>
  );
};

export default Home;
