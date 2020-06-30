import React, { Component } from "react";

const Profile = () => {
  return (
    <div style={{ maxWidth: "600px", margin: "0px auto" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          margin: "18px 0px",
          borderBottom: "1px solid grey",
        }}
      >
        <div>
          <img
            style={{ width: 160, height: 160, borderRadius: 80 }}
            src="https://images.unsplash.com/photo-1587173399514-ebfc0f4fa396?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=784&q=80"
          />
        </div>
        <div>
          <h4>andras</h4>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "108%",
            }}
          >
            <h6>40 posts</h6>
            <h6>40 followers</h6>
            <h6>40 following</h6>
          </div>
        </div>
      </div>
      <div className="gallery">
        <img
          className="item"
          src="https://images.unsplash.com/photo-1587173399514-ebfc0f4fa396?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=784&q=80"
        />
        <img
          className="item"
          src="https://images.unsplash.com/photo-1587173399514-ebfc0f4fa396?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=784&q=80"
        />
        <img
          className="item"
          src="https://images.unsplash.com/photo-1587173399514-ebfc0f4fa396?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=784&q=80"
        />
      </div>
    </div>
  );
};

export default Profile;
